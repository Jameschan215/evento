# Learn Next.js notes

## 1. External image source:

Configure it in `next.config.mjs` file:

```javascript
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'bytegrad.com',
			},
		],
	},
};
```

## 2. Accent color

Configure it in `tailwind.config.ts` file:

```javascript
theme: {
		extend: {
			colors: {
				accent: '#a4f839',
			},
		},
	},
```

## 3. Animated active nav link with framer-motion

```javaScript
<li>
	<Link href={route.path}>{route.name}</Link>
	{pathname === route.path && (
		<motion.div
			layoutId="nav-active-link"
			className="bg-accent h-1 w-full absolute bottom-0 "
		/>
	)}
</li>
```

**Note: Set a `layoutId` to make it work, you name it.**

## 4. How to manage form submit?

Use `useRouter` hook to push your path:

```javaScript
const [searchText, setSearchText] = useState('');
const router = useRouter();

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
	e.preventDefault();

	router.push(`/events/${searchText}`);
}
```

## 5. Customize scrollbar

If you want to make all pages the same width, you can add `overflow-y-scroll` to you body element.

```css
/* Chrome, Edge, and Safari */
::-webkit-scrollbar {
	width: 10px;
}

::-webkit-scrollbar-track {
	background: #0f1015;
}

::-webkit-scrollbar-thumb {
	background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb:hover {
	background: rgba(255, 255, 255, 0.1);
}

/* Firefox */
* {
	scrollbar-width: thin;
	scrollbar-color: #0f1015 rgba(255, 255, 255, 0.1);
}
```

## Scroll-based Animation Card

```typeScript
'use client';

import { motion } from 'framer-motion';
import Link from 'next-link';
import { useRef } from 'react';

const MotionLink = motion(Link); 				// step 1

export default function EventCard() {
	const ref = useRef(null);					// step 2
	const { scrollYProgress } = useScroll({		// step 3
		target: ref,
		offset: ['0 1', '1.5 1'],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

	return (
		<MotionLink
			ref={ref}							// step 4
			style={{
				scale: scrollYProgress,			// step 5
				opacity: opacityProgress,			// step 5
			}}
			initial={{
				opacity: 0,
				scale: 0.8
			}}
		>
			<section>...</section>
		</MotionLink>
	);
}
```

## Prisma extension & Prisma formatter

Add these code in to `.vscode/settings.json`:

```json
{
	...,
	"[prisma]": {
		"editor.defaultFormatter": "Prisma.prisma"
	},
	...
}
```

## Prisma init and seed

1. Initialize database:

   `npx prisma init --datasource-provider sqlite`

2. In file `Schema.prisma`, define schema:

   ```javaScript
   	model EventoEvent {
   	id            Int      @id @default(autoincrement())
   	name          String
   	slug          String   @unique
   	city          String
   	location      String
   	date          DateTime
   	organizerName String
   	imageUrl      String
   	description   String
   	createAt      DateTime @default(now())
   	updateAt      DateTime @updatedAt
   }
   ```

   **This will be the type of your data, too.**

3. Execute this line in your terminal to push your schema into your database:

   `npx prisma db push`

It will create a file named `dev.db` in your `prisma` folder and create your PrismaClient. Moreover, you can input `npx prisma studio` to see your database on page, but right now your database is empty.

4. Seeding

   - Create a file named `seed.ts` in your prisma folder.
   - Add these line below into your `package.json` file:

   ```JSON
   {

   	"prisma": {
   		"seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
   	},

   }
   ```

   - Install `ts-node`: `npm i ts-node@latest --save-dev`
   - Run `npx prisma db seed` to push data into your database.

## Pagination loading

In order to use `<Loading>` for every page, you need to add `key` prop for `<Suspense>`:

````TypeScript
<Suspense key={city + page} fallback={<Loading />}>
	<EventsList city={city} page={+page} />
</Suspense>
			```
````

## Use middleware to make redirection

```TypeScript
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	const path = new URL('/events/all', request.url);

	return NextResponse.redirect(path);
}

export const config = {
	matcher: ['/events', '/event'],
};
```

## Manually generate static pages for most popular ones

```TypeScript
// Manually generate static pages for most popular ones
export async function generateStaticParams() {
	// Top 100 most popular events
	return [
		{
			slug: 'comedy-extravaganza',
		},
		{
			slug: 'dj-practice-session',
		},
	];
}
```

## Cache data query

```TypeScript
import { unstable_cache } from 'next/cache';

export const getEvents = unstable_cache(async (city: string) => {
	...
});
```

## Make data-query actions server-only

1. Put them into a separate file.
2. Use the statement `"use server"`.
3. Use `server-only` package:
   - `npm i server-only@latest`
   - `import "server-only"` in your action file.

## Deployment on vercel

1. Replace sqlite with Postgres: delete the file `dev.db`.
2. Create a database on Vercel.

## Things needing to learn

- prisma
- framer motion
- zod
- open graph image
