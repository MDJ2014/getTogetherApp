import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { IPlan } from "./my-plans/plan";
import { Subject } from "rxjs/Subject";
import { RequestOptions, Request, Headers } from "@angular/http";




@Injectable()
export class DbServiceService {
  requestOptions = new RequestOptions({
    headers: null,
    withCredentials: true
  });

  //var for twitter search
  searchText: string = "";

  //sets the new plan as observable
  private planSource = new BehaviorSubject<object>({});
  newPlan = this.planSource.asObservable();

  //sets plan to be edited as observable
  private planToUpdateSource = new BehaviorSubject<object>({});
  planToUpdate = this.planToUpdateSource.asObservable();

  planToUp: object;



  constructor(private http: Http) {
    this.searchText = "";
  }

  //gets new plan object and sets as observable
  updateNewPlan(plan, userId) {
    plan.user = userId;
    this.planSource.next(plan);
  }
//receives plan to update and sets the var
  addPlanToUpdate(plan) {
    this.planToUp = plan;
  }

  //updates plan in the db
  updatePlan(plan): Observable<any> {
    return this.http
      .put("./api/plans/edit/" + plan._id, plan)
      .map((data: any) => data.json());
  }
//deletes plan in the db
  deletePlan(plan): Observable<any> {
    return (
      this.http
        .delete("./api/plans/delete/" + plan._id)
        //return this.http.delete("./api/plans/delete", plan)
        .map((data: any) => data.json())
    );
  }

  //gets user's plans from db
  getAllPlans(auserId) {
    return this.http.get("/api/plans/" + auserId).map(res => res.json());
  }

  //saves new plan to db
  savePlantoDb(plan): Observable<any> {
    return this.http.post("./api/plans", plan).map((data: any) => data.json());
  }

  //save user to db
  saveUserToDb(user) {
    return this.http.post("/api/users", user).map(res => res.json());
  }

  //sends search term to api to fetch search results
  getSearchResults(term) {
    return this.http.post("/api/search", term).map(res => res.json());
  }

}
