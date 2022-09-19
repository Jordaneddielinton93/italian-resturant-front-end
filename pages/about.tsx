import HeroSection from "@/components/HeroSection/HeroSection";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import OurAim from "@/components/OurAim/OurAim";
import OurBornStory from "@/components/OurBornStory/OurBornStory";
import Head from "next/head";
import React from "react";

type Props = {};

export default function about({}: Props) {
  return (
    <div>
      <Head>
        <title>Bowles - About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection isHomePage={false} />
      <OurAim />
      <OurBornStory
        smText="Why did we start this buisness , who came up with such a good idea ? read below for more !"
        image="/images/About/chefsmile.png"
        dir="row"
        imgW="294px"
        imgH="441px"
        text={
          "we love to embrace the true spirit of Italy and treat every guest as if they were members of our very own famiglia - whether it's a romantic meal for two, a family gathering or great conversation with friends - Bella is the place to be, guaranteed fantastic food, welcoming service and warm Italian hospitality!"
        }
      />
      <OurBornStory
        image="/images/About/our_fruit.png"
        dir="row-reverse"
        imgW="335px"
        imgH="335px"
        smText="we truly believe that the best moments in life are those spent with loved ones, sharing food, friendship, laughter and embracing the joy of the Italian table."
        text={
          " Join us in one of our restaurants for a magical time with your friends and family, forgetting those day to day distractions. It's the perfect time to talk, laugh, eat (and drink!) and be together!"
        }
      />
      <OurBornStory
        image="/images/About/Our_Carrot.png"
        dir="row"
        imgW="335px"
        imgH="335px"
        smText=""
        text={
          "We have been in the restaurant business for over 25 years and with that kind of experience we've learnt a thing or two about how to take care of our staff. Come see where you would fit in our big Bella famiglia..."
        }
      />
      <ImageCarousel />
    </div>
  );
}
