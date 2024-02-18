import Banner from "./components/banner/banner";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Service from "./components/service/service";
import Testimonial from "./components/testimonial/testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <Testimonial />
    </>
  );
}
