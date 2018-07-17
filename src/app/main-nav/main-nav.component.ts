import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AfService } from '../providers/af.service';
import { User } from '../providers/user';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  user: User;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  
  constructor(private breakpointObserver: BreakpointObserver,
    public afService: AfService) {}
    
    ngOnInit() {
      this.afService.user$.subscribe(user => {
        this.user = user;
      });
      
    }
  
}
