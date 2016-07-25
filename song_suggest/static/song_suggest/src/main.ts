import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent, APP_ROUTER_PROVIDERS } from './app';

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS
]);
