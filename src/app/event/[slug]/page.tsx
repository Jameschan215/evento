import FirstLevelHeader from '@/components/first-level-header';
import { getEvent } from '@/lib/data';
import { Metadata } from 'next';
import Image from 'next/image';

type TProps = {
	params: { slug: string };
};

export async function generateMetadata({ params }: TProps): Promise<Metadata> {
	const slug = params.slug;
	const eventItem = await getEvent(slug);

	return {
		title: eventItem.name,
	};
}

// Manually generate static pages for most popular ones
export async function generateStaticParams() {
	// Top 100 most popular events
	return [
		{
			slug: 'comedy-extravaganza',
		},
		{
			slug: 'dj-practice-session',
		},
	];
}

export default async function EventPage({ params }: TProps) {
	const slug = params.slug;
	const eventItem = await getEvent(slug);

	return (
		<main>
			<section className="relative overflow-hidden flex justify-center items-center">
				<Image
					src={eventItem.imageUrl}
					alt="Event background image"
					fill
					sizes="(max-width: 1280px) 100vw, 1280px"
					quality={50}
					priority
					className="blur-3xl z-0"
				/>

				<div className="relative z-1 flex flex-col md:flex-row gap-6 lg:gap-16 my-14 md:my-20">
					<Image
						src={eventItem.imageUrl}
						width={1035}
						height={690}
						alt={eventItem.name}
						className="w-[300px] object-fit rounded-xl border-2 border-white/50"
					/>

					<div className="flex flex-col">
						<p className="text-white/75">
							{new Date(eventItem.date).toLocaleDateString('en-US', {
								weekday: 'long',
								month: 'long',
								day: 'numeric',
							})}
						</p>

						<FirstLevelHeader className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
							{eventItem.name}
						</FirstLevelHeader>

						<p className="whitespace-nowrap text-xl text-white/75">
							Organized by{' '}
							<span className="italic">{eventItem.organizerName}</span>
						</p>

						<button className="bg-white/20 bg-blur text-lg capitalize mt-5 md:mt-auto w-[95vw] sm:w-full py-2 rounded-md border-2 border-white/10 state-effect">
							Get tickets
						</button>
					</div>
				</div>
			</section>

			<div className="min-h-[75vh] flex flex-col gap-y-12 items-center text-center px-5 py-16">
				<Section title="About this event" content={eventItem.description} />
				<Section title="Location" content={eventItem.location} />
			</div>
		</main>
	);
}

function Section({ title, content }: { title: string; content: string }) {
	return (
		<section className="mb-12">
			<h2 className="text-2xl mb-8">{title}</h2>
			<p className="max-w-4xl text-lg leading-8 text-left text-white/75">
				{content}
			</p>
		</section>
	);
}
