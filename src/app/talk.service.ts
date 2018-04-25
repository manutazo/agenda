import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
const URL = 'https://data-agenda.wedeploy.io/talks';



@Injectable()
export class TalkService {
  constructor(public http: HttpClient) { }
  
  getFilterTalks(filter?): Observable<Array<any>> {

    let params = new HttpParams();
    if (filter) {
      params = params.set('filter',
        JSON.stringify([{
          'and': [{'title': {'operator': 'similar', 'value': {'query': filter}}}]
        }]));}

    return this.http.get(URL, {params})
      .flatMap((x: any) => Observable.from(x))
      // .map(x => {
      //   console.log(x);
      //   return x;
      // })
      // .retry(10)
      .toArray();
	}
}
