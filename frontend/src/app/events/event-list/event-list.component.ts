import { Component, OnInit, Input} from '@angular/core';
import { EventComponent } from './../event/event.component';
import { EventService } from './../event.service';

@Component({
  moduleId: module.id,
  selector: 'event-list',
  templateUrl: 'event-list.component.html',
  styleUrls: ['event-list.component.css'],
  directives: [ EventComponent ],
})
export class EventListComponent implements OnInit {
  
  @Input() events: any[];
  @Input() modal: any;

  constructor(private eventService: EventService) {}

  ngOnInit() {} 

  deleteEvent(event) {
    this.eventService.deleteEvent(event);
  }

  editEvent(event){
    this.eventService.setSelectedEvent(event)
    this.modal.show()
  }
}
