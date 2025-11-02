"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isFormHovered, setIsFormHovered] = useState(false);

  // Mouse position tracking for 3D tilt effect on form
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring animations
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  // Transform mouse position to rotation values
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);
  
  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    setIsFormHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative py-32 px-8 overflow-hidden">
      {/* Animated gradient background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3e] to-[#0f0f2a]" /> */}
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() > 0.5 ? '2px' : '1px',
              height: Math.random() > 0.5 ? '2px' : '1px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated grid pattern on left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 pointer-events-none opacity-20">
        <div className="grid grid-cols-8 grid-rows-8 gap-4 w-full h-full">
          {[...Array(64)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-purple-400 rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.05,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating rings on right side */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 border border-purple-500/20 rounded-full"
          style={{
            top: `${15 + i * 14}%`,
            right: `${5 + i * 3}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left side - Get in touch */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Main heading */}
            <div className="mb-16">
              <motion.div
                className="text-white mb-3 inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.span 
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </motion.div>
                  Contact us
                </motion.span>
              </motion.div>
              
              <motion.h2
                className="text-white text-6xl mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Get in
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                  touch.
                </span>
              </motion.h2>
              
              <motion.p
                className="text-gray-400 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Start reaching your digital goals
              </motion.p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Address */}
              <motion.div
                className="flex items-start gap-4 group relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 flex items-center justify-center flex-shrink-0 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                >
                  <MapPin className="w-5 h-5 text-purple-400" />
                </motion.div>
                <div className="relative z-10">
                  <h3 className="text-white text-lg mb-1">Address</h3>
                  <p className="text-gray-400">London</p>
                  <p className="text-gray-500 text-sm">25 Wilton Road, Victoria, London, SW1V 1LW</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-start gap-4 group relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 flex items-center justify-center flex-shrink-0 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                >
                  <Phone className="w-5 h-5 text-purple-400" />
                </motion.div>
                <div className="relative z-10">
                  <h3 className="text-white text-lg mb-1">Phone</h3>
                  <p className="text-gray-400">Mon-Fri from 10am to 6pm</p>
                  <a href="tel:+447551450400" className="text-purple-400 hover:text-purple-300 transition-colors">
                    +44 7551 450 400
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="flex items-start gap-4 group relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 flex items-center justify-center flex-shrink-0 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 400 }}
                >
                  <Mail className="w-5 h-5 text-purple-400" />
                </motion.div>
                <div className="relative z-10">
                  <h3 className="text-white text-lg mb-1">Mail</h3>
                  <p className="text-gray-400 mb-1">Our friendly team is here to help</p>
                  <a href="mailto:hello@jabersaid.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                    hello@jabersaid.com
                  </a>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-white text-lg mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { Icon: Linkedin, href: '#', delay: 0 },
                    { Icon: Github, href: '#', delay: 0.1 },
                    { Icon: Twitter, href: '#', delay: 0.2 },
                    { Icon: Instagram, href: '#', delay: 0.3 },
                  ].map(({ Icon, href, delay }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 relative group"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.9 + delay, type: "spring", stiffness: 400 }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Icon glow on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-purple-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <Icon className="w-4 h-4 text-gray-400 group-hover:text-purple-300 transition-colors relative z-10" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Start a conversation */}
              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <h3 className="text-white text-3xl leading-tight">
                  Start a<br />conversation.
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Contact Form with 3D tilt */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsFormHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: 1000,
            }}
          >
            <motion.div
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Form outer glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 rounded-2xl blur-xl"
                animate={{
                  opacity: isFormHovered ? 0.8 : 0.3,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-20 rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                }}
                animate={{
                  x: isFormHovered ? ['-100%', '100%'] : '-100%',
                }}
                transition={{
                  duration: 1.5,
                  ease: 'easeInOut',
                  repeat: isFormHovered ? Infinity : 0,
                  repeatDelay: 0.5,
                }}
              />

              {/* Floating particles around form */}
              {isFormHovered && (
                <>
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: `${10 + (i % 4) * 25}%`,
                        top: `${20 + Math.floor(i / 4) * 30}%`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        y: [-20, -60],
                        x: [0, (i % 2 === 0 ? 15 : -15)],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                    />
                  ))}
                </>
              )}

              {/* Corner accents */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-transparent rounded-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(20px)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isFormHovered ? 1 : 0,
                  opacity: isFormHovered ? 1 : 0,
                  rotate: isFormHovered ? 0 : -90,
                }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              />

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}>
                {/* First Name and Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label className="block text-white text-sm mb-2">
                      Name<span className="text-purple-400">*</span>
                    </label>
                    <motion.input
                      type="text"
                      name="firstName"
                      placeholder=""
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                  >
                    <label className="block text-white text-sm mb-2">
                      Last Name<span className="text-purple-400">*</span>
                    </label>
                    <motion.input
                      type="text"
                      name="lastName"
                      placeholder=""
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                </div>

                {/* Company Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-white text-sm mb-2">
                    Company Name<span className="text-purple-400">*</span>
                  </label>
                  <motion.input
                    type="text"
                    name="company"
                    placeholder=""
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                >
                  <label className="block text-white text-sm mb-2">
                    Email<span className="text-purple-400">*</span>
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    placeholder=""
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Phone Number */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="block text-white text-sm mb-2">
                    Phone Number<span className="text-purple-400">*</span>
                  </label>
                  <motion.input
                    type="tel"
                    name="phone"
                    placeholder=""
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                >
                  <label className="block text-white text-sm mb-2">
                    Message<span className="text-purple-400">*</span>
                  </label>
                  <motion.textarea
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-white text-black rounded-lg relative overflow-hidden group"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Button glow on hover */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"
                    />
                    
                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200/30 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <span className="relative flex items-center justify-center gap-2">
                      Send
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send className="w-4 h-4" />
                      </motion.div>
                    </span>
                  </motion.button>
                </motion.div>
              </form>

              {/* Animated gradient bottom border */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
                style={{
                  background: 'linear-gradient(90deg, #a855f7, #ec4899, #6366f1, #8b5cf6)',
                  backgroundSize: '200% 100%',
                }}
                initial={{ width: '0%' }}
                animate={{
                  width: isFormHovered ? '100%' : '0%',
                  backgroundPosition: isFormHovered ? ['0% 0%', '100% 0%'] : '0% 0%',
                }}
                transition={{
                  width: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                  backgroundPosition: { 
                    duration: 2, 
                    ease: 'linear',
                    repeat: isFormHovered ? Infinity : 0
                  },
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
