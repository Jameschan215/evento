import Link from 'next/link';

const routes = [
	{
		name: 'Privacy Policy',
		path: '/privacy-policy',
	},
	{
		name: 'Terms & Conditions',
		path: '/terms-conditions',
	},
];

export default function Footer() {
	return (
		<footer
			className="mt-auto flex justify-between items-center h-14 px-3 sm:px-9
		border-t border-white/10 text-xs text-white/25">
			<small className="text-xs">
				&copy; 2050 ByteGrad. All rights reserved.
			</small>

			<ul className="flex gap-x-3 sm:gap-x-8">
				{routes.map((route) => (
					<li key={route.path} className="hover:text-white transition">
						<Link href={route.path}>{route.name}</Link>
					</li>
				))}
			</ul>
		</footer>
	);
}
