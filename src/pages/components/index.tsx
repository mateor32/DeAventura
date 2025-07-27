import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  const rutas = [
    {
      titulo: "Rio Melcocho: un paraíso escondido",
      img: "/images/RioMelcocho.jpg",
      href: "/rioMelcocho",
    },
    {
      titulo: "El peñon: un mirador impresionante",
      img: "/images/ElPeñon.jpg",
      href: "/elPenon",
    },

    {
      titulo: "Mutata: un destino lleno de cultura",
      img: "/images/Mutata.jpg",
      href: "/mutata",
    },
    {
      titulo: "Tamesis: un viaje a la naturaleza",
      img: "/images/Tamesis.jpg",
      href: "/tamesis",
    },

    {
      titulo: "Cerro tusa: un recorrido lleno de aventura",
      img: "/images/Tusa.jpg",
      href: "/cerroTusa",
    },
    {
      titulo: "Paraísos para perderse con la MTB",
      img: "/images/Tusa1.jpg",
      href: "/cerroTusa1",
    },
  ];

  return (
    <div className="relative w-full flex-col bg-white">
      {/* Sección 1: Hero principal */}
      <div className="relative w-full h-screen bg-gray-900 text-white overflow-hidden rounded-2xl   m-0 shadow-xl">
        <Image
          src="/images/camp.jpg"
          alt="Mujer en la montaña"
          className="object-cover"
          priority
          height={720}
          width={1780}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute z-20 top-0 left-0 w-full h-full flex-col items-center px-8 md:px-24 py-25">
          <img
            src="/images/logo_aventura.jpg"
            alt="Logo"
            className="mb-4 w-32 mx-35"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tu ruta hacia la <br /> aventura
          </h1>
          <br />
          <div>
            <p className="text-lg md:text-xl mb-8 text-white max-w-xl">
              🥾 ¡Forma parte de DeAventura! Regístrate y accede a un mundo de
              experiencias inolvidables al aire libre. En DeAventura conectamos
              a los amantes de la naturaleza con rutas únicas, caminatas
              nocturnas, fogatas, meditación y mucho más.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-green-600 px-6 py-3 rounded font-bold">
              Regístrate gratis
            </button>
            <button className="bg-white text-black px-6 py-3 rounded font-bold">
              Inicia sesión
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <img
        src="/images/logo_aventura.jpg"
        alt="Logo"
        className="mb-4 w-32 mx-auto"
      />
      <h1 className="text-2xl font-bold text-center">Encuentra tu ruta </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pt-10 h-screen">
        {/* Columna derecha: Formulario */}

        <div className="z-20 flex items-center justify-center bg-white">
          <div className="w-full max-w-md px-8 py-6 bg-gray-300 rounded-md shadow-lg">
            <input
              type="text"
              placeholder="Busca una dirección"
              className="w-full p-2 rounded text-black bg-amber-50 mb-4"
            />

            {/* Deporte */}
            <div className="bg-lime-800 p-3 rounded mb-4">
              <p className="text-sm font-semibold mb-1">Deporte</p>
              <div className="grid grid-cols-6 gap-2 text-center text-xs">
                {["🚲", "🚵", "🚴‍♂️", "🚶‍♀️", "🏃‍♂️", "🏇"].map((icon, index) => (
                  <button key={index} className="bg-lime-600 p-2 rounded">
                    {icon}
                  </button>
                ))}
              </div>
              <div className="mt-2 text-xs">
                <label className="inline-flex items-center gap-1">
                  <input type="checkbox" className="accent-lime-500" />
                  <span>E-bike ⚡</span>
                </label>
              </div>
            </div>

            {/* Forma física */}
            <div className="bg-lime-800 p-3 rounded mb-4">
              <p className="text-sm font-semibold mb-1">Forma física</p>
              <select className="w-full p-1 rounded text-black">
                <option>Buena</option>
                <option>Media</option>
                <option>Baja</option>
              </select>
            </div>

            {/* Tipo */}
            <div className="bg-lime-800 p-3 rounded mb-4">
              <p className="text-sm font-semibold mb-1">Tipo</p>
              <select className="w-full p-1 rounded text-black">
                <option>Ida y vuelta</option>
                <option>Solo ida</option>
              </select>
            </div>

            {/* Puntos */}
            <div className="space-y-2 mb-4">
              <input
                type="text"
                className="w-full p-2 rounded text-black"
                defaultValue="A - Pentre-bach"
              />
              <input
                type="text"
                className="w-full p-2 rounded text-black"
                defaultValue="B - Pentre-bach"
              />
              <p className="text-xs text-gray-500 text-center">
                + 2 puntos de paso más
              </p>
            </div>

            {/* Indicadores */}
            <div className="flex justify-between bg-lime-800 p-2 rounded text-xs text-white mt-2">
              <div className="text-center">
                <p>⏱</p>
                <p>03:47</p>
              </div>
              <div className="text-center">
                <p>↔️</p>
                <p>72,3 km</p>
              </div>
              <div className="text-center">
                <p>⬆️</p>
                <p>830 m</p>
              </div>
              <div className="text-center">
                <p>⬇️</p>
                <p>830 m</p>
              </div>
            </div>
          </div>
        </div>
        {/* Columna izquierda: Mapa */}
        <div className="relative w-full h-full overflow-hidden rounded-xl">
          <Image
            src="/images/map.png"
            alt="Mapa"
            className="object-cover"
            priority
            fill
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
      </div>

      {/* Sección 3: Tarjetas con rutas */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <img
          src="/images/logo_aventura.jpg"
          alt="Logo"
          className="mb-4 w-32 mx-auto"
        />
        <p className="text-lg md:text-xl mb-10 text-black">
          Vayas donde vayas, DeAventura te acompaña. Aquí podrás ver todas las
          experiencias que has reservado y las que están por venir.{" "}
          <strong className="font-bold">Organiza tus próximas salidas, </strong>
          revisa los detalles de cada aventura y prepárate para vivir momentos
          únicos en la naturaleza.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {rutas.map((ruta, idx) => (
            <Link href={ruta.href} key={idx}>
              <div className="relative h-48 md:h-56 rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={ruta.img}
                  alt={ruta.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center">
                  <span className="text-green-400 text-sm font-semibold mb-1">
                    RESERVAR
                  </span>
                  <h3 className="text-lg font-bold leading-tight">
                    {ruta.titulo}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div className="max-w-2xl mx-auto  px-4 ">
        <img
          src="/images/logo_aventura.jpg"
          alt="Logo"
          className="mb-4 w-32 mx-auto"
        />
        <h2 className="text-2xl font-bold mb-4 text-center">
          Explora el video de aventuras
        </h2>

        <video controls className="w-full rounded-lg shadow-lg h-150">
          <source src="/videos/VideoAventura.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
      <br />
      <img
        src="/images/logo_aventura.jpg"
        alt="Logo"
        className="mb-4 w-32 mx-auto"
      />
      <br />
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">
          Nuestra dotacion
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mx-auto">
        <div>
          <img
            src="/images/Dotacion1.jpg"
            alt="Imagen 1"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
        <div>
          <img
            src="/images/Dotacion2.jpg"
            alt="Imagen 2"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
        <div>
          <img
            src="/images/Dotacion3.jpg"
            alt="Imagen 3"
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
