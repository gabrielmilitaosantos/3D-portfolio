import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Room } from './Room.tsx';
import HeroLights from './HeroLights.tsx';

const FRAMING_Y = -1.2;
const ORBIT_TARGET: [number, number, number] = [0, FRAMING_Y, 0];

const HeroExperience = () => {
  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [0, FRAMING_Y, 15], fov: 45 }}
    >
      <OrbitControls
        target={ORBIT_TARGET}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />
      <group position={[0, -3.5, 0]} rotation={[0, -Math.PI / 4, 0]}>
        <Room />
      </group>
    </Canvas>
  );
};
export default HeroExperience;
