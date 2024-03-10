import CardOrden from "../components/card-orden/card-orden";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

export default function Oferta() {
  return (
    <>
      <Navbar />
      <div className="container m-auto">
        <h1 className="m-6 pb-3 text-center text-3xl font-bold">Solicite su Orden</h1>
        <CardOrden />
      </div>
      <Footer />
    </>
  );
}
