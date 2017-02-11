import {Component, Output, EventEmitter} from '@angular/core';
import { SuggestionService } from '../suggestion.service';
import {Suggestion} from "../suggestion";

@Component({
  selector: 'suggestion-box',
  templateUrl: './suggestion-box.component.html',
  providers: [ SuggestionService ],
})
export class SuggestionBoxComponent {
  suggestion_title: string;
  suggestion_artist: string;
  @Output() newSuggestion = new EventEmitter<Suggestion>();

  constructor(private suggestionService: SuggestionService) {}


  addSuggestion() {
    this.suggestionService.addSuggestion({
      artist: this.suggestion_artist,
      title: this.suggestion_title
    }).subscribe(result => {
        console.log(result);
        this.newSuggestion.emit(result as Suggestion);
    });
    this.suggestion_artist = '';
    this.suggestion_title = '';
  }
}

