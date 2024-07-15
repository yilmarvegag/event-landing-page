import React from 'react';
import { FaQuestion } from 'react-icons/fa';

const SafetyGuidelines: React.FC = () => {
  return (
    <section id="safety-guidelines" className="p-8 bg-yellow-100">
      <div className="w-full text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 uppercase p-5">Tengo una pregunta amigo..</h2>
      </div>

      <div className="w-full lg:flex gap-8">
        <div className="lg:w-3/5 bg-[#fff0e5] p-10 mt-5 lg:mt-0 rounded-2xl">
          <FaQuestion />
          <h3 className='font-bold text-2xl'>¿Puedo llevar amigos?</h3>
          <p className="text-gray-600">
            Si, se ciñe a los lineamientos del paseo que pueda seguir instrucciones y pagar el seguro necesario, que tiene todo miembro bautizado.
          </p>
        </div>
        <div className="lg:w-2/5 bg-[#feffe5] p-10 mt-5 lg:mt-0 rounded-2xl">
          <FaQuestion />
          <h3 className='font-bold text-2xl'>¿Si no puedo ir? ¿Que pasa con el dinero que he pago?</h3>
          <p className="text-gray-600">
            El dinero por temas de logistica y espacio en el medio de transporte, como se emplea en la compra del viaje y pago por alimentación(almuerzo), no será devuelto.
          </p>
        </div>
      </div>

      <div className="w-full lg:flex gap-8 mt-5">
        <div className="lg:w-2/5 bg-[#f3f2ff] p-10 mt-5 lg:mt-0 rounded-2xl">
          <FaQuestion />
          <h3 className='font-bold text-2xl'>¿Puedo llevar amigos?</h3>
          <p className="text-gray-600">
            Si, se ciñe a los lineamientos del paseo que pueda seguir instrucciones y pagar el seguro necesario, que tiene todo miembro bautizado.
          </p>
        </div>
        <div className="lg:w-3/5 bg-[#ecffe5] p-10 mt-5 lg:mt-0 rounded-2xl">
          <FaQuestion />
          <h3 className='font-bold text-2xl'>¿Puedo llevar amigos?</h3>
          <p className="text-gray-600">
            Si, se ciñe a los lineamientos del paseo que pueda seguir instrucciones y pagar el seguro necesario, que tiene todo miembro bautizado.
          </p>
        </div>
      </div>


    </section>
  );
};

export default SafetyGuidelines;
