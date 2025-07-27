import React from "react";

export const CerroTusa1 = () => {
  return (
    <div>
      <br />
      <h1 className="text-2xl font-bold text-center">Cerro Tusa 1</h1>
      <br />
      <br />
      <div className="flex justify-center">
        <img
          src="/images/Tusa1.jpg"
          alt="Cerro Tusa 1"
          className="w-120 max-w-md h-80 object-cover rounded-lg shadow"
        />
      </div>
      <br />
      <div className="flex justify-center">
        <p className="text-center text-lg max-w-xl">
          Cerro Tusa es una emblemática montaña en Antioquia, famosa por su
          forma piramidal y su importancia cultural y natural. Es un destino
          popular para senderismo y actividades de aventura.
        </p>
      </div>
    </div>
  );
};
export default CerroTusa1;
