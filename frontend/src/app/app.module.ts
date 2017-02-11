import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule, JsonpModule} from '@angular/http';

import { CalendarModule } from 'angular-calendar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Navbar } from './shared';
import { routes } from './app.routes';
import { EventsModule } from './events';
import { EventFormComponent } from './events/event-form';
import { SuggestionsModule } from './suggestions';


@NgModule({
  declarations: [
    AppComponent,
    Navbar,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    EventsModule,
    SuggestionsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    CalendarModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
