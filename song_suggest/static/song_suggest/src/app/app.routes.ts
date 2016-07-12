import { provideRouter, RouterConfig } from '@angular/router';

import { Suggestions } from './suggestions'

export const routes: RouterConfig = [
  { path: '', 
    component: Suggestions,
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
