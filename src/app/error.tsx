'use client';

import { useEffect } from 'react';
import FirstLevelHeader from '@/components/first-level-header';
import React from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<main className="text-center py-24">
			<FirstLevelHeader className="mb-10">
				Something went wrong!
			</FirstLevelHeader>
			<p className="mb-10 text-xl lg:text-4xl">{error.message}</p>

			<button onClick={reset}>Reset</button>
		</main>
	);
}
