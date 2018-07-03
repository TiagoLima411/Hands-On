import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase/app';
 
@Injectable({
  providedIn: 'root'
})
export class AfService {
  users: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) { 
    this.users = afAuth.authState;
  }
  loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider);
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
