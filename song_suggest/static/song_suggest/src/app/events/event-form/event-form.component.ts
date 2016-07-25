import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from './../event/event'; 
import 'ng2-datetime/src/vendor/bootstrap-datepicker/bootstrap-datepicker.min.js';
import 'ng2-datetime/src/vendor/bootstrap-timepicker/bootstrap-timepicker.min.js';
import { NKDatetime } from 'ng2-datetime/ng2-datetime'

@Component({
  moduleId: module.id,
  selector: 'event-form',
  directives: [ NKDatetime ],
  templateUrl: 'event-form.component.html',
  styleUrls: ['event-form.component.css']
})
export class EventFormComponent implements OnInit {
  event: Event;

  constructor() {
  this.event = new Event('', '', new Date, new Date)
  }

  ngOnInit() {
  }

}
