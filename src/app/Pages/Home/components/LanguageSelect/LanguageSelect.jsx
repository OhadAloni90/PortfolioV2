import clsx from 'clsx';
import { useEffect, useState, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LanguageIcon } from './assets/globe.svg';
import cn from './LanguageSelect.module.scss';

const supportedLanguages = ['en', 'es', 'zh'];

function LanguageSelect({ visible }) {
	const { t, i18n } = useTranslation();
	const [language, setLanguage] = useState(
		supportedLanguages.indexOf(i18n.language) < 0
			? 0
			: supportedLanguages.indexOf(i18n.language)
	);

	useEffect(() => {
		i18n.changeLanguage(supportedLanguages[language]);
	}, [i18n, language]);

	function toggle() {
		setLanguage(prev => ++prev % supportedLanguages.length);
	}

	return (
		<div
			className={clsx(cn.container, visible && cn.visible)}
			onClick={toggle}
			data-mouse-hover='button'
			data-mouse-hover-text='change the language'
		>
			<LanguageIcon
				data-mouse-hover='button'
				data-mouse-hover-text='change the language'
			/>
			{t('en')}
		</div>
	);
}

export default memo(LanguageSelect);
