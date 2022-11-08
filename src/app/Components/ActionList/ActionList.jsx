import clsx from 'clsx';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LaunchIcon } from '../../assets/icons/launch.svg';
import cn from './ActionList.module.scss';

function ActionList({ data, selected, className, selectedClassName }) {
	const { t } = useTranslation();

	return (
		<div
			className={clsx(
				cn.container,
				className,
				selected && cn.selected,
				selected && selectedClassName,
			)}
		>
			<div className={cn.content}>
				{data?.image && <img src={data.image.src} alt={data.alt} />}
				{data.links.map(link => (
					<a
						key={link.title}
						target='_blank'
						rel='noopener noreferrer'
						href={link.url}
						className={cn.item}
						data-mouse-hover='link'
						data-mouse-hover-text='open link in new tab'
					>
						{t(link.title)}
						{!link?.internal && <LaunchIcon />}
					</a>
				))}
			</div>
		</div>
	);
}

export default memo(ActionList);
