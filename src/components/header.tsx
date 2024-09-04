'use client';

import Link from 'next/link';
import Logo from '@/components/logo';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const routes = [
	{ name: 'Home', path: '/' },
	{ name: 'All Events', path: '/events/all' },
];

export default function Header() {
	const pathname = usePathname();

	return (
		<header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
			<Logo />
			<nav>
				<ul className="flex gap-x-6 text-sm">
					{routes.map((route) => (
						<li
							key={route.path}
							className={cn(
								'hover:text-white transition relative h-14 flex items-center',
								{
									'text-white/90': route.path === pathname,
									'text-white/50': route.path !== pathname,
								}
							)}>
							<Link href={route.path}>{route.name}</Link>
							{pathname === route.path && (
								<motion.div
									layoutId="nav-active-link"
									className="bg-accent h-1 w-full absolute bottom-0 "
								/>
							)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
