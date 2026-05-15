import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Mail, Lock, Shield, Layout, Github, Globe, 
  Activity, Zap, ShieldCheck, Cpu, Fingerprint, LockIcon,
  TrendingUp, BarChart3, Globe2, Sparkles, CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button, Card } from "@/src/components/UI";
import { cn } from "@/src/lib/utils";

// Assets
import heroVisual from "../../cyber_trading_hero.png";
import logo from "../../trading_logoproject.png";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isFocused, setIsFocused] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30 flex overflow-hidden relative">
      
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Layer 1: Dark Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-[#020617] via-[#071120] to-[#020617]" />
        
        {/* Layer 2: Radial Glows */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
        
        {/* Layer 3: Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />

        {/* Layer 4: Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:flex-row relative z-10">
        
        {/* --- LEFT SIDE: THE VISUAL TERMINAL --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden lg:flex lg:w-1/2 relative flex-col justify-center p-16 overflow-hidden border-r border-white/5"
        >
          {/* Hero Image with Cinematic Masks */}
          <div className="absolute inset-0 z-0">
             <img src={heroVisual} className="w-full h-full object-cover opacity-60 scale-110" alt="Cyber Trading Visual" />
             <div className="absolute inset-0 bg-linear-to-r from-[#020617]/60 via-[#020617]/20 to-transparent" />
             <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent" />
          </div>



          {/* Hero Text Content */}
          <div className="relative z-10 max-w-xl space-y-8 -mt-20">
             <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-6xl xl:text-7xl font-sans font-black leading-[1.05] tracking-tight"
                >
                   Enter the <br />
                   <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-size-[200%_auto] animate-gradient-x">Future</span> of Trading
                </motion.h1>
             </div>
          </div>


        </motion.div>

        {/* --- RIGHT SIDE: LOGIN FORM CARD --- */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12 relative overflow-visible">
          
          {/* Card Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[480px] relative"
          >
            {/* Header branding for mobile */}
            <div className="lg:hidden flex flex-col items-center mb-10 space-y-4">
               <h2 className="text-3xl font-sans font-black text-white uppercase tracking-tighter">Access Terminal</h2>
            </div>

            <div className="bg-white/2 backdrop-blur-3xl border border-white/10 rounded-[32px] p-6 lg:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] relative overflow-hidden group">
              
              {/* Subtle Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,3px_100%]" />
              
              <div className="space-y-10 relative z-10">
                {/* Header Labels */}
                <div className="space-y-1 text-center lg:text-left">
                   <h2 className="text-3xl font-sans font-black text-white uppercase tracking-tight">Welcome Back</h2>
                   <p className="text-gray-500 text-sm font-medium">Please enter your credentials to login.</p>
                </div>

                <form className="space-y-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <Mail className="w-4 h-4" /> Email Address
                      </label>
                    </div>
                    <div className="relative group/input">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setIsFocused('email')}
                        onBlur={() => setIsFocused(null)}
                        className={cn(
                          "w-full h-16 bg-black/40 border rounded-2xl px-6 text-base font-bold transition-all outline-none text-white placeholder:text-gray-500",
                          isFocused === 'email' ? "border-cyan-500/50 ring-4 ring-cyan-500/5 shadow-[inset_0_0_20px_rgba(0,229,255,0.05)]" : "border-white/10 hover:border-white/20"
                        )}
                        placeholder="identity@teamus369.com"
                      />
                      <div className={cn(
                        "absolute bottom-0 left-6 right-6 h-[2px] transition-all duration-500 rounded-full",
                        isFocused === 'email' ? "bg-cyan-500 w-[calc(100%-48px)] shadow-[0_0_10px_rgba(0,229,255,0.8)]" : "bg-transparent w-0"
                      )} />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center px-1">
                      <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                        <LockIcon className="w-4 h-4" /> Password
                      </label>
                      <Link to="/forgot-password" title="Recover Password" className="text-[9px] font-black text-cyan-400 hover:text-white transition-colors uppercase tracking-widest">Forgot Password?</Link>
                    </div>
                    <div className="relative group/input">
                      <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setIsFocused('password')}
                        onBlur={() => setIsFocused(null)}
                        className={cn(
                          "w-full h-14 bg-black/40 border rounded-2xl px-6 text-base font-bold transition-all outline-none text-white placeholder:text-gray-500",
                          isFocused === 'password' ? "border-cyan-500/50 ring-4 ring-cyan-500/5 shadow-[inset_0_0_20px_rgba(0,229,255,0.05)]" : "border-white/10 hover:border-white/20"
                        )}
                        placeholder="••••••••••••"
                      />
                      <div className={cn(
                        "absolute bottom-0 left-6 right-6 h-[2px] transition-all duration-500 rounded-full",
                        isFocused === 'password' ? "bg-cyan-500 w-[calc(100%-48px)] shadow-[0_0_10px_rgba(0,229,255,0.8)]" : "bg-transparent w-0"
                      )} />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 space-y-6">
                    <button className="w-full h-14 bg-linear-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center gap-3 group relative overflow-hidden active:scale-95 transition-all shadow-xl shadow-cyan-500/20">
                       <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                       <span className="text-black font-black uppercase text-sm tracking-[0.2em] relative z-10">Login Now</span>
                       <ArrowRight className="w-6 h-6 text-black relative z-10 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Social Auth */}
                    <div className="space-y-4">
                       <div className="flex items-center gap-4">
                          <div className="h-px flex-1 bg-white/5" />
                          <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Or login with</span>
                          <div className="h-px flex-1 bg-white/5" />
                       </div>
                       <div className="grid grid-cols-1 gap-4">
                          {[
                            { icon: <Globe2 className="w-4 h-4" />, label: "Google" }
                          ].map((social) => (
                            <button key={social.label} className="h-14 bg-white/2 border border-white/10 rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 hover:border-cyan-500/30 transition-all group/soc">
                               <div className="text-gray-400 group-hover/soc:text-white transition-colors"><Globe2 className="w-5 h-5" /></div>
                               <span className="text-[10px] font-black text-gray-500 group-hover/soc:text-white uppercase tracking-widest">{social.label}</span>
                            </button>
                          ))}
                       </div>
                    </div>
                  </div>
                </form>

                {/* Footer Link */}
                 <div className="pt-4 text-center">
                    <p className="text-sm text-gray-400 font-medium">
                       Don't have an account? <Link to="/signup" className="text-cyan-400 font-black hover:text-white transition-colors">Sign up</Link>
                    </p>
                 </div>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </div>
  );
}
