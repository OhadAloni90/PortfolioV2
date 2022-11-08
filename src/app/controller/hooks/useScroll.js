import { useEffect, useState } from 'react';

const useScroll = () => {
	const [y, setY] = useState(() => window.scrollY);
	const listener = () => {
		setY(window.scrollY);
	};

	useEffect(() => {
		setTimeout(() => {
			setY(window.scrollY);
		}, 500);
		window.addEventListener('scroll', listener);
		return () => {
			window.removeEventListener('scroll', listener);
		};
	}, []);

	return {
		y,
	};
};

export default useScroll;
