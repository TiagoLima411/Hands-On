import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AfService } from '../providers/af.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriberGuard implements CanActivate {
  constructor(private af: AfService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.af.user$.pipe(
      take(1),
      map(user => user && user.roles.subscribe ? true : false),
      tap( isAdmin => {
        if(!isAdmin){
          console.error("Acesso negado - pagina para escritos");
        }
      })
    );
  }
}
