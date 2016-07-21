import { Component, OnInit, Input} from '@angular/core';
import { EventComponent } from './../event/event.component';

@Component({
  moduleId: module.id,
  selector: 'event-list',
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.css'],
  directives: [ EventComponent ]
})
export class EventListComponent implements OnInit {
  
  @Input() events: any[];

  constructor() {}

  ngOnInit() {} 

  createEvent(event) {
    this.events.push(event);
  }

  deleteEvent(event) {
    var i = this.events.indexOf(event);
    if(i != -1) {
      this.events.splice(i, 1);
    }
  }
}
