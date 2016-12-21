import { Component, OnInit, Input} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EventFormComponent } from './../event-form';
import { EventService } from './../event.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  
  @Input() events: any[];

  constructor(private eventService: EventService, private modalService: NgbModal) {}

  ngOnInit() {} 

  deleteEvent(event) {
    this.eventService.deleteEvent(event);
  }

  editEvent(event){
    let modal = this.modalService.open(EventFormComponent)
    modal.componentInstance.modal = modal;
    modal.componentInstance.event = event;
  }
}
