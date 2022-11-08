import { memo } from 'react';
import BobaWatchSplashBannerImage from '../../assets/images/splash-min.png';
import { ScrollableNotice } from '../../Components';
import useScroll from '../../controller/hooks/useScroll';
import './BobaWatch.scss';

const BobaWatch = () => {
	useScroll();

	return (
		// <ProjectWrapper name='boba watch'>
			<article className='boba-watch--wrapper'>
				<div style={{ position: 'relative' }}>
					<ScrollableNotice flipped />
				</div>
				<figure className='hero'>
					<div className='bwatch--layers'>
						<div id='layer-1' className='bwatch-layer'></div>
						<div id='layer-2' className='bwatch-layer'></div>
						<div id='layer-3' className='bwatch-layer'></div>
					</div>
				</figure>

				<h1>boba watch</h1>

				<div className='description'>
					I founded <span>Boba Watch</span> - a Progressive Web App
					that helps users keep track of and analyze their drink
					spending - in April of 2019. Using a{' '}
					<span>React</span> / <span>SASS</span> / <span>Firebase</span>{' '}
					tech stack, I built the app from the ground up and designed 
					the infrastructure currently in place to support high 
					level production features such as <span>i18n</span> for 
					thousands of users.
				</div>
				<div className='image-expand--holder'>
					<img
						src={BobaWatchSplashBannerImage}
						alt='Boba Watch case study splash'
						className='splash'
					/>
				</div>

				<div className='description light'>
					<h3>
						social media. <br /> for <span>boba</span>.
					</h3>
					<span>Boba Watch</span> allows users to <span>publish</span>{' '}
					their recorded drinks - posting them on the public feed as
					well as their personal profile. Users can <span>like</span>{' '}
					and <span>favorite</span> posts from other users, creating
					what is essentially a{' '}
					<span>social media platform based on boba</span>.
				</div>
			</article>
		// </ProjectWrapper>
	);
};

export default memo(BobaWatch);
