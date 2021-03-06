import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSnackBarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { signupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EventsComponent } from './events/events.component';
import { EventComponent} from './events/event/event.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { FormsModule} from '@angular/forms';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { AboutComponent } from './about/about.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    LoginPageComponent,
    AdminPageComponent,
    EventsComponent,
    EventComponent,
    EventListComponent,
    EventDetailComponent,
    signupPageComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,    
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    AppRoutingModule
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
