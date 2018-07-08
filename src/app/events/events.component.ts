import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers :[EventService]
})
export class EventsComponent implements OnInit {

  constructor(private EventService : EventService) { }

  ngOnInit() {
  }

}
