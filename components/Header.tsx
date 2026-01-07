
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Who We Are', path: '/who-we-are' },
    { name: 'Trucking Services', path: '/trucking-services' },
    { name: 'Transfer', path: '/transfer' },
    { name: 'Logistics', path: 'https://coreadvantagellc.com', external: true },
    { name: 'Careers', path: '/careers' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            {/* Note: Replace with actual Core Trucking logo */}
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#003366] leading-none uppercase tracking-tighter">CORE</span>
              <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Trucking Co. of Texas</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-[#003366] font-medium transition-colors"
                >
                  {item.name} <i className="fa-solid fa-arrow-up-right-from-square text-[10px] ml-1"></i>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    isActive(item.path)
                      ? 'text-[#003366] border-b-2 border-[#003366]'
                      : 'text-slate-600 hover:text-[#003366]'
                  } font-medium transition-colors py-1`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link
              to="/request-a-quote"
              className="bg-[#f37021] text-white px-5 py-2 rounded-md font-bold hover:bg-[#e2621a] transition-all shadow-sm"
            >
              Request a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[#003366] focus:outline-none p-2"
              aria-label="Toggle Navigation"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-2 shadow-lg">
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-600 hover:text-[#003366] font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 ${
                  isActive(item.path) ? 'text-[#003366] font-bold' : 'text-slate-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
          <Link
            to="/request-a-quote"
            className="block bg-[#f37021] text-white px-5 py-3 rounded-md font-bold text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
