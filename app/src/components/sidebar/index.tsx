import { useState } from "react";
import { Logo } from "../logo";
import {
  FaBook,
  FaCreditCard,
  FaHome,
  FaSignOutAlt,
  FaUserGraduate,
} from "react-icons/fa";
export const Sidebar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <nav
      onMouseOver={() => setToogle(true)}
      onMouseLeave={() => setToogle(false)}
      className={`h-full ${
        !toogle ? "lg:w-20" : "lg:w-36"
      }    sm:w-1/4  transition-all duration-500 ease-in-out flex flex-col justify-items-center justify-between `}
    >
      <div className="mt-2">
        <Logo />
      </div>
      <ul className="text-gray-200">
        <li className="flex justify-between p-4 items-center hover:text-green-200 cursor-pointer">
          <FaHome />
          {toogle && <p>Home</p>}
        </li>
        <li className="flex justify-between p-4 items-center hover:text-green-200 cursor-pointer">
          <FaBook />
          {toogle && <p>Videos</p>}
        </li>
        <li className="flex justify-between p-4 items-center hover:text-green-200 cursor-pointer">
          <FaUserGraduate />
          {toogle && <p>Cursos</p>}
        </li>
        <li className="flex justify-between p-4 items-center hover:text-green-200 cursor-pointer">
          <FaCreditCard />
          {toogle && <p>Planes</p>}
        </li>
      </ul>
      <div className="text-gray-200 flex justify-between p-4 items-center hover:text-green-200 cursor-pointer ">
        <FaSignOutAlt /> {toogle && <p>Salir</p>}
      </div>
    </nav>
  );
};
