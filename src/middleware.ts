import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	const path = new URL('/events/all', request.url);

	return NextResponse.redirect(path);
}

export const config = {
	matcher: ['/events', '/event'],
};
