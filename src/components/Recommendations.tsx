import { FaCross, FaWhatsapp } from 'react-icons/fa';

const organizers = [
  {
    name: 'Pastor John Doe',
    role: 'Pastor de la IASD',
    image: 'https://www.latercera.com/resizer/t5eHoHkQRp5UbANxg4oX7f-7dpY=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/HFRTUR3WGRH2NNILBDULYMI3EY.jpg',
    responsibilities: ['Predicación', 'Consejería', 'Liderazgo espiritual'],
    contact: 'https://wa.me/573207834074?text=Pr. tengo una duda sobre el paseo:',
  },
  {
    name: 'Fill Smith',
    role: 'Líder del paseo',
    image: 'https://www.lavanguardia.com/andro4all/hero/2023/11/john-wick.jpg?width=768&aspect_ratio=16:9&format=nowebp',
    responsibilities: ['Organización del evento', 'Coordinación de actividades', 'Logística'],
    contact: 'https://wa.me/573106294988?text=Hola, tengo una pregunta sobre el evento del paseo: ',
  },
  {
    name: 'Mark Johnson',
    role: 'Iglesia local',
    image: 'https://es.web.img3.acsta.net/pictures/17/06/14/13/48/489688.jpg',
    responsibilities: ['Apoyo logístico', 'Comunicación', 'Asistencia'],
    contact: 'https://chat.whatsapp.com/DlVJ2pzmiEh50KcKpr7d2o',
  },
  {
    name: 'Jane Doe',
    role: 'Lider de cocina',
    image: 'https://files.lafm.com.co/assets/public/styles/twitter/public/2022-09/matilda_que_paso_con_la_senorita_tronchatoro.jpg.webp',
    responsibilities: ['Menu', 'Coordinación', 'Coordinación'],
    contact: 'https://wa.me/573154628117?text=Hola, cual es el menú, para el paseo?',
  },
];

function Organizators() {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-4xl font-bold mb-8 text-center">Organizadores</h2>
      <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 justify-center">
        {organizers.map((organizer, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 m-4 bg-white border border-gray-300 rounded-lg p-4 shadow-lg"
          >
            <div className="flex items-center">
              <img
                src={organizer.image}
                alt={organizer.name}
                className="w-20 h-20 object-cover rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{organizer.name}</h3>
                <p className="text-gray-500">{organizer.role}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {organizer.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex items-center py-2">
                  <FaCross className="text-yellow-950 m-2" size={30}/>
                  <span>{responsibility}</span>
                </li>
              ))}
              <li key={index*999} className="flex items-center py-2">
                  <FaWhatsapp className="text-green-500 m-2" size={30} />
                  <a href={`${organizer.contact}`}>Whatsapp</a>
                </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizators;
