'use client';

import { EventoEvent } from '@prisma/client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const MotionLink = motion(Link);

export default function EventCard({ eventItem }: { eventItem: EventoEvent }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.5 1'],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

	return (
		<MotionLink
			ref={ref}
			style={{
				// @ts-ignore
				scale: scaleProgress,
				// @ts-ignore
				opacity: opacityProgress,
			}}
			initial={{
				opacity: 0,
				scale: 0.8,
			}}
			href={`/event/${eventItem.slug}`}
			className="flex-1 basis-80 h-[380px] max-w-[450px]">
			<section className="w-full h-full relative flex flex-col bg-white/[3%] rounded-xl overflow-hidden state-effect">
				<Image
					src={eventItem.imageUrl}
					width={1035}
					height={690}
					alt={eventItem.name}
					className="w-full h-[60%] object-cover"
				/>

				<div className="flex-1 flex flex-col items-center justify-center">
					<h2 className="text-2xl font-semibold">{eventItem.name}</h2>
					<p className="italic text-white/75">By {eventItem.organizerName}</p>
					<p className="text-sm text-white/50 mt-4">{eventItem.location}</p>
				</div>

				<div className="absolute flex flex-col justify-center items-center left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
					<p className="text-xl font-bold -mb-[5px]">
						{new Date(eventItem.date).toLocaleDateString('en-US', {
							day: '2-digit',
						})}
					</p>
					<p className="text-xs uppercase text-accent">
						{new Date(eventItem.date).toLocaleDateString('en-US', {
							month: 'short',
						})}
					</p>
				</div>
			</section>
		</MotionLink>
	);
}
