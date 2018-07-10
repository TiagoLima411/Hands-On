import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  private dbPath = '/events';

  eventsRef: AngularFireList<Event> = null;

  constructor(private db: AngularFireDatabase) {
    this.eventsRef = db.list(this.dbPath);
  }
 
  createEvent(event: Event): void {
    this.eventsRef.push(event);
  }
 
  updateEvent(key: string, value: any): void {
    this.eventsRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteEvent(key: string): void {
    this.eventsRef.remove(key).catch(error => this.handleError(error));
  }
 
  getEventList(): AngularFireList<Event> {
    return this.eventsRef;
  }
 
  deleteAll(): void {
    this.eventsRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }
}
