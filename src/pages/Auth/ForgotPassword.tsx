import { Badge, Button } from "@/src/components/UI";
import { ArrowLeft, Send, Github, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-lg glass-card p-12 border-white/5">
        <div className="text-center mb-10 space-y-4">
           <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-extrabold text-primary italic">?</span>
           </div>
           <h1 className="text-4xl font-display font-bold">Neural Recovery</h1>
           <p className="text-gray-500">Enter your email and we'll transmit a secure recovery link to your terminal.</p>
        </div>

        <form className="space-y-8">
           <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Verify Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-white" placeholder="your@email.com" />
           </div>
           
           <Button className="w-full py-5 text-sm uppercase tracking-widest gap-3">
              Transmit Recovery <Send className="w-4 h-4" />
           </Button>

           <Link to="/login" className="flex items-center justify-center gap-2 text-xs font-bold text-gray-500 hover:text-white transition-colors">
              <ArrowLeft className="w-3 h-3" /> BACK TO ACCESS TERMINAL
           </Link>
        </form>
      </motion.div>
    </div>
  );
}
