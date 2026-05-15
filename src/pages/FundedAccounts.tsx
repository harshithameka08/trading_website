import React from 'react';
import { 
  Trophy, Shield, Target, Clock, Wallet, TrendingUp, Users, 
  ChevronRight, ArrowRight, Star, Globe, Zap, CheckCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button, Badge, Card } from '@/src/components/UI';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

// Asset imports
import bgHero from '../funded_accounts_bg_1778855244938.png';

export default function FundedAccounts() {
  const firms = [
    { name: 'FTMO', funding: 'Up to $200,000', rating: 4.8, type: 'MetaTrader 4/5', features: ['90% Profit Share', 'No Time Limit', 'Institutional Spreads'] },
    { name: 'The 5%ers', funding: 'Up to $4,000,000', rating: 4.7, type: 'MT5 / Proprietary', features: ['Instant Funding', 'Growth Program', 'Daily Payouts'] },
    { name: 'Funding Pips', funding: 'Up to $200,000', rating: 4.6, type: 'Match-Trader', features: ['Lowest Evaluation', 'No Consistency Rule', 'Fast Processing'] },
    { name: 'TOPSTEP', rating: 4.8, funding: 'Up to $150,000', type: 'Tradovate / Ninja', features: ['Futures Trading', 'Simple Rules', 'Fast Track'] },
    { name: 'Turtle Trader', rating: 4.5, funding: 'Up to $100,000', type: 'MT4 / MT5', features: ['Fixed Risk', 'Long Duration', 'High Stability'] }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-32 pb-20 selection:bg-gold/30 font-sans relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 max-md:opacity-20">
         <img src={bgHero} className="w-full h-full object-cover object-center grayscale brightness-75 max-md:object-center" alt="Background" />
         {/* Mobile Readability Overlay */}
         <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/50 to-black/90 md:hidden" />
         <div className="absolute inset-0 bg-linear-to-b from-[#020617] via-[#020617]/90 to-[#020617]" />
      </div>

      <div className="container mx-auto px-6 max-w-[1700px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          <div className="space-y-6 max-w-3xl">
             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase leading-none"
             >
                Funded <span className="text-gold">Accounts</span>
             </motion.h1>
             <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                Unlock professional trading capital. We partner with elite proprietary trading firms to provide our students with multi-million dollar funding opportunities.
             </p>
          </div>
          <div className="flex items-center gap-12 text-gray-500 font-black text-[10px] uppercase tracking-[0.2em] max-md:w-full max-md:justify-between">
             <div className="flex flex-col gap-1">
                <span className="text-white text-2xl">24/7</span>
                <span>Payout Access</span>
             </div>
             <div className="w-px h-12 bg-white/5" />
             <div className="flex flex-col gap-1">
                <span className="text-white text-2xl">90%</span>
                <span>Profit Split</span>
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-32">
           {firms.map((firm, i) => (
             <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-linear-to-b from-white/5 to-transparent rounded-[3rem] border border-white/5 p-12 backdrop-blur-3xl hover:border-gold/30 hover:bg-white/3 transition-all duration-500 flex flex-col h-full shadow-2xl"
             >
                <div className="flex justify-between items-start mb-10">
                   <div className="w-20 h-20 rounded-2xl bg-bg-main flex items-center justify-center text-3xl font-black text-white border border-white/10 group-hover:border-gold transition-colors">
                      {firm.name[0]}
                   </div>
                   <div className="text-right">
                      <div className="flex items-center justify-end gap-1.5 mb-2">
                         {[...Array(5)].map((_, j) => <Star key={j} className={cn("w-4 h-4 fill-gold", j === 4 && firm.rating < 4.8 && "opacity-20")} />)}
                      </div>
                      <p className="text-xl font-black text-white leading-none">{firm.name}</p>
                      <p className="text-[10px] font-bold text-gray-500 mt-2 uppercase tracking-widest">{firm.type}</p>
                   </div>
                </div>

                <div className="flex-1 space-y-8 mb-12">
                   <div className="space-y-2">
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Available Funding</p>
                      <p className="text-4xl font-black text-gold tracking-tighter">{firm.funding}</p>
                   </div>
                   
                   <div className="space-y-4">
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Key Features</p>
                      <div className="grid gap-4">
                         {firm.features.map((f, j) => (
                           <div key={j} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                              <CheckCircle className="w-4 h-4 text-emerald-500" /> {f}
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                <Link to="/login">
                  <Button className="w-full h-18 rounded-2xl bg-white/5 hover:bg-gold text-white hover:text-black font-black text-[12px] uppercase tracking-widest transition-all group-hover:shadow-[0_10px_30px_rgba(244,197,66,0.1)] border-none">
                     Start Challenge <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
             </motion.div>
           ))}
           <Link to="/contact" className="bg-white/1 rounded-[3rem] border border-dashed border-white/10 backdrop-blur-md flex flex-col items-center justify-center p-12 text-center group cursor-pointer hover:bg-white/3 transition-all">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-gold group-hover:text-black transition-all">
                 <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-gray-400 group-hover:text-white transition-colors">Partner With Us</h3>
              <p className="text-gray-600 text-sm font-medium leading-relaxed max-w-[240px]">Are you a prop firm looking for professional traders? Connect with TEAMUS 369.</p>
           </Link>
        </div>

        <section className="bg-linear-to-r from-blue-600/20 via-blue-600/10 to-transparent rounded-[4rem] border border-blue-500/20 p-20 relative overflow-hidden backdrop-blur-2xl shadow-inner">

           <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="space-y-10">
                 <div className="w-20 h-20 rounded-[2rem] bg-blue-600 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.3)]">
                    <Shield className="w-10 h-10 text-white" />
                 </div>
                 <div className="space-y-6">
                    <h2 className="text-5xl lg:text-7xl font-display font-black tracking-tighter uppercase leading-none">
                       Verified <span className="text-blue-500">Track Record</span>
                    </h2>
                    <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-xl italic">
                       Our students have secured over $25M+ in total funding. Join the ranks of successful institutional traders today.
                    </p>
                 </div>

              </div>
              <div className="grid grid-cols-2 gap-8">
                 {[
                   { label: 'Total Funding', val: '$25M+' },
                   { label: 'Successful Traders', val: '1,200+' },
                   { label: 'Avg. Profit Share', val: '85%' },
                   { label: 'Payout Processing', val: '< 24H' }
                 ].map((stat, i) => (
                   <div key={i} className="bg-black/40 backdrop-blur-xl border border-white/5 p-10 rounded-3xl space-y-2">
                      <p className="text-4xl font-black text-white tracking-tighter">{stat.val}</p>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
