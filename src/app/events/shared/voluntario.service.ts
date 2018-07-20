import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Voluntario } from './voluntario';
import { User } from './../../providers/user';
import { AfService} from './../../providers/af.service';

@Injectable({
  providedIn: 'root'
})

export class VoluntarioService {

  private dbPath = '/voluntarios';
  private db: AngularFireDatabase;
  user: User;

  eventsRef: AngularFireList<any> = null;
  /*userId: String;
  photoURL: String;
  email: String;
  displayName: String;*/

  constructor(private afd: AngularFireDatabase, private AfService: AfService) {  
    this.db = afd;
    this.AfService.user$.subscribe(user => this.user = user);
  }

  createVoluntario(eventId: String): void {
    const data: Voluntario = {
      key: null,
      eventId: eventId,
      userId: this.user.uid,
      email: this.user.email,
      nome: this.user.displayName,
      urlImage: this.user.photoURL
    }
    this.db.list(this.dbPath).push(data)
  }

  /* updateEvent(key: string, value: any): void {
    this.eventsRef.update(key, value).catch(error => this.handleError(error));
  } */

  /* updateEventTeste(event: Event, key: string, value: any): void {
    this.eventsRef.push(event).child('voluntarios').key;
  } */
 /* 
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
  } */

  /*deleteAll(): void {
    this.eventsRef.remove().catch(error => this.handleError(error));
  }*/
 
  private handleError(error) {
    console.log(error);
  }
}
