import { cn } from '@/lib/utils';

export default function Skeleton({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				'animate-pulse h-4 w-[550px] bg-white/5 rounded-md',
				className
			)}
		/>
	);
}
