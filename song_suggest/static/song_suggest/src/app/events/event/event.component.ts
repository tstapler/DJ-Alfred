import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  name: String;
  desc: String;
  start: Date;
  end: Date;

  constructor(name: String, desc: String, start: Date, end: Date) {
    this.name = name;
    this.desc = desc;
    this.start = start;
    this.end = end;
  }

  ngOnInit() {
  }

}
