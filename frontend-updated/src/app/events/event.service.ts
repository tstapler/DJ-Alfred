import { Injectable } from '@angular/core';
import { EventModel } from './event/event';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MOCK_EVENTS } from './mock_events';


@Injectable()
export class EventService {
  private current_events: EventModel[] = MOCK_EVENTS;
  private current_event: EventModel = new EventModel('Test Event', '', new Date(), new Date());
  public eventSource = new BehaviorSubject(this.current_events);
  public currentEventSource = new BehaviorSubject(this.current_event);

  events$ = this.eventSource.asObservable();
  current_event$ = this.currentEventSource.asObservable();

  getEvents() {
    return this.current_events;
  }

  addEvent(event: EventModel) {
    this.current_events.push(event);
    this.eventSource.next(this.current_events);
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
