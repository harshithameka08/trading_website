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
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center mb-8"
            >
              <img src={logo} alt="TEAMUS 369 Logo" className="w-48 h-auto object-contain mb-4 shadow-[0_0_50px_rgba(0,229,255,0.2)]" />
              <motion.span 
                className="text-[10px] text-gray-500 font-mono tracking-[0.3em] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Neural_Link_Establishing...
              </motion.span>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 h-[2px] bg-white/10 rounded-full relative overflow-hidden mb-4">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              {/* Scan Laser effect */}
              <motion.div 
                className="absolute inset-y-0 w-20 bg-linear-to-r from-transparent via-primary/50 to-transparent"
                animate={{ left: ['-20%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="flex justify-between w-64 text-[10px] font-mono text-gray-500">
               <span>SYSTEM_READY</span>
               <span>{Math.floor(progress)}%</span>
            </div>
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
