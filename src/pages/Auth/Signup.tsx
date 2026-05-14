import { Badge, Button, Card } from "@/src/components/UI";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Shield, Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Signup() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Bg Decor */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="hidden lg:block space-y-10">
           <Badge>New Registration</Badge>
           <h1 className="text-6xl font-display font-extrabold leading-tight">Start Your <span className="text-primary italic">Trading Evolution</span> Today</h1>
           <div className="space-y-6">
              {[
                'Access 500+ institutional strategies',
                'Live daily classes from verified pro mentors',
                'Real-time AI market scanning & analysis',
                'Private discord & student leadership board',
              ].map(f => (
                <div key={f} className="flex gap-4 items-center group">
                   <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                   </div>
                   <span className="text-gray-400 font-medium group-hover:text-white transition-colors">{f}</span>
                </div>
              ))}
           </div>
           <Card className="p-8 border-primary/20 bg-white/5 space-y-4">
              <div className="text-xs font-bold text-primary uppercase tracking-widest">Current Active Signal</div>
              <div className="text-2xl font-bold flex items-center gap-3">
                 <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                 BTC BULLISH SWEEP OVER 64K
              </div>
              <p className="text-xs text-gray-500 font-mono">ENROLL NOW TO UNLOCK LIVE STRATEGY DEPLOYMENT</p>
           </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
           <Card className="p-10 border-white/5 shadow-2xl">
              <div className="mb-10 lg:hidden text-center">
                 <Link to="/" className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-bold text-bg-main text-lg">3</div>
                  <span className="font-display font-bold text-xl tracking-tighter">TEAMUS 369</span>
                </Link>
                <h2 className="text-3xl font-display font-bold">Join the Ecosystem</h2>
              </div>
              
              <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Full Identity Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-primary transition-all text-white" placeholder="Johnathan Doe" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Secure Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-primary transition-all text-white" placeholder="trader@evolution.com" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Create Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-primary transition-all text-white" placeholder="••••••••" />
                    </div>
                </div>

                <div className="flex items-start gap-3 px-1 pt-2">
                   <input type="checkbox" className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 p-0 checked:bg-primary" />
                   <p className="text-[10px] text-gray-500 leading-relaxed font-bold tracking-tight">
                      I AGREE TO THE <Link to="/terms-conditions" className="text-primary hover:underline">TERMS OF SERVICE</Link> AND ACKNOWLEDGE THAT TRADING INVOLVES SIGNIFICANT RISK TO CAPITAL.
                   </p>
                </div>

                <Button className="w-full py-5 uppercase tracking-widest text-xs gap-2 group">
                  Initialize Planet Account <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-center mt-10 text-gray-500 text-sm">
                Already part of the network? <Link to="/login" className="text-primary font-bold hover:underline">Access Terminal</Link>
              </p>
           </Card>
        </motion.div>
      </div>
    </div>
  );
}
