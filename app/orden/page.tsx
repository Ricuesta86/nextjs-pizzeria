import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Card from "../components/service/card";

export default function Oferta() {
  return (
    <>
      <Navbar />
      <div className="container m-auto">
        <h1 className="m-6 pb-3 text-center text-3xl font-bold">Solicite su Orden</h1>
        <Card />
      </div>
      <Footer />
    </>
  );
}
