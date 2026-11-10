import { Canvas } from '@react-three/fiber';
import {
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
} from '@react-three/drei';
import { Computer } from './Computer.tsx';

const COLORS = {
  warm: '#ffd9b0',
  violet: '#6d45ce',
  sky: '#9db4ff',
  ground: '#1b1030',
  shadow: '#05030f',
};
const ContactExperience = () => {
  // Orbiting only makes sense with a mouse or trackpad. On touch screens,
  // OrbitControls captures the finger and blocks the page scroll over the canvas.
  const canOrbit = window.matchMedia(
    '(hover:hover) and (pointer: fine)'
  ).matches;

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      frameloop="demand"
      camera={{ position: [0, 3, 7.6], fov: 45 }}
    >
      <hemisphereLight args={[COLORS.sky, COLORS.ground, 0.5]} />

      <directionalLight
        position={[5, 8, 4]}
        intensity={2.2}
        color={COLORS.warm}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0004}
        shadow-normalBias={0.03}
      />

      <directionalLight
        position={[-6, 4, -7]}
        intensity={1.6}
        color={COLORS.violet}
      />

      <Environment frames={1} resolution={256} environmentIntensity={0.5}>
        <Lightformer
          form="rect"
          intensity={2}
          color="#ffffff"
          position={[0, 6, 2]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[8, 4, 1]}
        />
        <Lightformer
          form="rect"
          intensity={1.5}
          color={COLORS.violet}
          position={[6, 2, -2]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[6, 3, 1]}
        />
      </Environment>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[30, 30]} />
        <shadowMaterial transparent opacity={0.45} color={COLORS.shadow} />
      </mesh>

      <ContactShadows
        position={[0, -1.49, -2]}
        opacity={0.5}
        scale={14}
        blur={2.5}
        far={5}
        color={COLORS.shadow}
      />

      <OrbitControls
        enabled={canOrbit}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={0.03} position={[0, -1.5, -2]}>
        <Computer />
      </group>
    </Canvas>
  );
};
export default ContactExperience;
