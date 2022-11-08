import { useEffect } from 'react';

const Redirect = ({ to }) => {
	useEffect(() => {
		window.location.replace(to);
	});
	return null;
};

export default Redirect;
