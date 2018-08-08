import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { signupPageComponent } from './signup-page/signup-page.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { AfService } from './providers/af.service';
import { AdminGuard } from './guards/admin.guard';
import { SubscriberGuard } from './guards/subscriber.guard';
import { VoluntarioService } from './events/shared/voluntario.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: signupPageComponent },
  { path: 'events', component: EventListComponent, canActivate: [SubscriberGuard] },
  { path: 'allevents', component: EventsComponent, canActivate: [SubscriberGuard] },
  { path: 'event', component: EventComponent, canActivate: [SubscriberGuard] },
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AfService, AdminGuard, SubscriberGuard, VoluntarioService],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { 
}