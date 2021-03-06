import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  private dbPath = '/events';
  private db: AngularFireDatabase;

  eventsRef: AngularFireList<Event> = null;
  userId: String;
  photoURL: String;
  email: String;
  displayName: String;

  data: Date; 

  constructor(private afd: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.data = new Date();
    this.db = afd;
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.userId = user.uid
        this.photoURL = user.photoURL
        this.email = user.email
        this.displayName = user.displayName
      }
    })
  }

  createEvent(event: Event): void {
    event.userId = this.userId;
    event.likes = 0;
    event.criadoEm = this.data.toISOString().substring(0, 10);
    this.eventsRef.push(event);
  }
 
  updateEvent(key: string, value: any): void {
    this.eventsRef.update(key, value).catch(error => this.handleError(error));
  }

  /* updateEventTeste(event: Event, key: string, value: any): void {
    this.eventsRef.push(event).child('voluntarios').key;
  } */
 
  deleteEvent(key: string): void {
    this.eventsRef.remove(key).catch(error => this.handleError(error));
  }
 
  getEventList(): AngularFireList<Event> {
    if (!this.userId) return;
    return this.eventsRef = this.db.list(
      this.dbPath, ref => ref.orderByChild('userId').equalTo(String(this.userId))
    );;
  }
 
  getEventListHome(): AngularFireList<Event> {
    if (!this.userId) return;
    return this.eventsRef = this.db.list(
      this.dbPath, ref => ref.orderByChild('active').equalTo(Boolean(true))
    );;
  }

  /*deleteAll(): void {
    this.eventsRef.remove().catch(error => this.handleError(error));
  }*/
 
  private handleError(error) {
    console.log(error);
  }
}
