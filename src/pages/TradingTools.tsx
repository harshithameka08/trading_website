import React from 'react';
import { 
  Monitor, BarChart3, LineChart, Cpu, Zap, Globe, 
  Search, Shield, Layout, Layers, Smartphone, MousePointer2,
  ChevronRight, ExternalLink, Star, ArrowRight, Activity, Download
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button, Badge, Card } from '@/src/components/UI';
import { cn } from '@/src/lib/utils';

export default function TradingTools() {
  const categories = ['All Tools', 'Charting', 'Brokers', 'Analysis', 'Execution', 'Crypto'];
  const [activeCategory, setActiveCategory] = React.useState('All Tools');

  const tools = [
    { name: 'TradingView', category: 'Charting', rating: 4.9, users: '30M+', desc: 'The world\'s most advanced charting platform with real-time institutional data.', features: ['Multi-Timeframe Analysis', 'Pine Script Engine', 'Custom Indicators'] },
    { name: 'ZERODHA', category: 'Brokers', rating: 4.7, users: '10M+', desc: 'India\'s leading discount broker with powerful API integrations and terminal execution.', features: ['Kite Terminal', 'Sensibull Integration', 'Zero Brokerage'] },
    { name: 'Upstox', category: 'Brokers', rating: 4.5, users: '5M+', desc: 'Modern trading platform designed for high-frequency execution and market depth.', features: ['Pro Terminal', 'Margin Trading', 'Option Strategy Builder'] },
    { name: 'Sensibull', category: 'Analysis', rating: 4.8, users: '2M+', desc: 'Advanced options trading tool for strategy building, risk analysis, and real-time flow.', features: ['Strategy Optimizer', 'Virtual Trading', 'F&O Data'] },
    { name: 'TickerTape', category: 'Analysis', rating: 4.6, users: '8M+', desc: 'Comprehensive financial search engine and equity analysis tool for long-term investors.', features: ['Stock Screeners', 'MF Analytics', 'Etiquette Scoring'] },
    { name: 'Delta Exchange', category: 'Crypto', rating: 4.5, users: '1M+', desc: 'Institutional-grade crypto derivatives exchange for futures and options trading.', features: ['100x Leverage', 'Safe Liquidity', '24/7 Support'] }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-32 pb-20 selection:bg-gold/30 font-sans">
      <div className="container mx-auto px-6 max-w-[1700px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="space-y-8 max-w-4xl">

             <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-[0.85]">
                Elite <br/><span className="text-gold">Toolset</span>
             </h1>
             <p className="text-gray-400 text-2xl font-medium leading-relaxed italic max-w-2xl">
                The absolute best applications and platforms used by professional institutional traders to maintain a consistent market edge.
             </p>
          </div>
          
          <div className="flex flex-wrap justify-end gap-3 lg:pb-4">
             {categories.map((cat) => (
               <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest border transition-all duration-500",
                  activeCategory === cat ? "bg-gold text-black border-gold shadow-[0_10px_40px_rgba(244,197,66,0.3)]" : "bg-white/5 text-gray-500 border-white/5 hover:border-gold/30 hover:text-white"
                )}
               >
                 {cat}
               </button>
             ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
           {tools.filter(t => activeCategory === 'All Tools' || t.category === activeCategory).map((tool, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group bg-bg-main rounded-[3rem] border border-white/5 p-12 hover:border-gold/30 hover:bg-white/2 transition-all duration-700 relative overflow-hidden h-full flex flex-col"
             >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex justify-between items-start mb-12">
                   <div className="w-20 h-20 rounded-[2rem] bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-gold/20 transition-all">
                      <Monitor className="w-9 h-9 text-gray-600 group-hover:text-gold transition-colors" />
                   </div>
                   <div className="text-right">
                      <p className="text-4xl font-black text-white tracking-tighter group-hover:text-gold transition-colors">{tool.name}</p>
                      <div className="flex items-center justify-end gap-1 mt-2">
                         {[...Array(5)].map((_, j) => <Star key={j} className={cn("w-3.5 h-3.5 fill-gold", j === 4 && "opacity-20")} />)}
                         <span className="text-[11px] font-black text-gray-500 ml-2">{tool.rating}</span>
                      </div>
                   </div>
                </div>

                <div className="flex-1 space-y-8 mb-12">
                   <p className="text-gray-400 text-base font-medium leading-relaxed italic">{tool.desc}</p>
                   
                   <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">Elite Features</p>
                      <div className="grid gap-3">
                         {tool.features.map((f, j) => (
                           <div key={j} className="flex items-center gap-3 text-xs font-bold text-gray-500 group-hover:text-gray-300 transition-colors">
                              <Zap className="w-4 h-4 text-gold/40" /> {f}
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                   <div className="space-y-1">
                      <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Active Users</p>
                      <p className="text-lg font-black text-white">{tool.users}</p>
                   </div>
                   <Button to="/tool-details" className="h-14 px-8 rounded-2xl bg-white/5 hover:bg-gold text-white hover:text-black font-black text-[11px] uppercase tracking-widest transition-all border-none shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                      Explore Tool <ExternalLink className="w-4 h-4 ml-2" />
                   </Button>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Professional Recommendation Banner */}
        <section className="mt-32">
           <div className="bg-linear-to-r from-gold/20 via-gold/5 to-transparent rounded-[4rem] border border-gold/20 p-16 lg:p-24 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-20 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
                 <Cpu className="w-120 h-120 text-gold" />
              </div>
              
              <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                 <div className="space-y-10">
                    <div className="w-24 h-24 rounded-[2.5rem] bg-gold flex items-center justify-center shadow-[0_20px_50px_rgba(244,197,66,0.3)]">
                       <Shield className="w-12 h-12 text-black" />
                    </div>
                    <div className="space-y-6">
                       <h2 className="text-5xl lg:text-7xl font-display font-black tracking-tighter uppercase leading-none">
                          Institutional <br/><span className="text-gold">Compliance</span>
                       </h2>
                       <p className="text-gray-400 text-2xl font-medium leading-relaxed max-w-xl italic">
                          All recommended tools are verified for security, zero-latency execution, and institutional data accuracy.
                       </p>
                    </div>
                    <Button to="/login" className="h-20 px-12 rounded-[2rem] bg-white text-black font-black text-sm uppercase tracking-[0.2em] hover:bg-gold transition-all shadow-2xl">
                       Get Setup Guide <Download className="w-5 h-5 ml-3" />
                    </Button>
                 </div>

                 <div className="grid grid-cols-2 gap-8">
                    {[
                      { icon: <Zap />, title: 'Real-time Data' },
                      { icon: <Shield />, title: 'Bank-Grade Security' },
                      { icon: <Cpu />, title: 'AI Integration' },
                      { icon: <Globe />, title: 'Global Markets' }
                    ].map((feat, i) => (
                      <div key={i} className="bg-black/60 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] space-y-4 hover:border-gold/40 transition-all group/feat">
                         <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover/feat:scale-110 transition-transform">{feat.icon}</div>
                         <p className="text-lg font-black text-white uppercase tracking-tight">{feat.title}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
