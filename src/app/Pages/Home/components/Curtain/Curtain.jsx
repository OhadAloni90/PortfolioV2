import { useLayoutEffect, memo } from 'react';
import { ReactComponent as ChineseName } from '../../../../assets/chinese.svg';
import cn from './Curtain.module.scss';

function Curtain({ y }) {
	useLayoutEffect(() => {
		document.getElementById(cn.behind).style.transform = `scale(${
			y / 300 + 1
		})`;
		document.getElementById(cn.border).style.transform = `scale(${
			y / 300 + 1
		})`;
		document.getElementById(cn.front).style.transform = `rotate(${
			y / -20
		}deg)`;
		document.getElementById(cn.front).style.opacity = 1 - y / 300;
	}, [y]);

	return (
		<header
			id={cn.container}
			data-mouse-hover='button'
			data-mouse-hover-text='Scroll down'
		>
			<h1 className={cn.name} id={cn.behind}>
				<ChineseName />
			</h1>
			<div id={cn.border}>
				<div
					id={cn.content}
					data-mouse-hover='button'
					data-mouse-hover-text='Scroll down'
				>
					<h1 className={cn.name} id={cn.front}>
						<ChineseName />
					</h1>
				</div>
			</div>
		</header>
	);
}

export default memo(Curtain);
