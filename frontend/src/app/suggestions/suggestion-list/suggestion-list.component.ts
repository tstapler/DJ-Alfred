import { Component, ViewChildren, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SuggestionService } from '../suggestion.service';
import {Suggestion} from "../suggestion";

@Component({
  selector: 'suggestion-list',
  templateUrl: './suggestion-list.component.html',
  providers: [SuggestionService],
})
export class SuggestionListComponent implements OnInit {
  suggestions: Suggestion[];

  constructor(private suggestionService: SuggestionService) {}

  ngOnInit() {
    this.loadSuggestions();
  }

  loadSuggestions() {
    this.suggestionService.getSuggestions().subscribe(
        suggestions => this.suggestions = suggestions,
        err => {
          console.log(err);
        }
      )
  }
}
