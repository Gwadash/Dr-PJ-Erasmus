import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Star, Heart, CheckCircle2, Users, Search, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Dental Check-ups & Examinations',
      icon: Search,
      description: 'Comprehensive regular examinations to monitor your oral health, detect potential issues early, and maintain a healthy smile.',
      details: 'Our check-ups include a thorough inspection of your teeth, gums, and mouth, ensuring any concerns are addressed before they become major problems.'
    },
    {
      title: 'Teeth Cleaning & Oral Hygiene',
      icon: Sparkles,
      description: 'Professional cleaning services to remove plaque and tartar, preventing gum disease and keeping your breath fresh.',
      details: 'We provide expert scaling and polishing, along with personalized advice on how to maintain the best possible dental hygiene at home.'
    },
    {
      title: 'Tooth Extractions',
      icon: Heart,
      description: 'Gentle and professional removal of teeth when they are damaged beyond repair or to prevent further complications.',
      details: 'Dr Erasmus is known for a reassuring approach during extractions, providing step-by-step explanations to keep you comfortable.'
    },
    {
      title: 'Dental Restorations & Fillings',
      icon: ShieldCheck,
      description: 'High-quality fillings and restorations to repair decayed or damaged teeth, restoring their function and appearance.',
      details: 'We use modern materials that are both durable and aesthetically pleasing, ensuring your smile looks natural and stays strong.'
    },
    {
      title: 'Preventative Dental Care',
      icon: CheckCircle2,
      description: 'Proactive treatments and education designed to prevent dental issues before they start.',
      details: 'Our focus is on long-term oral health, helping you avoid painful and expensive procedures through regular maintenance and care.'
    },
    {
      title: 'Family Dentistry',
      icon: Users,
      description: 'Compassionate dental care for the whole family, from children’s first visits to specialized care for seniors.',
      details: 'We create a welcoming environment for all ages, ensuring that every family member receives the appropriate care for their stage of life.'
    },
    {
      title: 'Oral Health Consultations',
      icon: Star,
      description: 'Professional advice and treatment planning for any specific dental concerns or cosmetic goals you may have.',
      details: 'We take the time to listen to your needs and provide expert guidance on the best path forward for your unique dental situation.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Dental Services
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional, compassionate dental care tailored to your individual needs in Vanderbijlpark.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-medical-blue flex items-center justify-center text-medical-dark">
                  <service.icon size={32} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-medical-dark">{service.title}</h2>
                  <p className="text-slate-700 font-medium mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.details}
                  </p>
                </div>
                <div className="shrink-0 pt-4">
                  <button onClick={() => window.location.href = 'tel:0169810967'} className="btn-secondary text-sm py-2 px-4">
                    Inquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-medical-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Dental Health Education</h2>
              <p className="text-sky-100 mb-8 leading-relaxed">
                We believe that an informed patient is a healthy patient. Understanding your oral health is the first step toward a lifelong healthy smile.
              </p>
              <div className="space-y-4">
                {[
                  'The importance of twice-daily brushing and flossing',
                  'How diet impacts your tooth enamel and gum health',
                  'Early warning signs of gum disease to watch for',
                  'The link between oral health and overall physical well-being'
                ].map((tip, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-medical-accent flex items-center justify-center">
                      <CheckCircle2 size={12} />
                    </div>
                    <span className="text-sky-50">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-white">Ask Dr Erasmus</h3>
              <p className="text-sky-100 text-sm mb-6">
                Have a specific question about your dental health? We provide personalized consultations to address your concerns.
              </p>
              <a href="tel:0169810967" className="btn-accent inline-flex">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
