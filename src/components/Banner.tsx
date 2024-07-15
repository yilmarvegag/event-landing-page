import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Banner() {
  const imgBanner = "https://images.unsplash.com/photo-1593132808462-578ca7a387d9";
  const imgCont1 = "https://st2.depositphotos.com/3240685/11387/i/450/depositphotos_113872614-stock-photo-senior-man-swimming-in-the.jpg";
  const imgCont2 = "https://images.unsplash.com/photo-1529156298713-46a81610209d";
  const imgCont3 = "https://images.unsplash.com/photo-1464867037750-e4ebec103b42";
  return (
    <section
      className="relative lg:flex lg:flex-col justify-between lg:h-screen bg-cover bg-center lg:px-32 pt-10"
      style={{ backgroundImage: `url('${imgBanner}')` }}>

      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex flex-col items-center justify-center flex-grow text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">Diviértete en el Río</h1>
        <p className="text-lg md:text-2xl my-12">¡Prepárate para un día lleno de diversión y aventuras con toda la familia del <span className='font-bold'>Distrito Orión!</span> Este paseo especial es una oportunidad perfecta para compartir momentos inolvidables con tus hermanos de iglesia y amigos. <br /> Ven y disfruta de una salida única que promete alegría, compañerismo y muchas sorpresas.</p>
        <div className="flex space-x-10 mb-12">
          <a href="https://www.facebook.com/IASDDistritoOrion" target='_blank' className="text-2xl md:text-3xl flex items-center justify-center p-2 border-2 border-white rounded-full hover:bg-blue-700">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/IASDDistritoOrion" target='_blank' className="text-2xl md:text-3xl flex items-center justify-center p-2 border-2 border-white rounded-full hover:bg-pink-700">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-8 text-white">
        <div className="relative p-4 bg-cover bg-center rounded shadow-md">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70 rounded"
            style={{ backgroundImage: `url('${imgCont1}')` }}>
          </div>
          <div className="relative z-10 bg-black bg-opacity-40 p-4 rounded flex flex-col items-center justify-center h-full">
            <h3 className="text-3xl uppercase font-bold mb-2">Aventura</h3>
            <p className='font-semibold'>Nuevas experiencias con amigos</p>
          </div>
        </div>
        <div className="relative p-4 bg-cover bg-center rounded shadow-md">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70 rounded"
            style={{ backgroundImage: `url('${imgCont3}')` }}
          ></div>
          <div className="relative z-10 bg-black bg-opacity-40 p-4 rounded flex flex-col items-center justify-center h-full">
            <h3 className="text-3xl uppercase font-bold mb-2">Comida</h3>
            <p className='font-semibold'>Tendremos un rico almuerzo(en leña)</p>
          </div>
        </div>
        <div className="relative p-4 bg-cover bg-center rounded shadow-md">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70 rounded"
            style={{ backgroundImage: `url('${imgCont2}')` }}
          ></div>
          <div className="relative z-10 bg-black bg-opacity-40 p-4 rounded flex flex-col items-center justify-center h-full">
            <h3 className="text-3xl uppercase font-bold mb-2">Diversión</h3>
            <p className='font-semibold'>Es un espacio recreativo para todos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
