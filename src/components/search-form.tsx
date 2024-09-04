'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchForm() {
	const [searchText, setSearchText] = useState('');
	const router = useRouter();

	function handleInputChange(text: string) {
		setSearchText(text);
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!searchText) return;
		router.push(`/events/${searchText}`);
	}

	return (
		<form className="w-full sm:w-[580px]" onSubmit={handleSubmit}>
			<input
				value={searchText}
				onChange={(e) => handleInputChange(e.target.value)}
				type="text"
				placeholder="Search events in any city..."
				spellCheck={false}
				className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 focus:ring-2 focus:bg-white/10 transition"
			/>
		</form>
	);
}
