import { StickyScrollRevealDemo } from "./components/About";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import { BackgroundGradientDemo } from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-b  from-neutral-950 to-neutral-800">
      <BackgroundBeamsWithCollisionDemo />
      <StickyScrollRevealDemo />
      <BackgroundGradientDemo />
      <Footer />
    </div>
  );
}
