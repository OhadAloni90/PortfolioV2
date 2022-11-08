import { memo } from 'react';
import './ScrollableNotice.scss';

/**
 * Animated scroll suggestion set to bottom of screen. If additional customizing is needed,
 * split top level div styles and export separately
 *
 * @param {boolean} flipped - if set to true, will invert the dark/light theme
 */
const ScrollableNotice = ({ flipped = false }) => {
	return (
		<div
			className={`scrollable-notice--wrapper ${flipped ? 'flipped' : ''}`}
		>
			<div className='mouse'>
				<div className='wheel'></div>
			</div>
		</div>
	);
};

export default memo(ScrollableNotice);
