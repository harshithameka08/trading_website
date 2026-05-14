import { Badge, Button, Card } from "@/src/components/UI";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Lock, Shield, Layout, Github, Globe } from "lucide-react";
import { motion } from "motion/react";

export default function Login() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Bg Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg relative z-10"
      >
        <div className="text-center mb-10 space-y-4">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-bg-main text-xl">3</div>
            <span className="font-display font-bold text-2xl tracking-tighter">TEAMUS 369</span>
          </Link>
          <h1 className="text-4xl font-display font-bold">Access Terminal</h1>
          <p className="text-gray-500">Welcome back. Enter your credentials to access the ecosystem.</p>
        </div>

        <Card className="p-10 border-white/5 shadow-2xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-primary transition-all text-white" 
                  placeholder="name@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Password</label>
                <Link to="/forgot-password" title="Forgot Password" className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest">Forgot?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="password" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-primary transition-all text-white" 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button className="w-full py-5 uppercase tracking-widest text-xs">Verify & Login</Button>

            <div className="relative py-4">
               <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/5"></div>
               </div>
               <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-transparent px-4 text-gray-600 font-bold backdrop-blur-md">Or Protocol Login</span>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <Button variant="secondary" className="gap-3 py-4 text-xs font-bold">
                  <Github className="w-4 h-4" /> Github
               </Button>
               <Button variant="secondary" className="gap-3 py-4 text-xs font-bold">
                  <Globe className="w-4 h-4" /> Google
               </Button>
            </div>
          </form>
        </Card>

        <p className="text-center mt-10 text-gray-500 text-sm">
          Don't have a neural link? <Link to="/signup" className="text-primary font-bold hover:underline">Register Citizen Account</Link>
        </p>

        <div className="mt-12 flex justify-center gap-6 opacity-30 text-[10px] font-bold tracking-widest grayscale pointer-events-none uppercase">
           <div className="flex items-center gap-2 animate-pulse"><Shield className="w-3 h-3" /> END_TO_END ENCRYPTED</div>
           <div className="flex items-center gap-2"><Layout className="w-3 h-3" /> TERMINAL_SECURE</div>
        </div>
      </motion.div>
    </div>
  );
}
