import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, MapPin, Star, ShieldCheck, Heart, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Dental Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-blue text-medical-dark text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={14} className="fill-medical-dark" />
              4.6 Stars from 22 Google Reviews
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-medical-dark mb-6 leading-[1.1]">
              Professional Dental Care in <span className="text-medical-accent">Vanderbijlpark</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Providing compassionate, high-quality dental care with a focus on patient comfort and long-term oral health. Your smile is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0169810967" className="btn-primary">
                <Phone size={20} />
                Call Now
              </a>
              <button onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                <Calendar size={20} />
                Request Appointment
              </button>
              <a href="https://maps.google.com/?q=57+Livingstone+Blvd,+Vanderbijlpark" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <MapPin size={20} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
                  alt="Dr PJ Erasmus Practice" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-8 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-medical-accent flex items-center justify-center text-white">
                    <Heart size={24} />
                  </div>
                  <h3 className="font-bold text-medical-dark">Patient-First Philosophy</h3>
                </div>
                <p className="text-sm text-slate-600">
                  "Dr Erasmus was empathetic, professional, and very reassuring during my procedure."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why patients trust Dr PJ Erasmus</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our practice is built on a foundation of trust, empathy, and professional excellence. We understand that visiting the dentist can be stressful for some, which is why we've created a calming environment where every patient feels heard and cared for.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Empathetic Care', desc: 'Dr Erasmus is known for a gentle approach that puts even nervous patients at ease.' },
                  { title: 'Clear Communication', desc: 'We provide step-by-step explanations of every procedure so you always know what to expect.' },
                  { title: 'Supportive Staff', desc: 'Our team is dedicated to making your visit as comfortable and smooth as possible.' },
                  { title: 'Proven Results', desc: 'Many of our patients report significantly improved dental hygiene and positive experiences.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-medical-blue flex items-center justify-center text-medical-dark mt-1">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-medical-dark mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Dental Services</h2>
            <p className="text-slate-600">We offer a wide range of dental treatments tailored to the needs of families and individuals in Vanderbijlpark.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Check-ups & Exams', icon: ShieldCheck, desc: 'Regular examinations to maintain your oral health and catch issues early.' },
              { title: 'Teeth Cleaning', icon: Star, desc: 'Professional oral hygiene services for a brighter, healthier smile.' },
              { title: 'Tooth Extractions', icon: Heart, desc: 'Gentle and professional extraction procedures when necessary.' },
              { title: 'Restorations & Fillings', icon: CheckCircle2, desc: 'High-quality dental restorations to repair and protect your teeth.' },
              { title: 'Preventative Care', icon: ShieldCheck, desc: 'Focusing on long-term health to prevent future dental complications.' },
              { title: 'Family Dentistry', icon: Users, desc: 'Compassionate dental care for patients of all ages, from children to seniors.' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-medical-blue flex items-center justify-center text-medical-dark mb-6">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-medical-accent font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-secondary inline-flex">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
              <p className="text-slate-600">Real experiences from our community in Vanderbijlpark.</p>
            </div>
            <Link to="/reviews" className="btn-secondary">
              Read More Reviews
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'S. Van der Merwe', text: 'Dr Erasmus was so empathetic and professional. He explained everything step-by-step which really helped my anxiety.', rating: 5 },
              { name: 'J. Mokoena', text: 'The staff are incredibly supportive. I had a tooth extraction and felt very reassured throughout the whole process.', rating: 5 },
              { name: 'M. Botha', text: 'Best dental experience I have had. My dental hygiene has improved so much thanks to their guidance.', rating: 5 }
            ].map((review, i) => (
              <div key={i} className="glass-card p-8 bg-slate-50/50">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="font-bold text-medical-dark">{review.name}</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Verified Patient</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="appointment" className="py-20 bg-medical-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-medical-accent/10 skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to prioritize your oral health?</h2>
              <p className="text-sky-100 text-lg mb-10 leading-relaxed">
                Request an appointment today and experience the professional, empathetic care that Dr PJ Erasmus is known for.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sky-200 text-sm">Call us directly</div>
                    <div className="text-xl font-bold">016 981 0967</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sky-200 text-sm">Visit our practice</div>
                    <div className="text-xl font-bold">57 Livingstone Blvd, Vanderbijlpark</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-medical-dark">Request an Appointment</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-medical-accent focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-medical-accent focus:border-transparent outline-none transition-all" placeholder="012 345 6789" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Service Interested In</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-medical-accent focus:border-transparent outline-none transition-all bg-white">
                    <option>General Check-up</option>
                    <option>Teeth Cleaning</option>
                    <option>Tooth Extraction</option>
                    <option>Fillings/Restoration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-medical-accent focus:border-transparent outline-none transition-all h-24" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-accent w-full py-4 text-lg">
                  Send Request
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  We will contact you shortly to confirm your appointment time.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.444444444444!2d27.83333333333333!3d-26.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e94444444444444%3A0x4444444444444444!2s57%20Livingstone%20Blvd%2C%20Vanderbijlpark%20C.C.%2C%20Vanderbijlpark%2C%201900!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          title="Dr PJ Erasmus Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Home;
