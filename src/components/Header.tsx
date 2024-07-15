import React from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav>
        <ul className="flex justify-around">
          <li><Link to="event-info" smooth={true} className="hover:text-gray-300">Evento</Link></li>
          <li><Link to="safety-guidelines" smooth={true} className="hover:text-gray-300">Seguridad</Link></li>
          <li><Link to="recommendations" smooth={true} className="hover:text-gray-300">Recomendaciones</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
