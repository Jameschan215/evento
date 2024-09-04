import Skeleton from '@/components/skeleton';

export default function Loading() {
	return (
		<div className="flex flex-col items-center gap-y-4 pt-28">
			<Skeleton className="h-6 w-[500px]" />
			<Skeleton className="h-6 w-[400px]" />
			<Skeleton className="h-6 w-[450px]" />
		</div>
	);
}
