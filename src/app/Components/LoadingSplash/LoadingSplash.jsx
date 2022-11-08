import { memo, useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useProgress } from '@react-three/drei';
import Plausible from 'plausible-tracker'
import clsx from 'clsx';
import cn from './LoadingSplash.module.scss';

const LoadingSplash = ({ className, children }) => {
	const { progress } = useProgress();
	const [close, setClose] = useState(false);
	const location = useLocation();
	const { trackPageview } = Plausible();

	useEffect(() => {
		trackPageview();
	}, [location, trackPageview]);

	useEffect(() => {
		if (progress < 100 && location.pathname === '/') return;
		setTimeout(() => {
			setClose(true);
		}, 1000);
	}, [progress, location, close]);

	return (
		<>
			<div className={clsx(cn.container, close && cn.close)}></div>
			<div className={clsx(cn.container, close && cn.close)}></div>
			<div className={clsx(cn.container, close && cn.close)}></div>
			<div className={clsx(cn.container, close && cn.close)}>
				<div className={cn.content}>
					<p>{progress}%</p>
				</div>
			</div>
			<div className={clsx(className)}>{children}</div>
		</>
	);
};
export default memo(LoadingSplash);
