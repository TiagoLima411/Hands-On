import { Component, OnInit, Input } from '@angular/core';
 
import { Event } from './../shared/event';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  @Input() event: Event;
 
  constructor(private eventService: EventService) { }
 
  ngOnInit() {
  }
 
  updateActive(isActive: boolean) {
    this.eventService.updateEvent(this.event.key, { active: isActive });
  }
 
  deleteEvent() {
    this.eventService.deleteEvent(this.event.key);
  }

}
