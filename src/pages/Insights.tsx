import { Badge, Button, Card } from "@/src/components/UI";
import { LucideIcon, Filter, Search, Play, Clock, BookOpen, Layers, Target, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export default function Insights() {
  const articles = [
    { title: "The 2024 Bull Cycle: AI Models Predict Q4 Supergrowth", cat: "Market Analysis", date: "2 Hours Ago", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80" },
    { title: "Smart Money Concepts: How Institutions Hide Their Orders", cat: "Psychology", date: "6 Hours Ago", img: "https://images.unsplash.com/photo-1611974714014-4b50d1bb350c?auto=format&fit=crop&w=800&q=80" },
    { title: "Mastering Emotional Discipline in Volatile Markets", cat: "Education", date: "1 Day Ago", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80" },
    { title: "Crypto Whales Move $2B: What The On-Chain Data Tells Us", cat: "On-Chain", date: "2 Days Ago", img: "https://images.unsplash.com/photo-1622760823970-59235cc36bc2?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="space-y-6">
            <Badge>Daily Intelligence</Badge>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight">Market <span className="text-primary italic">Insights</span></h1>
            <p className="text-gray-400 max-w-xl text-lg">Stay ahead of the curve with our professional research desk. High-probability setups, news breakdowns, and psychology sessions.</p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
             <div className="relative flex-1 md:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:border-primary transition-all" placeholder="Search Intelligence..." />
             </div>
             <Button variant="secondary" className="p-3 w-12 h-12 rounded-full shrink-0"><Filter className="w-5 h-5" /></Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {articles.map((art, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="group">
               <div className="relative aspect-3/4 rounded-2xl overflow-hidden mb-6 border border-white/5">
                 <img src={art.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={art.title} />
                 <div className="absolute inset-0 bg-linear-to-t from-bg-main via-transparent to-transparent opacity-80" />
                 <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-bg-main font-bold text-[8px] rounded-sm uppercase tracking-widest">{art.cat}</span>
                 </div>
                 <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold font-display leading-tight group-hover:text-primary transition-colors">{art.title}</h3>
                    <div className="mt-4 flex items-center justify-between text-[10px] font-bold text-gray-500 tracking-widest uppercase border-t border-white/10 pt-4">
                       <div className="flex items-center gap-2"><Clock className="w-3 h-3" /> {art.date}</div>
                       <Button to="/login" variant="ghost" className="p-0 hover:bg-transparent text-primary">Read Data →</Button>
                    </div>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>

        <section className="py-20 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
                <Badge className="bg-primary/5 border-primary/20">Advanced Analytics</Badge>
                <h2 className="text-4xl font-display font-bold">The Sentiment <span className="italic text-primary">Neural Map</span></h2>
                <p className="text-gray-500 leading-relaxed text-lg">Our AI processes over 100,000 news articles, social signals, and institutional reports daily to generate a real-time sentiment map of the global markets.</p>
                <div className="grid grid-cols-2 gap-6">
                   {[
                     { label: 'BULLISH', val: '72%', color: 'text-emerald-400' },
                     { label: 'BEARISH', val: '18%', color: 'text-red-400' },
                     { label: 'NEUTRAL', val: '10%', color: 'text-gray-500' },
                     { label: 'VOLATILITY', val: 'HIGH', color: 'text-amber-400' },
                   ].map(s => (
                     <div key={s.label} className="glass-card p-6 border-white/5">
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{s.label}</div>
                        <div className={cn("text-2xl font-bold font-mono", s.color)}>{s.val}</div>
                     </div>
                   ))}
                </div>
                <Button to="/login" variant="neon-border">Unlock Deep Insights</Button>
             </div>
             
             <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse-slow" />
                <Card className="aspect-square relative z-10 flex items-center justify-center bg-black/40">
                   <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto animate-bounce text-primary">
                        <Zap className="w-10 h-10" />
                      </div>
                      <div className="text-sm font-mono text-gray-500">LIVE_DATA_STREAMING...</div>
                      <div className="text-5xl font-extrabold font-display italic text-white/20">INSIGHTS</div>
                   </div>
                </Card>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
