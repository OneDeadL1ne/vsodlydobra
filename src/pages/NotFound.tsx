export default function NotFoundPage() {
	document.title = 'Ошибка 404';
	return (
		<div className="flex flex-col h-screen">
			<header className="flex justify-center items-center mt-5"></header>
			<main className="min-w-full flex-grow flex items-center justify-center"></main>
			<footer className="w-full row-auto flex justify-center items-center mb-4"></footer>
		</div>
	);
}
