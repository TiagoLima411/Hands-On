import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { Event } from '../shared/event';
import { EventService } from '..//shared/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {
  event: Event = new Event();
  submitted = false;
 
  constructor(private eventService: EventService) { }
 
  ngOnInit() {
  }

  newEvent(): void {
    this.submitted = false;
    this.event = new Event();
  }
 
  save() {
    this.eventService.createEvent(this.event);
    this.event = new Event();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<p class="snake-bar"><strong>
  Evento salvo com sucesso! 
</strong></p>`,
  styles: [`
    .snake-bar {
      color: #bbff00;
    }
  `],
})
export class PizzaPartyComponent {}