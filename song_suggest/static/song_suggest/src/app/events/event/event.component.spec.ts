/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EventComponent } from './event.component';

describe('Component: Event', () => {
  it('should create an instance', () => {
    let component = new EventComponent('Name', 'Description', new Date, new Date);
    expect(component).toBeTruthy();
  });
});
