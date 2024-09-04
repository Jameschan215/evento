import EventCard from './event-card';
import { getEvents } from '@/lib/data';
import PaginationControls from '@/components/pagination-controls';

type TEventsList = {
	city: string;
	page?: number;
};

export default async function EventsList({ city, page = 1 }: TEventsList) {
	const { events, totalCount } = await getEvents(city, page);

	const prevPath = page > 1 ? `/events/${city}?page=${page - 1}` : '';
	const nextPath =
		totalCount && totalCount > page * 6
			? `/events/${city}?page=${page + 1}`
			: '';

	return (
		<section className="flex flex-wrap justify-center gap-10 max-w-[1100px] px-[20px]">
			{events.map((eventItem) => (
				<EventCard key={eventItem.id} eventItem={eventItem} />
			))}

			<PaginationControls prevPath={prevPath} nextPath={nextPath} />
		</section>
	);
}
