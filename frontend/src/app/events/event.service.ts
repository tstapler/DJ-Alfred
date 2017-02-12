import { Injectable } from '@angular/core';
import { EventModel } from './event/event';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MOCK_EVENTS } from './mock_events';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class EventService {
  //private current_events: EventModel[] = MOCK_EVENTS;
  //private current_event: EventModel = new EventModel('Test Event', '', new Date(), new Date());
  //public eventSource = new BehaviorSubject(this.current_events);
  //public currentEventSource = new BehaviorSubject(this.current_event);

  //events$ = this.eventSource.asObservable();
  //current_event$ = this.currentEventSource.asObservable();
  private eventsUrl = "http://localhost:8080/events";

  constructor(private http: Http) {}

  getEvents() {
    return this.http.get(this.eventsUrl)
      .map((res: Response) => res.json()._embedded.events)
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'))
  }

  addEvent(event: EventModel) {
    let bodyString = JSON.stringify(event);
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.eventsUrl, bodyString, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }


  deleteEvent(event: EventModel) {
    var i = this.current_events.indexOf(event);
    if(i !== -1) {
      this.current_events.splice(i, 1);
    }
    this.eventSource.next(this.current_events);
  }

  updateEvent(event: EventModel) {
    var index = this.current_events.indexOf(event);
    this.current_events[index] = event;
  }

  getSelectedEvent() {
    return this.current_event;
  }

  setSelectedEvent(event: EventModel) {
    this.current_event = event;
    this.currentEventSource.next(this.current_event);
  }


}
