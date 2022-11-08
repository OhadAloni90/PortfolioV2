import clsx from 'clsx';
import { memo } from 'react';
import cn from './BackgroundText.module.scss';

function BackgroundText({ visible }) {
	return (
		<div className={clsx(cn.container, visible && cn.visible)}>
			Welcome
			<br />
			People!
		</div>
	);
}

export default memo(BackgroundText);
