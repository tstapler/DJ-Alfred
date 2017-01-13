import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'angular-calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EventsComponent } from './events.component';
import { EventComponent } from './event';
import { EventCalendarComponent } from './event-calendar';
import { EventFormComponent } from './event-form';
import { EventListComponent } from './event-list';
import { EventService } from './event.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    CalendarModule.forRoot(),
  ],
  declarations: [
    EventComponent,
    EventsComponent,
    EventCalendarComponent,
    EventFormComponent,
    EventListComponent,
  ],
 providers: [
  EventService,
 ],
 entryComponents: [
   EventFormComponent,
 ]
})
export class EventsModule { }
