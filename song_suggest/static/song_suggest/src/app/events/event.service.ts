import { Injectable } from '@angular/core';
import { Event } from './event/event';
import { Subject } from 'rxjs/Subject';
import { MOCK_EVENTS } from './mock_events';



@Injectable()
export class EventService {
  private current_events: Event[] = MOCK_EVENTS;
  public eventSource = new Subject()

  events$ = this.eventSource.asObservable();

  getEvents() {
    return this.current_events;
  }

  addEvent(event: Event) {
    this.current_events.push(event)
    this.eventSource.next(this.current_events)
  }

}
