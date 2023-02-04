import Head from "next/head";

import styles from "../styles/index.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";
import FoodSelection from "@/components/FoodSelection/FoodSelection";
import FoodPopularity from "@/components/FoodPopularity/FoodPopularity";
import FoodTestimonials from "@/components/FoodTestimonials/FoodTestimonials";
import FoodPopularMeals from "@/components/FoodPopularMeals/FoodPopularMeals";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bowles - Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection isHomePage={true} />
      <FoodSelection />
      <FoodTestimonials />
      <FoodPopularMeals />
      <FoodPopularity />
      <ImageCarousel />
    </div>
  );
}
