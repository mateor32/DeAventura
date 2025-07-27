import React from "react";

const Index = () => {
  return (
    <div>
      <br />
      <h1 className="text-2xl font-bold text-center">Rio Melcocho</h1>
      <br />
      <br />
      <div className="flex justify-center">
        <img
          src="/images/RioMelcocho.jpg"
          alt="Rio Melcocho"
          className="w-120 max-w-md h-80 object-cover rounded-lg shadow"
        />
      </div>
      <br />
      <div className="flex justify-center">
        <p className="text-center text-lg max-w-xl">
          El río Melcocho es un hermoso río ubicado en la República Dominicana,
          conocido por su belleza natural y sus aguas cristalinas. Es un destino
          popular para los amantes de la naturaleza y los aventureros.
        </p>
      </div>
    </div>
  );
};

export default Index;
