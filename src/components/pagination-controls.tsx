import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

export default function PaginationControls({
	prevPath,
	nextPath,
}: {
	prevPath: string;
	nextPath: string;
}) {
	return (
		<section className="w-full flex justify-between items-center">
			<PaginationButton path={prevPath} content="Prev" />
			<PaginationButton path={nextPath} content="Next" />
		</section>
	);
}

function PaginationButton({
	path,
	content,
}: {
	path: string;
	content: 'Prev' | 'Next';
}) {
	return (
		<>
			{path === '' && <div />}

			{path !== '' && (
				<Link
					href={path}
					className="text-white text-sm bg-white/5 px-5 py-2 rounded-md flex items-center gap-x-2 opacity-75 hover:opacity-100 transition">
					{content === 'Prev' && <ArrowLeftIcon />}
					{content}
					{content === 'Next' && <ArrowRightIcon />}
				</Link>
			)}
		</>
	);
}
