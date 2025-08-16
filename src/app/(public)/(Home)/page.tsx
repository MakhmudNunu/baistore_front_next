import Advantages from "./sections/advantages/Advantages";
import AboutSection from "./sections/about/About";
import Populars from "./sections/Populars/Populars";
import NewArrivals from "./sections/NewArrivals/NewArrivals";
import Promotions from "./sections/Promotions/Promotions";

export default function Home() {
  return (
    <>
      <Populars />
      <NewArrivals />
      <Promotions />
      <Advantages />
      <AboutSection />
    </>
  );
}
