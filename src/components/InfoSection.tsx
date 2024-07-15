import React from 'react';
import { FaAddressCard, FaHatCowboy, FaRegCheckCircle, FaSun } from 'react-icons/fa';
import { FaPersonCircleExclamation, FaPersonDress, FaPersonHalfDress } from 'react-icons/fa6';

const InfoSection: React.FC = () => {
  return (
    <section id="event-info" className="p-8 bg-[#fff] text-center w-full">
      <h2 className="text-4xl font-bold mb-4 uppercase ">Información del super evento</h2>

      <div className="flex flex-col items-center justify-center my-10">
        <div className="flex items-center gap-8">
          <img
            src="https://cdn.prod.website-files.com/659508d3072110434c60c1af/663c6d3da4ac523f3f90f2e4_Arrow.svg"
            alt="Arrow Icon"
            className="w-16 lg:w-1/2 h-auto"
          />
          <p className="rotate-12 font-semibold text-4xl">¿Vamos?</p>
        </div>
      </div>

      <div className='w-full lg:px-5 lg:flex lg:gap-5'>
        <div className="w-full lg:w-1/2 bg-[#f3f2ff] p-3 lg:p-5">
          <p className="text-4xl text-[#13182f] font-semibold p-2">
            Recomenaciones
          </p>
          <div className="container mx-auto flex flex-col py-3">
            <div className="flex items-center bg-white p-2 shadow-lg rounded-lg lg:w-1/2">
              <FaAddressCard className="text-green-500 px-1" size={55} />
              <p className="text-lg font-semibold">Docuemnto identificación</p>
            </div>
          </div>

          <div className="container -my-5 flex flex-col py-3 lg:left-2/4 lg:relative left-5">
            <div className="flex items-center bg-white p-2 shadow-lg rounded-lg lg:w-1/2 justify-end">
              <FaSun className="text-yellow-500 px-1" size={55} />
              <p className="text-lg font-semibold">Lleva protector solar</p>

            </div>
          </div>

          <div className="container mx-auto flex flex-col py-3">
            <div className="flex items-center bg-white p-2 shadow-lg rounded-lg lg:w-1/2">
              <FaPersonHalfDress className="text-red-500 px-1" size={55} />
              <p className="text-lg font-semibold">Prendas adecuadas</p>
            </div>
          </div>

          <div className="container -my-5 flex flex-col py-3 lg:left-2/4 lg:relative">
            <div className="flex items-center bg-white p-2 shadow-lg rounded-lg lg:w-1/2 justify-end">
              <FaHatCowboy className="text-amber-950 px-1" size={55} />
              <p className="text-lg font-semibold">Gorra, Sombrero, etc</p>
            </div>
          </div>

          <div className="container mx-auto flex flex-col py-3">
            <div className="flex items-center bg-white p-2 shadow-lg rounded-lg lg:w-1/2">
              <p className="text-lg font-semibold mr-4">LLeva lo necesario</p>
              <FaPersonCircleExclamation className="text-blue-500 px-1" size={55} />
            </div>
          </div>

          <div className="container -my-5 flex flex-col py-3 lg:left-2/4 lg:relative">
            <div className="flex items-center bg-white p-2 shadow-lg rounded-lg lg:w-1/2 justify-end">
              <FaPersonDress className="text-pink-700 px-1" size={55} />
              <p className="text-lg font-semibold">Ropa y calzado de camabio</p>
            </div>
          </div>

        </div>

        <div className="w-full lg:w-1/2 bg-[#ecffe5] p-5 mt-5 lg:mt-0">

          <div className="flex text-center justify-center">
            {/* <FaListCheck className='lg:p-2 text-orange-500 text-6xl' /> */}
            <p className="text-4xl text-[#13182f] font-semibold lg:p-2 uppercase">
              Recuerda que...
            </p>

          </div>

          <div className="flex p-5">
            <FaRegCheckCircle size={30} className='text-green-600 mx-2 bg-slate-50 rounded-3xl' />
            <p className="text-gray-700 text-left font-semibold">La salida se llevará a cabo el <strong>18 de agosto del 2024</strong></p>
          </div>
          <div className="flex p-5">
            <FaRegCheckCircle size={30} className='text-green-600 mx-2 bg-slate-50 rounded-3xl' />
            <p className="text-gray-700 text-left font-semibold">Punto de encuento Iglesia Palestina<span className='text-xs'>(Calle 57D # 29-37)</span></p>
          </div>
          <div className="flex p-5">
            <FaRegCheckCircle size={30} className='text-green-600 mx-2 bg-slate-50 rounded-3xl' />
            <p className="text-gray-700 text-left font-semibold">Costo por persona: $50.000 <span className='text-xs'>(costo inferior por familia superior a 4 miembros)</span></p>
          </div>
          <div className="flex p-5">
            <FaRegCheckCircle size={30} className='text-green-600 mx-2 bg-slate-50 rounded-3xl' />
            <p className="text-gray-700 text-left font-semibold">Si no eres miembro bautizado debes pagar el seguro <span className='text-xs'>(costo aprox. +$8.000)</span></p>
          </div>
          <div className="flex p-5">
            <FaRegCheckCircle size={30} className='text-green-600 mx-2 bg-slate-50 rounded-3xl' />
            <p className="text-gray-700 text-left font-semibold">Todo niño que ocupe asiento, paga.(sujeto a bus)</p>
          </div>
          <div className="flex p-5">
            <FaRegCheckCircle size={30} className='text-green-600 mx-2 bg-slate-50 rounded-3xl' />
            <p className="text-gray-700 text-left font-semibold">LLeve cositas <span className='text-sm text-red-500'>(hay donde comprar, pero es mejor asegurar)</span></p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;
