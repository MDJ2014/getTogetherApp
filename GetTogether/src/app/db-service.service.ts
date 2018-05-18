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

  searchText: string = "";

  private planSource = new BehaviorSubject<object>({});
  newPlan = this.planSource.asObservable();

  private planToUpdateSource = new BehaviorSubject<object>({});
  planToUpdate = this.planToUpdateSource.asObservable();

  planToUp: object;

  googleKey: "AIzaSyBddIRZH17OVGxX5StCZlilU3AFLdcmhUY";

  constructor(private http: Http) {
    this.searchText = "";
  }

  updateNewPlan(plan, userId) {
    plan.user = userId;
    this.planSource.next(plan);
  }

  addPlanToUpdate(plan) {
    this.planToUp = plan;
  }

  updatePlan(plan): Observable<any> {
    return this.http
      .put("./api/plans/edit/" + plan._id, plan)
      .map((data: any) => data.json());
  }

  deletePlan(plan): Observable<any> {
    return (
      this.http
        .delete("./api/plans/delete/" + plan._id)
        //return this.http.delete("./api/plans/delete", plan)
        .map((data: any) => data.json())
    );
  }

  getAllPlans(auserId) {
    return this.http.get("/api/plans/" + auserId).map(res => res.json());
  }

  savePlantoDb(plan): Observable<any> {
    return this.http.post("./api/plans", plan).map((data: any) => data.json());
  }

  saveUserToDb(user) {
    return this.http.post("/api/users", user).map(res => res.json());
  }

  getSearchResults(term) {
    return this.http.post("/api/search", term).map(res => res.json());
  }

  getMap(lat, long) {
    return this.http.get(
      "https://maps.googleapis.com/maps/api/staticmap?center=lat,long&zoom=14&size=510X250$key=googleKey"
    );
  }
}
