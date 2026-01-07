
import React from 'react';
import { Link } from 'react-router-dom';

const Transfer: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/id/122/1600/900" className="w-full h-full object-cover opacity-20" alt="Warehouse" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-black mb-4">Transfer & Warehousing</h1>
          <p className="text-xl text-[#f37021] font-bold uppercase tracking-widest">Efficiency through Proximity</p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-black text-[#003366] mb-6">Strategic Transfer Point</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our La Porte facility serves as a vital link between the port and your final destination. We offer specialized transfer services to optimize your cargo movement, reducing demurrage risks and ensuring freight security.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="text-3xl text-[#f37021] mb-4"><i className="fa-solid fa-door-open"></i></div>
                <h3 className="font-bold text-[#003366] mb-2">12 Dock Doors</h3>
                <p className="text-xs text-slate-500">Ample capacity for rapid loading and unloading of multiple trailers simultaneously.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="text-3xl text-[#f37021] mb-4"><i className="fa-solid fa-ramp-loading"></i></div>
                <h3 className="font-bold text-[#003366] mb-2">Ramp Access</h3>
                <p className="text-xs text-slate-500">Dedicated ramp for drive-in accessibility and heavy equipment handling.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="text-3xl text-[#f37021] mb-4"><i className="fa-solid fa-box-archive"></i></div>
                <h3 className="font-bold text-[#003366] mb-2">Palletize & Wrap</h3>
                <p className="text-xs text-slate-500">Full cargo reworking services including sorting, palletizing, and shrink-wrapping.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="text-3xl text-[#f37021] mb-4"><i className="fa-solid fa-clock"></i></div>
                <h3 className="font-bold text-[#003366] mb-2">Prime Location</h3>
                <p className="text-xs text-slate-500">Located just minutes from all Port of Houston container terminals.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-8">
            <img src="https://picsum.photos/id/1071/800/400" className="rounded-2xl shadow-xl w-full h-[300px] object-cover" alt="Warehouse facility" />
            <div className="bg-[#003366] text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
               <h3 className="text-2xl font-bold mb-4">Port Logistics Support</h3>
               <p className="text-slate-300 mb-6 leading-relaxed">
                 Need to store a container for a few days to avoid port storage fees? Or perhaps you need to rework a shifted load before its long-haul journey? Our facility is equipped for exactly these scenarios.
               </p>
               <Link to="/contact" className="text-[#f37021] font-bold hover:underline inline-flex items-center">
                 Check Facility Availability <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#003366] mb-12">Value-Added Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Transloading</h3>
              <p className="text-slate-600 text-sm">Efficiently move goods between different modes of transport without delay.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Cross-Docking</h3>
              <p className="text-slate-600 text-sm">Minimize storage time and handling costs with our streamlined cross-dock operations.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Consolidation</h3>
              <p className="text-slate-600 text-sm">Combine smaller shipments into larger, more cost-effective loads for transport.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transfer;
