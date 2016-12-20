import { EventModel } from './event/event';

export const MOCK_EVENTS: EventModel[] = [
  new EventModel(
    'All Day Event',
    'stuff',
    new Date('2016-01-01'),
    new Date
  ),
  new EventModel(
    'Long Event',
    'stuff',
    new Date('2016-01-07'),
    new Date('2016-01-10')
  ),
  new EventModel(
    'Repeating Event',
    'stuff',
    new Date('2016-01-09T16:00:00'),
    new Date('2016-01-09T16:00:00')
  ),
  new EventModel(
    'Repeating Event',
    'stuff',
    new Date('2016-01-16T16:00:00'),
    new Date('2016-01-16T16:00:00')
  ),
  new EventModel(
    'Conference',
    'stuff',
    new Date('2016-01-11'),
    new Date('2016-01-13')
  )];
