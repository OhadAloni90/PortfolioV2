
import { useEffect, useState } from 'react';
import lightTheme from '../../assets/themes/light.json';
import darkTheme from '../../assets/themes/dark.json';

const themes = [lightTheme, darkTheme];

const useTheme = () => {
	const [theme, setTheme] = useState(parseInt(localStorage.getItem('theme') ?? 0));

	useEffect(() => {
		if(isNaN(theme)) return setTheme(1);
		localStorage.setItem('theme', theme);

		let styles = themes[theme].themeStyles;
		for (let style in styles) {
			document.documentElement.style.setProperty(style, styles[style]);
		}
	}, [theme]);

	const toggle = () => setTheme(prev => ++prev % 2);

	return {
		theme,
		toggle,
	};
};

export default useTheme;
