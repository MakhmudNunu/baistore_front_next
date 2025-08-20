import Hero from "@/app/(home)/sections/Hero/Hero";
import Advantages from "./sections/advantages/Advantages";
import AboutSection from "./sections/about/About";
import Populars from "./sections/Populars/Populars";
import NewArrivals from "./sections/NewArrivals/NewArrivals";
import Promotions from "./sections/Promotions/Promotions";
import Brands from "./sections/brands/Brands";
import CategoriesPage from "./sections/categories/Categories";


export default function Home() {
  return (
    <>
      <Hero/>
      <Populars />
      {/* <CategoriesPage /> */}
      <NewArrivals />
      <Promotions />
      {/* <Brands /> */}
      <Advantages />
      <AboutSection />
    </>
  );
}
