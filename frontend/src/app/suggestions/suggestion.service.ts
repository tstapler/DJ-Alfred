import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Suggestion } from './suggestion';
import { mock_suggestions } from './mock-suggestion';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SuggestionService {
  private suggestionsUrl = "http://localhost:8080/songSuggestions";

  constructor(private http: Http){}

  getSuggestions() : Observable<Suggestion[]> {
      return this.http.get(this.suggestionsUrl)
        .map((res:Response) => res.json()._embedded.songSuggestions)
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  addSuggestion(body: Object) : Observable<Suggestion> {
    console.log("Made it to service with", body);
    let bodyString = JSON.stringify(body);
    console.log(bodyString);
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.suggestionsUrl, bodyString, options)
      .map((res:Response) => res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }
}
