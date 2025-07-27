import React from "react";

export const CerroTusa = () => {
  return (
    <div>
      <br />
      <h1 className="text-2xl font-bold text-center">Cerro Tusa</h1>
      <br />
      <br />
      <div className="flex justify-center">
        <img
          src="/images/Tusa.jpg"
          alt="Cerro Tusa"
          className="w-120 max-w-md h-80 object-cover rounded-lg shadow"
        />
      </div>
      <br />
      <div className="flex justify-center">
        <p className="text-center text-lg max-w-xl">
          Cerro Tusa es una montaña emblemática ubicada en el suroeste de
          Antioquia, famosa por su forma piramidal y sus rutas de senderismo,
          siendo un destino ideal para los amantes de la naturaleza y la
          aventura.
        </p>
      </div>
    </div>
  );
};

export default CerroTusa;
