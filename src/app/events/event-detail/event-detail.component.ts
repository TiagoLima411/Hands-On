import { Component, OnInit, Input } from '@angular/core';
 
import { Event } from './../shared/event';
import { EventService } from '../shared/event.service';
import { VoluntarioService } from '../shared/voluntario.service';
import { AfService } from '../../providers/af.service';
import { User } from '../../providers/user';
import { Voluntario } from './../shared/voluntario';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
}) 

export class EventDetailComponent implements OnInit {

  @Input() event: Event;
  private voluntario: Voluntario;
  user: User;

  constructor(
    private eventService: EventService, 
    private voluntarioService: VoluntarioService,
    public AfService: AfService
  ) { }
 
  ngOnInit() {
    this.AfService.user$.subscribe(user => this.user = user);
  }
 
  updateActive(isActive: boolean) {
    this.eventService.updateEvent(this.event.key, { active: isActive });
  }

  createVoluntario() {
    this.voluntarioService.createVoluntario(this.event.key)
  }
 
  deleteEvent() {
    this.eventService.deleteEvent(this.event.key);
  }

}
