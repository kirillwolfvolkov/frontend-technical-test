import { schema } from 'normalizr';

const selectionSchema = new schema.Entity('selections');

const marketSchema = new schema.Entity('markets', {
	selections: [ selectionSchema ]
});

const eventSchema = new schema.Entity('events', {
	markets: [ marketSchema ]
});

export const eventsSchema = [eventSchema];