import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useEffect, useMemo, useState, useCallback, memo } from 'react';
import PROJECTS from '../../../../assets/projects.json';

function CameraControls({ project, allowRotate=false }) {
	const cameraVec = useMemo(() => new Vector3(200, 15, 5), []);
	const [zoom, setZoom] = useState(() => Math.sqrt(0.005 * window.innerWidth));

	const resize = useCallback(() => {
		setZoom(Math.sqrt(0.005 * window.innerWidth));
	}, [setZoom]);

	useEffect(() => {
		let completion = (project / PROJECTS.length) * 200;
		cameraVec.set(200 - completion, 15, completion);
	}, [project, cameraVec]);

	useEffect(() => {
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, [resize]);

	useFrame(state => {
		state.camera.position.lerp(cameraVec, 0.02);
	});

	return (
		<>
			<OrbitControls
				enableZoom={allowRotate}
				enablePan={false}
				enableRotate={allowRotate}
				target={[0, -10, 0]}
			/>
			<OrthographicCamera 
				makeDefault 
				near={-100}
				position={cameraVec} 
				zoom={zoom} 
			/>
		</>
	);
}

export default memo(CameraControls);
