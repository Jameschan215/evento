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
