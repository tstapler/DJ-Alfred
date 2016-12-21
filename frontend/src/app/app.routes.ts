import { SuggestionsComponent } from './suggestions';
import { EventsComponent } from './events';

export const routes: any = [
  { path: 'suggestions',
    component: SuggestionsComponent,
    name: 'Suggestions'
  },
  { path: '',
    component: EventsComponent,
    name: 'Events'
  }
];
