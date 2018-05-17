import { Component, OnInit } from '@angular/core';
import { DbServiceService } from '../db-service.service';
import { IPlan } from '../my-plans/plan';
import { NgForm } from '@angular/forms';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from "@angular/router";
import { SelectRequiredValidatorDirective } from '../../shared/select-required-validator.directive';



@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.scss']
})






export class NewPlanComponent implements OnInit {

plan: object;



  constructor(private dbService : DbServiceService, private router: Router, private auth: AuthService){}
  
authUser = this.auth.user;


  savePlan(form:NgForm){

 

 this.dbService.savePlantoDb(this.plan).subscribe(results=>{

      var canplan=[];
      canplan.push(this.plan);
      var user = canplan[0].user;

//console.log( "var user:  "+ user);
      // var x = document.getElementById("myModal");
      // x.style.display = "block";
      //    setTimeout(function(){ x.style.display = "none" }, 2500);

       this.router.navigate(['/myplans/'+user]);

   return console.log("Plan saved!");
  })
  }





ngOnInit() {
 this.dbService.newPlan.subscribe(plan=>this.plan = plan)
}






}