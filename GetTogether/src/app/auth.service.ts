import { Injectable, EventEmitter, Output } from "@angular/core";
import * as firebase from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { Subject, BehaviorSubject } from "rxjs/Rx";
import { Http } from "@angular/http";



@Injectable()
export class AuthService {

  //vars for holding, updating, emitting user creds

  user: Observable<firebase.User>;

  AuthUser$ = new BehaviorSubject("");

  //helpers for use in other components
  getAuthUser() {
    return this.AuthUser$;
  }
  setAuthUser(creds) {
    this.AuthUser$.next(creds);
  }


  constructor(private afAuth: AngularFireAuth, private http: Http, private router: Router) {
    this.user = afAuth.authState;
  }

//firebase, twitter auth
  twitterLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.TwitterAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
         this.saveUserToDb(res);
        },
        err => {
          console.log("Not Authorized");
          reject(err);
        }
      )
     
    });
  }


result:any;

saveUserToDb(res){

  var authUser = res.user;

  var creds = {
    userId: authUser.uid,
    userName: authUser.displayName,
    photo: authUser.photoURL
  };

   this.http.post("/api/users", creds).subscribe({ error: e => console.error(e) });
   //.subscribe(error => this.result =error);


}






//sign out
  signOut(): void {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(["/"]);
    });
  }
}
