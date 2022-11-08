import React, { memo } from 'react';
import { ProjectBall, ThreeContainer, UCI } from '../../../../Components';
import PROJECTS from '../../../../assets/projects.json';
import cn from './Timeline.module.scss';

const Timeline = ({
	theme,
	project,
	y,
	children,
	viewModelState = true,
	...props
}) => (
	<div className={cn.container} {...props}>
		<ThreeContainer
			className={cn.container}
			theme={theme}
			project={project}
			allowRotate={viewModelState}
			y={y}
		>
			{!viewModelState &&
				PROJECTS.map((data, index) => (
					<ProjectBall
						key={data.name}
						data={data}
						selected={project === index}
					/>
				))}
			<UCI />
		</ThreeContainer>
		{children}
	</div>
);

export default memo(Timeline);
