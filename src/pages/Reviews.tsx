import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah V.',
      rating: 5,
      text: 'Dr Erasmus is incredibly empathetic. I was very nervous about my root canal, but he explained every step and made me feel so reassured. I didn’t feel a thing!',
      date: '2 weeks ago'
    },
    {
      name: 'David M.',
      rating: 5,
      text: 'The most professional dental practice in Vanderbijlpark. The staff are supportive and the clinic is spotless. My dental hygiene has never been better.',
      date: '1 month ago'
    },
    {
      name: 'Linda K.',
      rating: 5,
      text: 'I appreciate the step-by-step explanations. It makes such a difference when you know exactly what is happening during a procedure. Highly recommend Dr PJ Erasmus.',
      date: '2 months ago'
    },
    {
      name: 'Pieter B.',
      rating: 5,
      text: 'Great experience with a tooth extraction. I was in and out quickly, and the recovery was exactly as they described. Very professional team.',
      date: '3 months ago'
    },
    {
      name: 'Johan S.',
      rating: 5,
      text: 'Dr Erasmus has a way of making you feel comfortable immediately. His empathetic approach is exactly what I needed for my dental anxiety.',
      date: '4 months ago'
    },
    {
      name: 'Maria R.',
      rating: 5,
      text: 'Excellent service and very supportive staff. They really care about their patients and it shows in every interaction.',
      date: '5 months ago'
    }
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-blue text-medical-dark text-xs font-bold uppercase tracking-wider mb-6">
            <Star size={14} className="fill-medical-dark" />
            4.6 Stars on Google
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Patient Testimonials
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Read about the experiences of our patients and why they trust Dr PJ Erasmus with their dental care.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all relative"
              >
                <div className="absolute top-6 right-8 text-slate-100">
                  <Quote size={48} />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed relative z-10">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-medical-dark">{review.name}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Verified Patient</div>
                  </div>
                  <div className="text-xs text-slate-400">{review.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join our community of happy patients</h2>
          <p className="text-slate-600 mb-10">
            Experience the reassuring, professional care that our patients are talking about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0169810967" className="btn-primary">
              Call Us Today
            </a>
            <button onClick={() => window.location.href = '/#appointment'} className="btn-secondary">
              Request Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
