import clsx, { ClassValue } from 'clsx';
import { resolve } from 'path';
import { twMerge } from 'tailwind-merge';

export function title(word: string): string {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}
