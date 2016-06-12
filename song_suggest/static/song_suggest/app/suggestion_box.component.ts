import { Component, Output } from '@angular/core';
import { SuggestionService } from './suggestion.service';

@Component({
  selector: 'suggestion_box',
  templateUrl: './app/suggestion_box.component.html',
  providers: [ SuggestionService ],
  outputs: ['counterChange:change']
})
export class SuggestionBox {
	constructor(private suggestionService: SuggestionService) {}
  suggestion_title: string;
  suggestion_artist: string;


  addSuggestion() {
    this.suggestionService.addSuggestion({
      artist: this.suggestion_artist,
      title: this.suggestion_title
    })
    this.suggestion_artist = "";
    this.suggestion_title = "";
  }
}

