import { Button } from "@/src/components/UI";
import { ArrowRight, RefreshCw, Shield } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function OTPVerification() {
  const [codes, setCodes] = useState(['', '', '', '', '', '']);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />
      
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-xl glass-card p-12 border-white/10 text-center">
         <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-primary/20">
            <Shield className="w-10 h-10 text-primary" />
         </div>
         <h1 className="text-4xl font-display font-bold mb-4 italic">Identity <span className="text-primary italic">Validation</span></h1>
         <p className="text-gray-500 mb-10 max-w-sm mx-auto">A 6-digit cryptographic code has been transmitted to your email. Enter it below to authorize this session.</p>

         <div className="flex justify-center gap-4 mb-12">
            {codes.map((_, i) => (
              <input 
                key={i}
                type="text" 
                maxLength={1}
                className="w-14 h-16 bg-white/5 border-2 border-white/10 rounded-xl text-center text-2xl font-bold font-mono focus:outline-none focus:border-primary focus:bg-primary/5 transition-all text-white"
              />
            ))}
         </div>

         <div className="space-y-6">
            <Button className="w-full py-5 text-sm uppercase tracking-widest gap-2">
               Verify & Finish Enrollment <ArrowRight className="w-4 h-4" />
            </Button>
            <div className="flex flex-col items-center gap-4">
               <button className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-primary transition-colors">
                  <RefreshCw className="w-3 h-3" /> RETRANSMIT CODE
               </button>
               <p className="text-[10px] text-white/20 font-mono">ENCRYPTION: AES-256-GCM // TRACING: ENABLED</p>
            </div>
         </div>
      </motion.div>
    </div>
  );
}
