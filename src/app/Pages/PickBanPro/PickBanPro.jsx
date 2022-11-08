// import ProjectWrapper from '../../components/ProjectWrapper';
import PickBanProSplashBannerImage from '../../assets/images/pickbanpro.png';
import './PickBanPro.scss';

const PickBanPro = () => {
	return (
		// <ProjectWrapper name='Pick Ban Pro' className='pickbanpro'>
		<>
			<figure className='hero'></figure>

			<h1 className='title'>Pick Ban Pro</h1>

			<div className='description'>
				<span>Pick Ban Pro</span> is a customizable draft tool for{' '}
				<span>League of Legends</span>. Compared to other draft tools
				that exist, Pick Ban Pro offers not only the most functionality,
				but the most impressionable <span>aesthetics</span> as well.
				Built using React, the tool allows users to <span>create</span>{' '}
				their own custom drafts, <span>compete</span> against other
				players in mock drafts, and <span>analyze</span> competitve
				drafts played at the highest levels of competition.
			</div>
			<div className='image-expand--holder'>
				<img
					src={PickBanProSplashBannerImage}
					alt='Pick Ban Pro case study splash'
					className='splash'
				/>
			</div>
		</>
		// </ProjectWrapper>
	);
};

export default PickBanPro;
