import Footer from "@/widget/Footer/Footer";
import styles from "./page.module.css";
import Advantages from "./section/advantages/Advantages";
import AboutSection from "./section/about/About";
import Populars from "./sections/Populars/Populars";

export default function Home() {
  return (
    <>
      <Advantages />
      <AboutSection/>
      <Footer />
      <Populars />
    </>
  );
}
