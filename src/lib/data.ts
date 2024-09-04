'use server';

import 'server-only';
import { EventoEvent } from '@prisma/client';
import { title } from './utils';
import { notFound } from 'next/navigation';
import prisma from '@/lib/db';
import { unstable_cache } from 'next/cache';

// Get data from database
export const getEvent = unstable_cache(async (slug: string) => {
	const eventItem = await prisma.eventoEvent.findUnique({
		where: {
			slug: slug,
		},
	});

	if (!eventItem) notFound();

	return eventItem;
});

export const getEvents = unstable_cache(async (city: string, page = 1) => {
	let totalCount;

	const events = await prisma.eventoEvent.findMany({
		where: { city: city === 'all' ? undefined : title(city) },
		orderBy: { date: 'asc' },
		take: 6,
		skip: (page - 1) * 6,
	});

	if (city === 'all') {
		totalCount = await prisma.eventoEvent.count();
	} else {
		totalCount = await prisma.eventoEvent.count({
			where: { city: title(city) },
		});
	}

	if (totalCount < 1) notFound();

	return { events, totalCount };
});

// Get data from api
export async function getEventFromApi(
	slug: string
): Promise<EventoEvent | null> {
	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
	);
	const eventItem: EventoEvent = await response.json();

	if (!eventItem) notFound();

	return eventItem;
}

export async function getEventsFromAip(city: string): Promise<EventoEvent[]> {
	const response = await fetch(
		`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
	);
	const events: EventoEvent[] = await response.json();

	return events;
}
