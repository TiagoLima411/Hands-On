import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
 
import { Event } from '../shared/event';
import { EventService } from '..//shared/event.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {
  event: Event = new Event();
  image: string;
  submitted = false;

  content: string
  title: string


  uploadPercent: Observable<number>
  downloadURL: Observable<string>
 
  constructor(private eventService: EventService,  private storage: AngularFireStorage) { }
 
  ngOnInit() {
  }

  newEvent(): void {
    this.submitted = false;
    this.event = new Event();
  }
 
  save() {
    this.event.urlImage = this.image;
    this.eventService.createEvent(this.event);
    this.event = new Event();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  uploadImage(event) {
    const file = event.target.files[0]
    const path = `events/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files')
    } else {
      const task = this.storage.upload(path, file)
      const ref = this.storage.ref(path);
      this.uploadPercent = task.percentageChanges()
      console.log('Image Uploaded!')
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = ref.getDownloadURL()
          this.downloadURL.subscribe(url => (this.image = url));
        })
      )
      .subscribe();
    }
  }

}
