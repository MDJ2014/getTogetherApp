import { Component, OnInit } from "@angular/core";
import { DbServiceService } from "../db-service.service";
import { IPlan } from "../my-plans/plan";
import { NgForm } from "@angular/forms";
import { Validators, FormGroup, FormArray, FormBuilder } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-plan",
  templateUrl: "./new-plan.component.html",
  styleUrls: ["./new-plan.component.scss"]
})
export class NewPlanComponent implements OnInit {
  plan: object;

  constructor(
    private dbService: DbServiceService,
    private router: Router,
    private auth: AuthService
  ) {}

  //get auth user
  authUser = this.auth.user;
  canplan = [];

//get ref to plan to be saved and show confirmation after saved
  savePlan(form: NgForm) {
    this.dbService.savePlantoDb(this.plan).subscribe(results => {
      this.canplan.push(this.plan);
      var user = this.canplan[0].user;

      var x = document.getElementById("myModal");
      x.style.display = "block";
    });
  }

  //return to plan list after clicking confirmation
  goToMyPlans() {
    var user = this.canplan[0].user;
    this.router.navigate(["/myplans/" + user]);
  }

  ngOnInit() {
    //gets new plan object from the service to display
    this.dbService.newPlan.subscribe(plan => (this.plan = plan));
  }
}
