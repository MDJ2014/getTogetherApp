import { Component, OnInit } from "@angular/core";
import { HttpModule, Http, Response } from "@angular/http";
import { DbServiceService } from "./db-service.service";
import { AngularFirestore } from "angularfire2/firestore";
import { AuthService } from "./auth.service";
import { AuthguardGuard } from "./authguard.guard";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DbServiceService, AuthService, AuthguardGuard]
})


export class AppComponent implements OnInit {
  user: any = [];
  plans: any =[];

  constructor(
    private dbService: DbServiceService,
    public authService: AuthService,
    private router: Router,
    db: AngularFirestore
  ) {}

  ngOnInit() { }

  //get user info and navigate to user's plan list
  goToPlans() {
    var authId = this.user[0].userId;

    this.router.navigate(["/myplans/" + authId]);
  }

  //firebase - twitter auth login call to the authService
  loginWithTwitter(): void {
    this.authService.twitterLogin().then(result => 
      this.afterSignIn(result));

  }
//get info from auth user's login creds
  afterSignIn(result) {
    var authUser = result.user;

    var creds = {
      userId: authUser.uid,
      userName: authUser.displayName,
      photo: authUser.photoURL
    };

    this.user.push(creds);

    this.saveUser(creds);

  }


//save user info 
  saveUser(usercreds) {
    this.authService.setAuthUser(usercreds);
  }

  
//logout
  logOut() {
    this.user = [];
    this.authService.setAuthUser("");
    this.authService.signOut();
  }
}
