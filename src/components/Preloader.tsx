import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import logo from '../trading_logoproject.png';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-bg-main flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Content cleared as requested */}
          </div>

          {/* Glitch Overlay Effect */}
          <motion.div 
            className="absolute inset-0 bg-primary/5 pointer-events-none"
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
