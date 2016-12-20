import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SuggestionListComponent } from './suggestion-list';
import { SuggestionBoxComponent } from './suggestion-box';
import { SuggestionsComponent } from './suggestions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    SuggestionsComponent,
    SuggestionBoxComponent,
    SuggestionListComponent
  ]
})
export class SuggestionsModule { }
