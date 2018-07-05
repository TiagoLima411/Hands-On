import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase/app';
import { User } from './user';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class AfService {
  user$: Observable<User>;
  constructor(public afAuth: AngularFireAuth,
              public afs: AngularFirestore) { 
    this.user$ = afAuth.authState.pipe(
      switchMap(user => {
      if(user){
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    }))
  }
  loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then((credential) => {
      this.updateUser(credential.user);
    })
  }
  updateUser(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        subscribe: true,
        admin: false
      }
    }
    return userRef.set(data, { merge: true })
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
