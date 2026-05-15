import { Badge, Button, Card } from "@/src/components/UI";
import { ArrowRight, Cpu, Layers, Layout, LineChart, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Platform() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <Badge>Elite Infrastructure</Badge>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight">The <span className="text-primary">Operating System</span> for Modern Traders</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive terminal built for institutional-grade market analysis, risk management, and professional execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
            <h2 className="text-4xl font-display font-bold">Real-time <span className="text-cyan">Neural Engines</span></h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              Our back-end infrastructure processes billions of data points per second to deliver tick-perfect accuracy across all major asset classes.
            </p>
            <ul className="grid gap-6">
              {[
                { icon: <Zap />, title: 'Lightning Fast Execution', desc: 'Execute trades directly through our integrated broker APIs with minimal latency.' },
                { icon: <Shield />, title: 'Advanced Risk Guard', desc: 'Automated protection layers that prevent total account drawdown and emotional trading.' },
                { icon: <Cpu />, title: 'Edge Analytics', desc: 'Proprietary indicators that highlight smart money accumulation and distribution zones.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-base text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <Button to="/login" size="lg" className="px-10">Explore Terminal Features</Button>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full animate-pulse-slow" />
            <div className="glass-card aspect-square relative z-10 p-12 group hover:border-primary/30 transition-colors duration-500">
               <div className="grid grid-cols-2 gap-6 w-full h-full">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="glass-card bg-white/5 border-white/10 p-6 flex flex-col justify-between"
                  >
                     <LineChart className="text-primary w-10 h-10" />
                     <div>
                        <div className="text-[10px] text-gray-500 font-mono tracking-widest mb-1">MODULE_01</div>
                        <div className="text-2xl font-bold font-mono">FLOW_SCAN</div>
                     </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="glass-card bg-primary/5 border-primary/20 p-6 flex flex-col justify-between"
                  >
                     <Layers className="text-cyan w-10 h-10" />
                     <div>
                        <div className="text-[10px] text-gray-400 font-mono tracking-widest mb-1">MODULE_02</div>
                        <div className="text-2xl font-bold font-mono">LAYER_X</div>
                     </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="glass-card bg-white/5 border-white/10 p-6 flex flex-col justify-between"
                  >
                     <Shield className="text-emerald-400 w-10 h-10" />
                     <div>
                        <div className="text-[10px] text-gray-500 font-mono tracking-widest mb-1">SECURITY_A</div>
                        <div className="text-2xl font-bold font-mono">SECURE</div>
                     </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="glass-card bg-white/5 border-white/10 group-hover:bg-primary/20 transition-all p-6 flex flex-col justify-between"
                  >
                     <ArrowRight className="text-white w-10 h-10" />
                     <div>
                        <div className="text-[10px] text-gray-500 font-mono tracking-widest mb-1">NAV_TERMINAL</div>
                        <div className="text-2xl font-bold font-mono">CONNECT</div>
                     </div>
                  </motion.div>
               </div>
            </div>
          </div>
        </div>

        <section className="py-20">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-10 space-y-6">
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Learning Tier</Badge>
              <h3 className="text-3xl font-bold font-display leading-tight">Master Classes & Mentorship</h3>
              <p className="text-gray-500">Access thousands of hours of high-definition trading education from world-class performance mentors.</p>
              <Button to="/courses" variant="ghost" className="p-0 hover:bg-transparent text-primary">View Classes →</Button>
            </Card>
            <Card className="p-10 space-y-6">
              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">Data Tier</Badge>
              <h3 className="text-3xl font-bold font-display leading-tight">Institutional Market Data</h3>
              <p className="text-gray-500">Zero-latency data feeds for Stocks, Forex, and Crypto through our global server network.</p>
              <Button to="/login" variant="ghost" className="p-0 hover:bg-transparent text-primary">View Data Coverage →</Button>
            </Card>
            <Card className="p-10 space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">AI Tier</Badge>
              <h3 className="text-3xl font-bold font-display leading-tight">Autonomous Analysis</h3>
              <p className="text-gray-500">Let our proprietary neural networks scan the markets for you 24/7/365 while you sleep.</p>
              <Button to="/login" variant="ghost" className="p-0 hover:bg-transparent text-primary">Explore AI Tools →</Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
