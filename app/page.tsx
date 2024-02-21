"use client";
import { useEffect } from "react";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Service from "./components/service/service";
import Testimonial from "./components/testimonial/testimonial";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-950 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <Service />
        <Banner />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}
