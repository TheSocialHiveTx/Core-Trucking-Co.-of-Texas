
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-black text-white leading-none uppercase tracking-tighter">CORE</span>
              <p className="text-xs font-bold text-slate-500 tracking-widest uppercase mt-1">Trucking Co. of Texas</p>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              A leader in Houston Port trucking and logistics, serving Barbours Cut and Bayport with integrity and respect.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><i className="fa-brands fa-linkedin text-xl"></i></a>
              <a href="#" className="hover:text-white"><i className="fa-brands fa-facebook text-xl"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/who-we-are" className="hover:text-white transition-colors">Who We Are</Link></li>
              <li><Link to="/trucking-services" className="hover:text-white transition-colors">Trucking Services</Link></li>
              <li><Link to="/transfer" className="hover:text-white transition-colors">Transfer Services</Link></li>
              <li><a href="https://coreadvantagellc.com" target="_blank" className="hover:text-white transition-colors">Logistics</a></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-3 text-[#f37021]"></i>
                <span>1200 McCabe Rd,<br />La Porte, Texas 77571</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone mr-3 text-[#f37021]"></i>
                <span>1-281-470-7575</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope mr-3 text-[#f37021]"></i>
                <span>rates@coreoftx.com</span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Get Started</h3>
            <p className="text-sm mb-4">Ready to move your cargo with the best in Texas?</p>
            <Link
              to="/request-a-quote"
              className="inline-block bg-[#f37021] text-white px-6 py-3 rounded font-bold hover:bg-[#e2621a] transition-all w-full text-center"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Core Trucking Co. of Texas, LLC. All Rights Reserved.</p>
          <p className="mt-2 text-slate-500 font-medium">MC# 379435 | DOT# 864551</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
