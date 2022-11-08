import { memo } from 'react';
import cn from './ProjectName.module.scss';

function ProjectName({ name, y }) {
	return (
		<aside className={cn.container}>
			<p>
				• •<span>{name}</span>
			</p>
			<div className={cn.progress}>
				<svg className={cn.bar} fill='none'>
					<rect
						className={cn.empty}
						width='100%'
						height='4'
						rx='2'
						fill='#7D46C2'
					/>
					<rect
						className={cn.filled}
						width={
							(((y + window.innerHeight * 1.45) %
								window.innerHeight) /
								window.innerHeight) *
								100 +
							'%'
						}
						height='4'
						rx='2'
						fill='#64ABFF'

					/>
				</svg>
			</div>
		</aside>
	);
}

export default memo(ProjectName);
