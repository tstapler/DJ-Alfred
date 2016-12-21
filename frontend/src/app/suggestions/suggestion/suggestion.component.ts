import { Component, Input } from '@angular/core';

@Component({
  selector: 'suggestion',
  templateUrl: './suggestion.component.html',
})
export class SuggestionComponent {
  @Input()
  suggestion: any;
}
