import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Service from "./components/service/service";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
    </>
  );
}
