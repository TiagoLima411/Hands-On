import { Component, OnInit, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AfService } from '../providers/af.service';
import { User } from '../providers/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  user: User;
  NgModuleMatCardModule
  pagesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase,
    public afService: AfService) { }

  ngOnInit() {
    this.afService.user$.subscribe(user => {
      this.user = user;
    });
    this.pagesObservable = this.getPages('/events');
  }
  
  getPages(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
