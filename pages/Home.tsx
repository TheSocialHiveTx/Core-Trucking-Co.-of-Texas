
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard: React.FC<{title: string, desc: string[], icon: string, link: string, external?: boolean}> = ({title, desc, icon, link, external}) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="w-14 h-14 bg-slate-50 text-[#003366] rounded-lg flex items-center justify-center mb-6 text-2xl">
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <h3 className="text-xl font-bold text-[#003366] mb-4">{title}</h3>
    <ul className="space-y-2 mb-6">
      {desc.map((d, i) => (
        <li key={i} className="text-slate-600 text-sm flex items-start">
          <i className="fa-solid fa-check text-[#f37021] mt-1 mr-2 text-xs"></i>
          <span>{d}</span>
        </li>
      ))}
    </ul>
    {external ? (
      <a href={link} target="_blank" className="text-[#003366] font-bold text-sm hover:underline inline-flex items-center">
        Learn More <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
      </a>
    ) : (
      <Link to={link} className="text-[#003366] font-bold text-sm hover:underline inline-flex items-center">
        Learn More <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
      </Link>
    )}
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center text-white overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/id/122/1600/900" 
            alt="Trucking"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
              Welcome to <br />
              <span className="text-[#f37021]">Core Trucking</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 tracking-wide text-slate-300">
              Integrity | Respect | Ethics
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/request-a-quote"
                className="bg-[#f37021] text-white px-8 py-4 rounded-md font-bold text-lg text-center hover:bg-[#e2621a] transition-all shadow-lg"
              >
                Request a Quote
              </Link>
              <Link
                to="/trucking-services"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-md font-bold text-lg text-center hover:bg-white/20 transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Houston Port Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-[#003366] mb-6">
                Houston Port Trucking & Logistics Specialists
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Centrally located to provide unparalleled service to <strong>Barbours Cut</strong> and <strong>Bayport</strong> container terminals. We specialize in time-sensitive, overweight, and complex drayage solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-[#f37021]">
                    <i className="fa-solid fa-certificate"></i>
                  </div>
                  <span className="font-bold text-sm text-[#003366]">Bonded Carrier</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-[#f37021]">
                    <i className="fa-solid fa-biohazard"></i>
                  </div>
                  <span className="font-bold text-sm text-[#003366]">Hazmat Certified</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-slate-100 rounded-2xl p-4 shadow-inner">
                <img src="https://picsum.photos/id/1070/800/600" alt="Houston Port" className="rounded-xl shadow-lg w-full h-[300px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#003366] uppercase tracking-wider mb-4">Core Solutions</h2>
            <div className="w-20 h-1 bg-[#f37021] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Drayage"
              icon="fa-truck-front"
              link="/trucking-services"
              desc={[
                "Local and Regional Coverage",
                "Bonded and Hazmat Certified",
                "Overweight Containers (Up to 100,000 LBS GVW)"
              ]}
            />
            <ServiceCard
              title="Transfer"
              icon="fa-warehouse"
              link="/transfer"
              desc={[
                "12 Dock Doors with Ramp Access",
                "Palletize and Wrap Cargo",
                "Minutes from Port of Houston Container Terminals"
              ]}
            />
            <ServiceCard
              title="Logistics"
              icon="fa-route"
              link="https://coreadvantagellc.com"
              external={true}
              desc={[
                "Subsidiary of Core Trucking",
                "Non-Asset Based Logistics",
                "48 State Final Mile Coverage",
                "Broad Carrier Network Available"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Work With Us / Careers */}
      <section className="bg-[#003366] py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Work With Us!</h2>
          <p className="text-lg text-slate-300 mb-8">
            We are always looking for professional drivers and staff who value integrity and ethics. Join the Core team today.
          </p>
          <Link
            to="/careers"
            className="inline-block border-2 border-[#f37021] text-[#f37021] px-10 py-3 rounded font-bold hover:bg-[#f37021] hover:text-white transition-all"
          >
            Explore Careers
          </Link>
        </div>
      </section>

      {/* News Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black text-[#003366]">Core News</h2>
              <p className="text-slate-600 mt-2">Latest updates from the logistics world.</p>
            </div>
            <Link to="/news" className="text-[#f37021] font-bold flex items-center hover:underline">
              View All <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="group">
                <div className="overflow-hidden rounded-lg mb-4 h-48">
                  <img src={`https://picsum.photos/id/${10 + n}/500/300`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="News" />
                </div>
                <span className="text-xs font-bold text-[#f37021] uppercase tracking-widest">October {n}, 2024</span>
                <h3 className="text-lg font-bold text-[#003366] mt-2 group-hover:text-[#f37021] transition-colors">Port of Houston Logistics Update</h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2">Stay informed about current congestion and operational changes at Barbours Cut and Bayport...</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
