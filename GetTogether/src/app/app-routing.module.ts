import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { MyPlansComponent } from './my-plans/my-plans.component';
import {EditPlanComponent } from './edit-plan/edit-plan.component';
import {NewPlanComponent } from './new-plan/new-plan.component';
import { AuthguardGuard } from './authguard.guard';




const routes: Routes = [
    {
      path: '',
    
      component: SearchComponent,
      data: { shouldReuse: true}
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'myplans/:authId',
      component: MyPlansComponent,
      canActivate: [AuthguardGuard],
      data: { shouldReuse: false }
     
    },
     
    {
      path: 'editplan',
      component: EditPlanComponent,
      canActivate: [AuthguardGuard]
    },
    {
      path: 'newplan',
      component: NewPlanComponent,
      canActivate: [AuthguardGuard]
    },
  
   
  ];
  

  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule {
  }