
import React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header section */}
      <section className="bg-slate-900 py-16 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Who We Are</h1>
        <p className="text-xl text-[#f37021] font-bold tracking-widest uppercase">Our Commitment to Excellence</p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-[#003366] mb-6">Built on Integrity</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Core Trucking Co. of Texas, LLC was founded with a singular mission: to provide the highest standard of logistics and drayage services while maintaining unshakeable core values.
              </p>
              <p>
                In an industry where speed and volume often override ethics, we choose a different path. Our operations are governed by <strong>Integrity, Respect, and Ethics</strong>. This means we treat every load as our own and every partner with the professional respect they deserve.
              </p>
              <div className="bg-slate-50 border-l-4 border-[#f37021] p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-[#003366] mb-2 italic">Our Primary Objective</h3>
                <p className="text-sm">
                  To provide reliable, safe, and efficient port trucking services to the Houston area, ensuring that our customers' cargo is moved with precision and care every single time.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/id/12/400/500" className="rounded-xl shadow-lg h-full object-cover" alt="Team" />
            <div className="grid grid-rows-2 gap-4">
              <img src="https://picsum.photos/id/1070/400/250" className="rounded-xl shadow-lg h-full object-cover" alt="Port" />
              <img src="https://picsum.photos/id/122/400/250" className="rounded-xl shadow-lg h-full object-cover" alt="Truck" />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications and Capabilities */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#003366] mb-12">Capabilities & Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl text-[#f37021] mb-4"><i className="fa-solid fa-shield-halved"></i></div>
              <h3 className="font-bold text-[#003366]">Bonded Carrier</h3>
              <p className="text-sm text-slate-500 mt-2">Fully authorized to handle bonded cargo through the US Customs system.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl text-[#f37021] mb-4"><i className="fa-solid fa-flask"></i></div>
              <h3 className="font-bold text-[#003366]">Hazmat Certified</h3>
              <p className="text-sm text-slate-500 mt-2">Specialized training for the safe transport of hazardous materials.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl text-[#f37021] mb-4"><i className="fa-solid fa-weight-hanging"></i></div>
              <h3 className="font-bold text-[#003366]">Overweight Capable</h3>
              <p className="text-sm text-slate-500 mt-2">Equipped to handle heavy-load containers up to 100,000 LBS GVW.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="text-4xl text-[#f37021] mb-4"><i className="fa-solid fa-location-crosshairs"></i></div>
              <h3 className="font-bold text-[#003366]">Port Specialists</h3>
              <p className="text-sm text-slate-500 mt-2">Deep expertise in Barbours Cut and Bayport terminal operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fraud Warning & Location Block */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-red-50 border-2 border-red-200 p-8 rounded-2xl mb-12">
            <h2 className="text-red-600 font-black text-2xl uppercase tracking-tighter mb-4 flex items-center">
              <i className="fa-solid fa-triangle-exclamation mr-3"></i>
              Attention: Fraud Warning
            </h2>
            <p className="text-slate-800 font-medium leading-relaxed">
              Core Trucking will not communicate via public domain emails such as GMAIL, HOTMAIL, YAHOO, Etc. All official business communications will originate from our @coreoftx.com domain. 
              <br /><br />
              <strong>Core Trucking will NOT be responsible for any loads tendered to fraudulent emails.</strong> Please verify all requests and rate quotes through our official phone line: 1-281-470-7575.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-black text-[#003366] mb-4 underline decoration-[#f37021] decoration-4 underline-offset-8">Corporate HQ</h3>
              <address className="not-italic text-lg text-slate-600 leading-relaxed">
                Core Trucking Co. of Texas, LLC<br />
                1200 McCabe Rd,<br />
                La Porte, Texas 77571<br />
                <span className="block mt-4 text-[#003366] font-bold">1-281-470-7575</span>
                <span className="block text-[#f37021] font-bold">rates@coreoftx.com</span>
              </address>
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all">
              <img src="https://picsum.photos/id/1071/600/400" className="w-full h-full object-cover" alt="Our Facility" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
