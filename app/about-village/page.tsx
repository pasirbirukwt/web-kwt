import Hero from "./hero";
import Location from "./location";
import Profile from "./profile";

export default function AboutVillage() {
  return (
    <main>
      <Hero />
      <div className="container">
        <Profile />
        <Location />
      </div>
    </main>
  );
}
