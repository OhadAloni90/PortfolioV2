import { useEffect, useState, useCallback } from 'react';

const useProjects = (y, ref) => {
	const [project, _setProject] = useState(0);

	useEffect(() => {
		_setProject(
			Math.min(
				~~(
					(y -
						ref.current?.getBoundingClientRect().top -
						window.innerHeight * 1.6) /
					window.innerHeight /
					2
				),
				3
			)
		);
	}, [ref, y]);

	const setProject = useCallback(
		projectid => {
			window.scrollTo({
				top:
					(projectid) * (window.innerHeight * 1.5) +
					ref.current.offsetTop,
				behavior: 'smooth',
			});
		},
		[ref]
	);

	return {
		project,
		setProject,
	};
};

export default useProjects;
