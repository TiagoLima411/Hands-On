import { Component, OnInit, Input} from '@angular/core';
import { EventService } from './shared/event.service';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AfService } from '../providers/af.service';
import { User } from '../providers/user';
import { VoluntarioService } from './shared/voluntario.service';
import { Voluntario } from './shared/voluntario';
import { Event } from './shared/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers :[EventService]
})
export class EventsComponent implements OnInit {
  @Input() event: Event;

  private voluntario: Voluntario;
  user: User;

  NgModuleMatCardModule
  events: Observable<Event[]>;

  constructor(
    private EventService : EventService, 
    private db: AngularFireDatabase,
    public afService: AfService,
    private voluntarioService: VoluntarioService,
  ) { }

  ngOnInit() {
    this.events = this.getPages('/events');
    this.afService.user$.subscribe(user => {
      this.user = user;
    });
  }

  getPages(listPath): Observable<any[]> {
    return this.db.list(listPath, ref => ref.orderByChild('active').equalTo(Boolean(true))).valueChanges();
  }

  createVoluntario() {
    this.voluntarioService.createVoluntario(this.event.key)
  }

}
