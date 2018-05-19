import { Component, OnInit, ElementRef } from '@angular/core';
import { IPlan } from './plan';
import { DbServiceService } from '../db-service.service';
import { NgForm} from "@angular/forms";
import { ViewChildren, AfterViewInit, Inject, QueryList } from '@angular/core';
import { EditPlanComponent } from '../edit-plan/edit-plan.component';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFireModule } from 'angularfire2';



@Component({
  selector: 'app-my-plans',
  templateUrl: './my-plans.component.html',
  styleUrls: ['./my-plans.component.scss']

})



export class MyPlansComponent implements OnInit{



  constructor(private dbService: DbServiceService,  private router: Router, private route: ActivatedRoute, private auth: AuthService) { }

plans: IPlan[] = [];

authUser:any;

 google: any;

planIndex: any = -1;


ngOnInit() {
  
this.route.params.subscribe(params => { this.authUser = params['authId']; });

this.getAllPlans();

}

//get list of plans 
getAllPlans(){
  this.dbService.getAllPlans(this.authUser).subscribe(plans => {
    this.plans= plans;
  });

  
}



//get plan information to be updated
edit(event){
  var target = event.target || event.srcElement || event.currentTarget;
  var idAttr = target.attributes.id;
   var index = idAttr.nodeValue;
   let planToEdit = this.plans[index];
   this.dbService.addPlanToUpdate(planToEdit);
}





 }
