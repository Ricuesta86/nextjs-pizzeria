import Card from "./card";

export default function Service() {
  return (
    <>
      <div className="py-10 dark:bg-gray-800">
        <div className="container ">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Nuestros Servicios</h1>
            <h2 className="text-4xl font-bold">Servicios</h2>
            <p className="text-xs text-gray-400">Además, contamos con servicio a domicilio para que puedas disfrutar de nuestras exquisitas pizzas en la comodidad de tu hogar. Y si prefieres disfrutar de un ambiente acogedor, también puedes visitarnos en nuestra cafeteria y disfrutar de un excelente servicio.</p>
          </div>
          <Card />
        </div>        
      </div>
    </>
  );
}
