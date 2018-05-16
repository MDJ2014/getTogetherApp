import {Injectable} from '@angular/core';
import {IPlan} from '../my-plans/plan';
// import { HttpModule, Http, Response } from '@angular/http';
// import {Observable} from "rxjs/Observable";
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';


@Injectable()

export class SearchService{
   
//private searchurl="";
//     constructor(private http: Http){}

//private results: IPlan[]=[];




  //  this.results.push(result);


// doSearch(term): Observable<IPlan[]> {
//     return this.http.get(this.searchurl)
//         .map(this.parseData)
//         .catch(this.handleError);
// }

//constructor(private http: Http){}

// search(term){
//     return this.http.post('/api/search')
//     .map(res=>res.json());
//   }



private parseData(res: Response)  {
    return res.json() || [];
}










}