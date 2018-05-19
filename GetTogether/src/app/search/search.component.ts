import { Component, OnInit } from "@angular/core";
import { IPlan } from "../my-plans/plan";
import { DbServiceService } from "../db-service.service";
import { SearchFormComponent } from "../search-form/search-form.component";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})

export class SearchComponent implements OnInit {
  parseInt = parseInt;

  searchCriteria: string;

  locations: object[] = [];

  authUser: any;

  constructor(private dbService: DbServiceService, private auth: AuthService) {}

  ngOnInit() {
    //get user info
    this.auth.AuthUser$.subscribe(data => {
      this.authUser = data;
    });
  }

  //sends new plan object to the dbService: to be retrieved by the NewPlan component for editing
  onClick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var index = idAttr.nodeValue;
    var planobj = this.locations[index];

    let Auser = this.authUser.userId;
    this.dbService.updateNewPlan(planobj, Auser);
  }

  //sends search terms to the db service
  sendSearch(searchCriteria) {
    this.dbService.getSearchResults(searchCriteria).subscribe(results => {
      this.locations = results.businesses;
    });
  }
}
