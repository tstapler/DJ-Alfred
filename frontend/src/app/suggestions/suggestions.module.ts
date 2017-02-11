import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from "@angular/http";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SuggestionListComponent } from './suggestion-list';
import { SuggestionBoxComponent } from './suggestion-box';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionService } from './suggestion.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    SuggestionsComponent,
    SuggestionBoxComponent,
    SuggestionListComponent
  ],
  providers: [
    SuggestionService
  ]
})
export class SuggestionsModule { }
