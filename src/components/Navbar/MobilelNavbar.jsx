import React from "react";
import { useState } from "react";

const MobilelNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const displayNav = () => {
    setNavOpen((prevstate) => !prevstate);
  };

  const navList = [
    {
      name: "Home",
    },
    {
      name: "Category",
    },
    {
      name: "Trending News",
    },
    {
      name: "Recent News",
    },
    {
      name: "Club Ranking",
    },
    {
      name: "Sports Archive",
    },
  ];

  return (
    <nav className="bg-white lg:hidden p-3 flex items-center justify-between">
      <div>
        <h3 className="font-birthstone text-4xl">Sport News</h3>
      </div>
      {navOpen && (
        <div
          className={`absolute ${
            navOpen ? `top-10/12` : `bottom-2.5`
          } right-0 p-4 bg-white w-full -z-10`}
        >
          <ul className="space-y-5 text-center">
            {navList.map((item, index) => {
              return (
                <li key={index} className="mx-4 text-md font-light">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div onClick={displayNav}>
        <img
          src="src\assets\hamburger.svg"
          alt=""
          className="w-10 h-10 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default MobilelNavbar;
