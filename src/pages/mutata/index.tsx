import React from "react";

export const Mutata = () => {
  return (
    <div>
      <br />
      <h1 className="text-2xl font-bold text-center">Mutatá</h1>
      <br />
      <br />
      <div className="flex justify-center">
        <img
          src="/images/Mutata.jpg"
          alt="Mutatá"
          className="w-120 max-w-md h-80 object-cover rounded-lg shadow"
        />
      </div>
      <br />
      <div className="flex justify-center">
        <p className="text-center text-lg max-w-xl">
          Mutatá es un municipio colombiano ubicado en el departamento de
          Antioquia, conocido por su entorno natural, ríos y paisajes ideales
          para el ecoturismo y la aventura.
        </p>
      </div>
    </div>
  );
};

export default Mutata;
