import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DbServiceService } from "../db-service.service";
import { IPlan } from "../my-plans/plan";
import { NgForm } from "@angular/forms";
import { Validators, FormGroup, FormArray, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-plan",
  templateUrl: "./edit-plan.component.html",
  styleUrls: ["./edit-plan.component.scss"]
})
export class EditPlanComponent implements OnInit {
  public editplan: object;

  checkConfirm = true;

  modalText: string;

  constructor(private dbService: DbServiceService, private router: Router) {}

  ngOnInit() {
    this.editplan = this.dbService.planToUp;
  }

  // form: NgForm
  onSubmit() {
    this.dbService.updatePlan(this.editplan).subscribe(results => {
      this.modalText = "Updated";
      var x = document.getElementById("editModal");
      x.style.display = "block";
    });
  }

  delete() {
    this.dbService.deletePlan(this.editplan).subscribe(results => {
      this.modalText = "Deleted";

      var x = document.getElementById("editModal");
      x.style.display = "block";
    });
  }

  confirmEdit() {
    this.checkConfirm = !this.checkConfirm;
  }

  goToMyPlans() {
    var canplan = [];
    canplan.push(this.editplan);
    var user = canplan[0].user;
    this.router.navigate(["/myplans/" + user]);
  }
}
