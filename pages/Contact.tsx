
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-[#003366] py-16 text-white text-center">
        <h1 className="text-4xl font-black mb-4">Contact Us</h1>
        <p className="text-xl text-slate-300">We're here to help move your business forward.</p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info & Map */}
          <div>
            <h2 className="text-3xl font-black text-[#003366] mb-8">Get In Touch</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-100 text-[#f37021] rounded-full flex items-center justify-center text-xl shrink-0 mr-4">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] text-lg">Facility Location</h4>
                  <p className="text-slate-600">1200 McCabe Rd, La Porte, Texas 77571</p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=1200+McCabe+Rd,+La+Porte,+TX+77571" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#f37021] font-bold text-sm hover:underline mt-2 inline-block"
                  >
                    Get Directions <i className="fa-solid fa-diamond-turn-right ml-1"></i>
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-100 text-[#f37021] rounded-full flex items-center justify-center text-xl shrink-0 mr-4">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] text-lg">Call Us</h4>
                  <p className="text-slate-600">Main Office: 1-281-470-7575</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-100 text-[#f37021] rounded-full flex items-center justify-center text-xl shrink-0 mr-4">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#003366] text-lg">Email Us</h4>
                  <p className="text-slate-600">Rate Requests: <span className="text-[#f37021] font-bold">rates@coreoftx.com</span></p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
              <p className="text-red-700 text-sm italic">
                <strong>Attention:</strong> Core Trucking will not communicate via public domain emails (Gmail, etc.). Please verify all requests through our official channels.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-inner border border-slate-100">
            <h3 className="text-2xl font-bold text-[#003366] mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Company</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                <textarea rows={6} className="w-full px-4 py-3 border border-slate-200 rounded focus:ring-2 focus:ring-[#f37021] outline-none"></textarea>
              </div>
              <button className="bg-[#003366] text-white px-8 py-3 rounded-md font-bold hover:bg-slate-800 transition-all shadow-md w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 w-full bg-slate-200 grayscale relative">
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="text-slate-400 font-bold uppercase tracking-widest text-center">
             <i className="fa-solid fa-map-location-dot text-4xl mb-4"></i>
             <p>Interactive Map Placeholder</p>
             <p className="text-xs mt-2">1200 McCabe Rd, La Porte, TX 77571</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
