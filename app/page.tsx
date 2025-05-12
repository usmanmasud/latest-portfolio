import { StickyScrollRevealDemo } from "./components/About";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import { BackgroundGradientDemo } from "./components/Card";
import Footer from "./components/Footer";
import { NavbarDemo } from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-b  text-white from-neutral-950 to-neutral-800">
      <NavbarDemo />
      <BackgroundBeamsWithCollisionDemo />
      <StickyScrollRevealDemo />
      <BackgroundGradientDemo />
      <Footer />
    </div>
  );
}
