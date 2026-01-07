
import React from 'react';
import { Link } from 'react-router-dom';

const TruckingServices: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#003366] py-16 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Trucking Services</h1>
        <p className="text-xl text-slate-300">Port-to-Door Drayage Experts</p>
      </section>

      {/* Drayage Detail */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <span className="text-[#f37021] font-black uppercase tracking-widest text-sm mb-2 block">Premium Solutions</span>
            <h2 className="text-4xl font-black text-[#003366] mb-6">Container Drayage</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              We provide fast and efficient container drayage services for both local and regional destinations. With our strategic location near the Port of Houston, we minimize turn times and maximize efficiency for your supply chain.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fa-solid fa-circle-check text-[#f37021] mt-1 mr-3"></i>
                <div>
                  <h4 className="font-bold text-[#003366]">Local & Regional</h4>
                  <p className="text-sm text-slate-500">Service covering the immediate Houston metro and surrounding regional states.</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle-check text-[#f37021] mt-1 mr-3"></i>
                <div>
                  <h4 className="font-bold text-[#003366]">Bonded & Hazmat</h4>
                  <p className="text-sm text-slate-500">Secure transport of customs-held and hazardous materials.</p>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-circle-check text-[#f37021] mt-1 mr-3"></i>
                <div>
                  <h4 className="font-bold text-[#003366]">Overweight Capability</h4>
                  <p className="text-sm text-slate-500">Our heavy-duty chassis and trucks handle container drayage up to 100,000 LBS GVW.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img src="https://picsum.photos/id/1070/800/600" className="rounded-2xl shadow-2xl" alt="Trucking" />
          </div>
        </div>

        {/* Port Coverage */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-[#003366] mb-4">Port Coverage</h2>
            <p className="text-slate-600">Core Trucking is a familiar face at all Port of Houston terminals, offering deep operational knowledge of:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#003366] text-white rounded-full flex items-center justify-center text-2xl mb-6">BC</div>
              <h3 className="text-xl font-bold text-[#003366] mb-2">Barbours Cut</h3>
              <p className="text-sm text-slate-500">Fast, consistent service to one of the busiest container terminals in the Gulf of Mexico.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#f37021] text-white rounded-full flex items-center justify-center text-2xl mb-6">BP</div>
              <h3 className="text-xl font-bold text-[#003366] mb-2">Bayport Terminal</h3>
              <p className="text-sm text-slate-500">Modern logistics support for the newest and most advanced terminal in the Port of Houston.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-black text-[#003366] mb-6">Need a reliable drayage partner?</h2>
        <Link to="/request-a-quote" className="inline-block bg-[#f37021] text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-[#e2621a] transition-all shadow-lg">
          Request Rates Now
        </Link>
      </section>
    </div>
  );
};

export default TruckingServices;
