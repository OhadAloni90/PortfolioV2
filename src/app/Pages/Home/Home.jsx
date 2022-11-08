import clsx from 'clsx';
import { memo, useRef, useState } from 'react';
import { useScroll } from '../../controller';
import { useProject } from './controller';
import { ScrollableNotice, ActionList } from '../../Components';
import {
	BackgroundText,
	Curtain,
	LanguageSelect,
	PageOverlay,
	ProjectName,
	Socials,
	Timeline,
	Timespan,
} from './components';
import PROJECTS from '../../assets/projects.json';
import { ReactComponent as SwipeIcon } from '../../assets/icons/swipe.svg';
import cn from './Home.module.scss';

const Home = ({ theme }) => {
	const projectsRef = useRef(null);
	const [viewModelState, setViewModelState] = useState(false);
	const { y } = useScroll();
	const { project, setProject } = useProject(y, projectsRef);

	return (
		<main className={cn.container}>
			<div className={cn.header}>
				{y < window.innerHeight * 1.8 && <Curtain y={y} />}
			</div>
			<BackgroundText visible={y > window.innerHeight / 2 && y < window.innerHeight * 6} />
			<div
				className={cn.content}
				style={{ height: (PROJECTS.length - 1) * 200 + 'vh' }}
				ref={projectsRef}
			>
				<Timeline
					theme={theme}
					project={project}
					y={y}
					viewModelState={viewModelState}
				>
					<button
						className={clsx(
							cn.view,
							y > window.innerHeight * 1.5 &&
								window.innerWidth > 768 &&
								cn.visible
						)}
						onClick={() => setViewModelState(prev => !prev)}
						data-mouse-hover='button'
						data-mouse-hover-text={
							viewModelState
								? 'stop viewing model'
								: 'inspect island model'
						}
					>
						<SwipeIcon />
					</button>

					<div
						className={clsx(
							cn.controls,
							viewModelState && cn.viewing
						)}
					>
						<PageOverlay
							visible={y > window.innerHeight * 1.5}
							pages={PROJECTS}
							project={project}
							setProject={setProject}
						/>
						<div className={cn.project}>
							{PROJECTS.map((data, index) => (
								<ActionList
									key={data.name}
									data={data}
									selected={project === index}
									className={cn.item}
									selectedClassName={cn.selected}
								/>
							))}
						</div>
						<LanguageSelect visible={y > window.innerHeight * 1.5} />
						{PROJECTS?.[project] && (
							<>
								<Timespan
									{...PROJECTS[project].date}
									visible={y > window.innerHeight}
								/>
								<ProjectName
									name={PROJECTS[project].displayName}
									y={y}
								/>
							</>
						)}
						<Socials />
					</div>
				</Timeline>
			</div>
			{ y < window.innerHeight * 6 && <ScrollableNotice />}
		</main>
	);
};

export default memo(Home);
