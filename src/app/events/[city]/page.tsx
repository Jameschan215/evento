import Loading from '@/app/events/[city]/loading';
import EventsList from '@/components/events-list';
import FirstLevelHeader from '@/components/first-level-header';
import { title } from '@/lib/utils';
import { Metadata } from 'next';
import { Suspense } from 'react';
import z from 'zod';

type TGenerateMetadataProps = {
	params: { city: string };
};

type TEventsPageProps = TGenerateMetadataProps & {
	searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: TGenerateMetadataProps): Metadata {
	const city = title(params.city);

	return {
		title: city === 'All' ? 'All events' : `Events in ${city}`,
	};
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
	params,
	searchParams,
}: TEventsPageProps) {
	const city = params.city;
	// if it is empty or undefined or something else that is not a number
	// give it number 1
	// const page = searchParams.page || 1;
	const parsedPage = pageNumberSchema.safeParse(searchParams.page);

	if (!parsedPage.success) {
		throw new Error('Invalid page number!');
	}

	return (
		<main className="flex flex-col items-center my-24 px-[20px] min-h-[110vh]">
			<FirstLevelHeader className="mb-28">
				{city === 'All' ? 'All Events' : `Events in ${title(city)}`}
			</FirstLevelHeader>

			<Suspense key={city + parsedPage.data} fallback={<Loading />}>
				<EventsList city={city} page={parsedPage.data} />
			</Suspense>
		</main>
	);
}
