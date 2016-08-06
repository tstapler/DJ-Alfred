/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EventCalendarComponent } from './event-calendar.component';

describe('Component: EventCalendar', () => {
  it('should create an instance', () => {
    let component = new EventCalendarComponent();
    expect(component).toBeTruthy();
  });
});
