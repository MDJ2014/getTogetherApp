import { Injectable, EventEmitter, Output } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  private AuthUser$ = new Subject();

  getAuthUser(){return this.AuthUser$}
  setAuthUser(creds){this.AuthUser$.next(creds)}


  constructor(private afAuth: AngularFireAuth,   private router: Router,) {
this.user = afAuth.authState;

    }


    twitterLogin(){
      return new Promise<any>((resolve, reject) => {
        let provider = new firebase.auth.TwitterAuthProvider();
        this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        })
      })
   }




   signOut(): void {
    this.afAuth.auth.signOut().then(() => {
    this.router.navigate(['/']);
    });
  }






}