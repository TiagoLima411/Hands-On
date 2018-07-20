import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
 
import { EventService } from '../shared/event.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  myEvents: any;
  allEvents: any;
 
  constructor(private eventService: EventService) { }
 
  ngOnInit() {
    this.getEventsList();
    this.getAllEventsList();
  }
 
  getEventsList() {
    // Use snapshotChanges().map() to store the key
    this.eventService.getEventList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(events => {
      this.myEvents = events;
    });
  }

  getAllEventsList() {
    // Use snapshotChanges().map() to store the key
    this.eventService.getEventListHome().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(events => {
      this.allEvents = events;
    });
  }
}
