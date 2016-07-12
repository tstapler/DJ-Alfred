import { provideRouter } from '@angular/router';

import { Suggestions } from './suggestions'
import { EventsComponent } from './events'

export const routes: any = [
  { path: 'suggestions', 
    component: Suggestions,
    name: "Suggestions"
  },
  { path: '',
    component: EventsComponent,
    name: "Events"
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
