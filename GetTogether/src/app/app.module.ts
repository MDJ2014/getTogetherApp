import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { MyPlansComponent } from './my-plans/my-plans.component';
import { EditPlanComponent } from './edit-plan/edit-plan.component';
import { NewPlanComponent } from './new-plan/new-plan.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component';
import { DbServiceService } from './db-service.service';
import { RouteReuseStrategy } from '@angular/router';
import { ReuseStrategy } from './reuse-strategy';
import { BrowserXhr } from '@angular/http';
import {InterceptorModule} from '../interceptor';
import { AuthService } from './auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
 import { environment } from '../environments/environment.prod';
 import { AuthguardGuard } from './authguard.guard';
import { SelectRequiredValidatorDirective } from '../shared/select-required-validator.directive';





@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AboutComponent,
    MyPlansComponent,
    EditPlanComponent,
    NewPlanComponent,
    SearchFormComponent,
    SelectRequiredValidatorDirective,


  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
    ],
  providers: [
    DbServiceService, 
 {provide: RouteReuseStrategy, useClass: ReuseStrategy},
 InterceptorModule,
 AuthService,
 AuthguardGuard
    ],


  bootstrap: [AppComponent]

})
export class AppModule { }
