export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className="max-w-7xl mx-auto bg-white/[2%] flex flex-col min-h-screen">
			{children}
		</div>
	);
}
