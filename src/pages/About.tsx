import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Users, CheckCircle2, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Our Practice
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn about the philosophy and commitment to patient care that defines Dr PJ Erasmus Dental Practice.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                At Dr PJ Erasmus Dental Practice, we believe that high-quality dental care should be accessible, professional, and above all, empathetic. Our mission is to provide a dental experience that prioritizes your comfort and long-term oral health.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We understand that many patients feel nervous about dental procedures. That's why we focus on creating a reassuring environment where every step of your treatment is explained clearly, ensuring you feel comfortable and in control.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Patient Comfort', icon: Heart },
                  { title: 'Professional Care', icon: ShieldCheck },
                  { title: 'Step-by-Step Guidance', icon: CheckCircle2 },
                  { title: 'Empathetic Approach', icon: Users }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                    <div className="text-medical-accent">
                      <item.icon size={20} />
                    </div>
                    <span className="font-bold text-medical-dark text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1974&auto=format&fit=crop" 
                  alt="Professional Dental Consultation" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -left-6 glass-card p-6 hidden md:block">
                <div className="flex items-center gap-2 text-yellow-500 mb-2">
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                </div>
                <p className="text-xs font-bold text-medical-dark">"Reassuring & Professional"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-medical-blue/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Commitment to You</h2>
          <div className="space-y-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-medical-dark">Reassuring Procedures</h3>
              <p className="text-slate-600 leading-relaxed">
                Many of our patients describe Dr Erasmus as exceptionally reassuring. Whether it's a routine check-up or a more complex procedure, we take the time to ensure you are relaxed and comfortable throughout the process.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-medical-dark">Supportive Environment</h3>
              <p className="text-slate-600 leading-relaxed">
                From the moment you walk through our doors, our supportive staff is here to help. We pride ourselves on the positive dental experiences our patients report, often leading to significantly improved long-term dental hygiene.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
