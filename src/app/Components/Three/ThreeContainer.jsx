import clsx from 'clsx';
import { Suspense, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { CameraControls } from './components';
import cn from './ThreeContainer.module.scss';

const ThreeContainer = ({
	className,
	children,
	theme,
	project,
	y,
	allowRotate = false,
}) => (
	<Suspense fallback={<div></div>}>
		<Canvas className={clsx(className)} id={cn.container} shadowMap>
			<CameraControls project={project} y={y} allowRotate={allowRotate} />
			<Physics gravity={[0, -9.8, 0]}>
				<directionalLight
					castShadow
					intensity={1}
					position={[0, 50, 100]}
					color={theme ? '#6633dd' : '#ffff00'}
				/>
				<directionalLight
					intensity={theme ? 1 : 1}
					position={[0, -100, 50]}
					color={theme ? '#a66B33' : '#ffff00'}
				/>
				<ambientLight
					intensity={theme ? 0.8 : 0.4}
					color={theme ? '#6633dd' : 'white'}
				/>
				{children}
			</Physics>
		</Canvas>
	</Suspense>
);

export default memo(ThreeContainer);
