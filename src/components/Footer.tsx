import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Practice Info */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-medical-dark tracking-tight leading-none">Dr PJ Erasmus</span>
              <span className="text-[10px] uppercase tracking-widest text-medical-accent font-semibold">Dental Practice</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Providing compassionate, high-quality dental care in Vanderbijlpark with a focus on patient comfort and long-term oral health.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-medical-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-medical-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-medical-dark font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-600 hover:text-medical-accent text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-medical-accent text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-medical-accent text-sm transition-colors">Services</Link></li>
              <li><Link to="/reviews" className="text-slate-600 hover:text-medical-accent text-sm transition-colors">Patient Reviews</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-medical-dark font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-medical-accent shrink-0 mt-1" size={18} />
                <span className="text-slate-600 text-sm">
                  57 Livingstone Blvd, Vanderbijlpark C.C., Vanderbijlpark, 1900
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-medical-accent shrink-0" size={18} />
                <a href="tel:0169810967" className="text-slate-600 hover:text-medical-accent text-sm transition-colors">
                  016 981 0967
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-medical-accent shrink-0" size={18} />
                <span className="text-slate-600 text-sm">info@drpjerasmus.co.za</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-medical-dark font-semibold mb-6">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span className="text-slate-500">Mon - Fri</span>
                <span className="text-slate-700 font-medium">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-slate-500">Saturday</span>
                <span className="text-slate-700 font-medium">08:00 - 12:00</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-slate-500">Sunday</span>
                <span className="text-medical-accent font-medium italic">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Dr PJ Erasmus Dental Practice. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-medical-accent text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-medical-accent text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
