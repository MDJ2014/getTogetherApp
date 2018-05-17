import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { DbServiceService } from './db-service.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './auth.service';
import { AuthguardGuard } from './authguard.guard';
import {Router} from "@angular/router";
//import 'rxjs/add/observable/interval'; 
//import 'rxjs/add/operator/takeWhile'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 providers: [DbServiceService, AuthService, AuthguardGuard] 
})



export class AppComponent implements OnInit {

  user: any= [];






  constructor(private dbService: DbServiceService, public authService: AuthService, private router: Router, db: AngularFirestore) { 

  }




ngOnInit(){

}

goToPlans(){

  var authId = this.user[0].userId;

  this.router.navigate(['/myplans/'+authId]);
}


loginWithTwitter():void {

 this.authService.twitterLogin()
 .then((result)=>
 //console.log(result.displayname) );
this.afterSignIn(result));
}


afterSignIn(result){

var authUser = result.user;

var creds = {
  userId: authUser.uid,
  userName: authUser.displayName,
  photo: authUser.photoURL,
};

this.user.push(creds)

this.saveUser(creds);


};


saveUser(usercreds){

 this.authService.setAuthUser(usercreds);
  this.dbService.saveUserToDb(usercreds).subscribe(results=>{
    console.log("User saved");
  });
  
}

logOut(){
  this.user=[];
  this.authService.signOut();
}




}
