 
 



import React, { useState } from 'react';
import logo from '../Asset/sgcarslogo.png';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-70" id="Nav">
      <div className="w-full px-0">
        <div className="relative flex h-16 items-center justify-between bg-black bg-opacity-30">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center ml-5">
              <img className='w-10 h-10 mt-2' src={logo} alt="" />
              <h1 className="text-white text-3xl font-face m-4">
                <a href="/">SG Cars</a>
              </h1>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Normal menu */}
            <div className="hidden mr-24 sm:ml-6 sm:block items-center">
              <div className="flex space-x-4">
                <ul className='list-none flex m-4' id='nav'>
                  <li>
                    <a
                      href="/"
                      className="rounded-md px-5 py-2 text-base font-medium text-white hover:bg-white hover:text-black"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Navcollection"
                      className="rounded-md px-5 py-2 text-base font-medium text-white hover:bg-white hover:text-black"
                    >
                      Collection
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Contact"
                      className="rounded-md px-5 py-2 text-base font-medium text-white hover:bg-white hover:text-black"
                    >
                      Contact US
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 mr-20 bg-black">
          <a
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-center text-white hover:bg-black hover:text-white"
          >
            Home
          </a>
          <a
            href="/NavCollection"
            className="block rounded-md px-3 py-2 text-base font-medium text-center text-white hover:bg-black hover:text-white"
          >
            Collection
          </a>
          <a
            href="/Contact"
            className="block rounded-md px-3 py-2 text-base font-medium text-center text-white hover:bg-black hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
