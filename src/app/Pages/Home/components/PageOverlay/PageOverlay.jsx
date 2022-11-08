import clsx from 'clsx';
import { memo } from 'react';
import cn from './PageOverlay.module.scss';

function PageOverlay({ visible, className, pages, project, setProject }) {
	return (
		<div className={clsx(cn.container, className, visible && cn.visible)}>
			{pages.map((page, index) => (
				<div
					className={clsx(project === index && cn.selected, cn.item)}
					onClick={() => setProject(index)}
					key={index}
				>
					<span
						data-mouse-hover='button'
						data-mouse-hover-text='scroll to project'
					>
						{project === index ? '0' + (index + 1) : page.name}
					</span>
					<svg className={cn.icon} viewBox='0 0 14 100' fill='none'>
						<rect width='14' height='100' rx='7' />
					</svg>
				</div>
			))}
		</div>
	);
}

export default memo(PageOverlay);
