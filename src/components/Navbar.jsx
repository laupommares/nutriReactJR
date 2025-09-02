import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = window.location.pathname;

  const menuOptions = {
    Home: "/",
    About: "/about",
    Services: "/services",
    Contact: "/contact",
  };

  const isActive = (route) => {
    const path = route.startsWith("/") ? route : "/" + route;
    return currentPath === path || currentPath.startsWith(path + "/");
  };

  return (
    <nav className="w-full h-20 bg-green bg-opacity-80 fixed z-40">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center">
          <a href="/">
            <img src="/logo.png" className="w-20 h-20" alt="Logo" />
          </a>
          <ul className="flex space-x-4 m-6 max-lg:hidden">
            {Object.entries(menuOptions).map(([option, route]) => (
              <li key={option} className="flex text-sm font-raleway items-center font-semibold">
                <a
                  href={route}
                  className={`w-full text-base h-full hover:bg-white rounded-md px-3 py-2 flex items-center text-dark font-serif ${
                    isActive(route) ? "text-dark bg-white" : ""
                  }`}
                >
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu responsive */}
        <div className="max-lg:block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined text-dark" style={{ fontSize: "48px" }}>
              menu
            </span>
          </button>
          {isOpen && (
            <div className="absolute bg-green bg-opacity-80 top-20 right-0 h-auto w-4/5">
              <ul className="flex flex-col">
                {Object.entries(menuOptions).map(([option, route]) => (
                  <li key={option} className="flex text-sm font-raleway items-center font-semibold">
                    <a
                      href={route}
                      className={`w-full text-base h-full hover:bg-white p-4 flex items-center text-dark font-serif ${
                        isActive(route) ? "text-dark bg-white" : ""
                      }`}
                    >
                      {option}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
