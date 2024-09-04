import React from 'react';
import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Evento';
export const size = {
	width: '1200px',
	height: '630px',
};
export const contentType = 'image/png';

export default function Image({ params }: { params: { slug: string } }) {
	return new ImageResponse(
		(
			<section>
				<h1>{params.slug}</h1>

				<p>Evento - Browse events around you</p>
			</section>
		)
	);
}
