import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border pt-10 py-10 text-m text-gray-200 bg-gray-500 rounded-xl border dark:border-neutral-800">
			&copy; {new Date().getFullYear()} {publication.title}
		</footer>
	);
};
