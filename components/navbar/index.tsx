import Logo from "./logo";
import Navigation from "./navigation";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 justify-center border-b border-purple-200 bg-white/70 backdrop-blur-lg">
      <div className="container flex h-full justify-between">
        <Logo />

        <Navigation />
      </div>
    </nav>
  );
}
