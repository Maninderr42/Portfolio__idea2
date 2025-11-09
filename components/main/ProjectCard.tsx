"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import ImageWithFallback from '@/components/sub/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  projectLink: string;
  githubLink?: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  projectLink,
  githubLink,
  index,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position tracking for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth spring animations
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  // Transform mouse position to rotation values
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-7, 7]);
  
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
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
      <motion.a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl opacity-0 blur-xl"
          animate={{
            opacity: isHovered ? 0.6 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
        
        <div className="relative overflow-hidden rounded-xl bg-[#1a1a2e] border border-white/10 backdrop-blur-sm h-full">
          {/* Animated gradient overlay that moves on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(99, 102, 241, 0.4) 50%, rgba(139, 92, 246, 0.4) 100%)',
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
            }}
            animate={{
              x: isHovered ? ['-100%', '100%'] : '-100%',
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: isHovered ? Infinity : 0,
              repeatDelay: 0.5,
            }}
          />

          {/* Image container */}
          <div className="relative h-48 overflow-hidden">
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
            </motion.div>
            
            {/* Gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/50 to-transparent"
              animate={{
                opacity: isHovered ? 0.4 : 0.7,
              }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Corner accent */}
            <motion.div
              className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/60 via-pink-500/40 to-transparent"
              style={{
                borderBottomLeftRadius: '100%',
                transformStyle: 'preserve-3d',
                transform: 'translateZ(20px)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isHovered ? 1 : 0,
                opacity: isHovered ? 1 : 0,
                rotate: isHovered ? 0 : -90,
              }}
              transition={{ 
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            />
          </div>

          {/* Content */}
          <div className="p-6" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}>
            <div className="flex items-start justify-between mb-3">
              <motion.h3 
                className="text-white text-xl pr-2"
                animate={{
                  y: isHovered ? -2 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>
              
              <motion.div
                className="flex gap-2 flex-shrink-0"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  opacity: isHovered ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </motion.div>
                {githubLink && (
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Github className="w-5 h-5 text-purple-400" />
                  </motion.a>
                )}
              </motion.div>
            </div>

            <motion.p 
              className="text-gray-400 text-sm line-clamp-3"
              animate={{
                opacity: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>
          </div>
          
          {/* Animated bottom gradient line */}
          <motion.div
            className="absolute bottom-0 left-0 h-1"
            style={{
              background: 'linear-gradient(90deg, #a855f7, #ec4899, #6366f1, #8b5cf6)',
              backgroundSize: '200% 100%',
            }}
            initial={{ width: '0%' }}
            animate={{
              width: isHovered ? '100%' : '0%',
              backgroundPosition: isHovered ? ['0% 0%', '100% 0%'] : '0% 0%',
            }}
            transition={{
              width: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
              backgroundPosition: { 
                duration: 2, 
                ease: 'linear',
                repeat: isHovered ? Infinity : 0
              },
            }}
          />
          
          {/* Floating particles on hover */}
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    bottom: '10%',
                  }}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{
                    y: [-40, -80],
                    opacity: [0, 1, 0],
                    x: [0, (i % 2 === 0 ? 10 : -10)],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </>
          )}
        </div>
      </motion.a>
    </motion.div>
  );
}
