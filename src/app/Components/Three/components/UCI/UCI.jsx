import { Suspense, memo, useRef } from 'react';
import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

function UCI({ y }) {
	const primitive = useRef();
	const dracoLoader = new DRACOLoader();
	const gltfLoader = new GLTFLoader();
	const { scene, materials  }  = useLoader(
		GLTFLoader,
		"/assets/island/islandHead2.gltf",
		loader => {
			const dracoLoader = new DRACOLoader();
			dracoLoader.setDecoderPath("/draco-gltf/");
			loader.setDRACOLoader(dracoLoader);
		}
		);
		
		console.log(scene)


	usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		position: [0, 13, 0],
	}));

	return (
		<Suspense fallback={null}>
			<primitive
				receiveShadow
				position={[0, 0, 0]}
				ref={primitive}
				object={scene}
				rotation={[0, 0, 0]}
				scale={30}
				materials={materials}
			/>
		</Suspense>
	);
}

export default memo(UCI);
