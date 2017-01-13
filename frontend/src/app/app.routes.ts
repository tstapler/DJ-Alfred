import { SuggestionsComponent } from './suggestions';
import { EventsComponent } from './events';

export const routes: any = [
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'suggestions',
    component: SuggestionsComponent,
    name: 'Suggestions'
  },
  { path: 'events',
    component: EventsComponent,
    name: 'Events'
  }
];
