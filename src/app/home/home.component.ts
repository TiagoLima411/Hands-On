import { Component, OnInit, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  NgModuleMatCardModule
  pagesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.pagesObservable = this.getPages('/events');
  }
  
  getPages(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
