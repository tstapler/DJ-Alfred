import { Component, OnInit, Input} from '@angular/core';
import { Schedule } from 'primeng/primeng';

@Component({
  selector: 'event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css'],
})
export class EventCalendarComponent implements OnInit {
  @Input() events: any[];
  header: any;

  constructor() {}

  ngOnInit() {
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }
}
