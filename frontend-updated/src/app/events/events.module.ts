import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { CalendarModule } from 'primeng/components/calendar/calendar';

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
    NKDatetimeModule,
    CalendarModule,
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
   EventFormComponent
 ]
})
export class EventsModule { }
