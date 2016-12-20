import { Component, Output } from '@angular/core';
import { SuggestionService } from '../suggestion.service';

@Component({
  selector: 'suggestion-box',
  templateUrl: './suggestion-box.component.html',
  providers: [ SuggestionService ],
})
export class SuggestionBoxComponent {
  constructor(private suggestionService: SuggestionService) {}
  suggestion_title: string;
  suggestion_artist: string;


  addSuggestion() {
    this.suggestionService.addSuggestion({
      artist: this.suggestion_artist,
      title: this.suggestion_title
    });
    this.suggestion_artist = '';
    this.suggestion_title = '';
  }
}

