import Link from 'next/link';
import SearchForm from '../components/search-form';
import FirstLevelHeader from '../components/first-level-header';

export default function Home() {
	return (
		<main className="flex flex-col items-center mt-36 px-3">
			<FirstLevelHeader>Find events round you</FirstLevelHeader>

			<p className="mt-7 mb-12 text-2xl lg:text-3xl opacity-75">
				Browse more than{' '}
				<span className="text-accent font-bold italic">10,000 events</span>{' '}
				around you
			</p>

			<SearchForm />

			<section className="mt-4 flex items-center gap-x-3 text-sm text-white/50">
				<p>Popular: </p>
				<div className="space-x-2 font-semibold">
					<Link href="events/austin">Austin</Link>
					<Link href="events/seattle">Seattle</Link>
				</div>
			</section>
		</main>
	);
}
