import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
	selector:'suggestion',
	templateUrl: './suggestion.component.html',
	})
export class Suggestion {
	@Input()
	suggestion: any
}
