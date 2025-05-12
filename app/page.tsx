import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import { BackgroundGradientDemo } from "./components/Card";

export default function Home() {
  return (
    <div className="bg-gradient-to-b  from-neutral-950 to-neutral-800">
      <BackgroundBeamsWithCollisionDemo />
      <BackgroundGradientDemo />
    </div>
  );
}
