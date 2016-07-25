import { Event } from './event/event';

export const MOCK_EVENTS: Event[] = [
  new Event(
    "All Day Event",
    "stuff",
    new Date("2016-01-01"),
    new Date
  ),
  new Event(
    "Long Event",
    "stuff",
    new Date("2016-01-07"),
    new Date("2016-01-10")
  ),
  new Event(
    "Repeating Event",
    "stuff",
    new Date("2016-01-09T16:00:00"),
    new Date("2016-01-09T16:00:00")
  ),
  new Event(
    "Repeating Event",
    "stuff",
    new Date("2016-01-16T16:00:00"),
    new Date("2016-01-16T16:00:00")
  ),
  new Event(
    "Conference",
    "stuff",
    new Date("2016-01-11"),
    new Date("2016-01-13")
  )];
