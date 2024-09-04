import SkeletonCard from '@/components/skeleton-card';

export default function Loading() {
	return (
		<div className="flex flex-wrap justify-center mx-auto gap-20 max-w-[1100px] px-5 py-5">
			{Array.from({ length: 6 }).map((_, i) => (
				<SkeletonCard className="h-40" key={i} />
			))}
		</div>
	);
}
