import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  icon: string;
  index: number;
}

export default function SkillCard({ title, icon, index }: SkillCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      className="bg-gradient-to-br from-[#1a1a35] to-[#0f0f20] rounded-3xl p-8 flex flex-col items-center justify-center min-h-[240px] border border-[#1f1f3f] hover:border-[#4f46e5] transition-all duration-300 relative overflow-hidden group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: '100%',
              opacity: 0 
            }}
            animate={{ 
              y: '-10%',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Icon with rotation and scale animation */}
      <motion.div 
        className="text-6xl mb-6 filter drop-shadow-lg relative z-10"
        whileHover={{ 
          rotate: [0, -10, 10, -10, 0],
          scale: 1.2,
        }}
        transition={{ 
          duration: 0.5,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        style={{
          transition: 'none',
        }}
      >
        <motion.span
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.span>
      </motion.div>

      <h3 className="text-white text-center relative z-10" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', fontWeight: '800' }}>
        {title}
      </h3>

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-bl-full"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

