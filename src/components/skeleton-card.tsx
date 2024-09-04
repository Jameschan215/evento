import { cn } from '@/lib/utils';
import Skeleton from './skeleton';

export default function SkeletonCard({ className }: { className?: string }) {
	return (
		<div className={cn('flex flex-col justify-between', className)}>
			<Skeleton className="h-16 w-16 rounded-full" />
			<Skeleton className="h-4 w-[250px]" />
			<Skeleton className="h-4 w-[200px]" />
			<Skeleton className="h-4 w-[220px]" />
		</div>
	);
}
