import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  private dbPath = '/events';

  eventsRef: AngularFireList<Event> = null;
  userId: String;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.eventsRef = db.list(this.dbPath);
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }
 
  createEvent(event: Event): void {
    event.userId = this.userId;
    this.eventsRef.push(event);
  }
 
  updateEvent(key: string, value: any): void {
    this.eventsRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteEvent(key: string): void {
    this.eventsRef.remove(key).catch(error => this.handleError(error));
  }
 
  getEventList(): AngularFireList<Event> {
    if (!this.userId) return;
    return this.eventsRef;
  }
 
  deleteAll(): void {
    this.eventsRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }
}
