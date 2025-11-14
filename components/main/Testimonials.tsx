"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "Alok built our expiry management system for the medical store with a clean dashboard, accurate expiration tracking, and helpful alerts. The workflow is smooth, reporting is clear, and it’s saved us hours every week.",
      name: "Maininder Deep Singh",
      title: "Client",
      image: "https://placehold.co/48x48/png"
    },
    {
      quote: "We needed a project showcase website where clients could explore our work easily. Alok delivered a polished UI/UX, smooth navigation, and clear CTAs that helped us connect with customers effortlessly.",
      name: "Muninshwer Jain",
      title: "Client",
      image: "https://placehold.co/48x48/png"
    },
    {
      quote: "Alok delivered our e-commerce site with product catalog, cart, secure checkout, and order tracking. Performance scores jumped and the admin panel made inventory updates painless.",
      name: "Dishant Gupta",
      title: "Client",
      image: "https://placehold.co/48x48/png"
    },
    {
      quote: "We also got internal tools (employee portal with role-based access, analytics, and automated reports). It streamlined our workflows and cut manual effort considerably.",
      name: "Alok",
      title: "Client",
      image: "https://placehold.co/48x48/png"
    },
    {
      quote: "He also shipped a portfolio/landing site with a simple CMS for blogs, strong SEO, and fast load times. It helped us present our brand better and convert more leads.",
      name: "Alok",
      title: "Client",
      image: "https://placehold.co/48x48/png"
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-16">
        <p className="text-gray-400 tracking-[0.3em] mb-4 uppercase">What Others Say</p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-white" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: '900' }}>
          Testimonials.
        </h2>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a1a] to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * 3 - 1.5rem * 3));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        @media (max-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-320px * 3 - 1.5rem * 3));
            }
          }
        }
      `}</style>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

function TestimonialCard({ quote, name, title, image }: TestimonialCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(image);

  const handleImageError = () => {
    setImageError(true);
    setImageSrc('/placeholder-avatar.png'); // Fallback to a local placeholder
  };

  return (
    <motion.div
      className="flex-shrink-0 w-[320px] md:w-[400px] bg-gradient-to-br from-[#151530] to-[#0a0a1a] rounded-3xl p-8 border border-[#1f1f3f] relative group"
      whileHover={{ 
        scale: 1.05,
        borderColor: '#4f46e5',
        boxShadow: '0 20px 40px rgba(79, 70, 229, 0.3)'
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      {/* Quote marks with animation */}
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-white text-6xl">&ldquo;</span>
      </motion.div>

      {/* Quote text */}
      <motion.p 
        className="text-white mb-8 leading-relaxed min-h-[120px]"
        whileHover={{ color: '#e5e7eb' }}
      >
        {quote}
      </motion.p>

      {/* Author info */}
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <motion.p 
            className="text-white mb-1"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-indigo-400">@</span> {name}
          </motion.p>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>

        {/* Avatar with glow effect on hover */}
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300" />
          {imageError ? (
            <div className="w-12 h-12 rounded-full bg-indigo-500 border-2 border-indigo-400 relative z-10 flex items-center justify-center">
              <span className="text-white text-lg font-bold">
                {name.charAt(0).toUpperCase()}
              </span>
            </div>
          ) : (
            <Image
              src={imageSrc}
              alt={name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover border-2 border-indigo-400 relative z-10"
              onError={handleImageError}
              unoptimized={true}
            />
          )}
        </motion.div>
      </div>

      {/* Animated corner accent */}
      <motion.div 
        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
      />
    </motion.div>
  );
}
