import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatInputModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { EventListComponent } from './event-list/event-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AfService } from './providers/af.service';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';
import { AdminPageComponent } from './admin-page/admin-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'events', component: EventListComponent, canActivate: [SubscriberGuard] },
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    EventListComponent,
    LoginPageComponent,
    AdminPageComponent
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [AfService, AdminGuard, SubscriberGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
