import React from "react";

const Index = () => {
  return (
    <div>
      <br />
      <h1 className="text-2xl font-bold text-center">Támesis, Antioquia</h1>
      <br />
      <br />
      <div className="flex justify-center">
        <img
          src="/images/Tamesis.jpg"
          alt="Támesis, Antioquia"
          className="w-120 max-w-md h-80 object-cover rounded-lg shadow"
        />
      </div>
      <br />
      <div className="flex justify-center">
        <p className="text-center text-lg max-w-xl">
          Támesis es un municipio ubicado en el suroeste de Antioquia, Colombia,
          conocido por sus paisajes montañosos, su cultura cafetera y su
          ambiente tranquilo. Es un destino ideal para quienes buscan
          naturaleza, aventura y tradiciones auténticas.
        </p>
      </div>
    </div>
  );
};

export default Index;
