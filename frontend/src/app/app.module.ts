import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

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
    EventsModule,
    SuggestionsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
