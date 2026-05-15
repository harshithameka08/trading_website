import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Users, Target, Award, Globe, Zap, Mic, Play, ArrowRight } from 'lucide-react';
import { Button, Card, Badge } from '@/src/components/UI';
import { cn } from '@/src/lib/utils';

export default function Community() {
  const rooms = [
    { name: 'Forex Alpha Hub', active: 342, type: 'Chat', icon: <Globe className="w-5 h-5" /> },
    { name: 'Crypto Whale Watch', active: 156, type: 'Voice', icon: <Mic className="w-5 h-5" /> },
    { name: 'Nifty/BankNifty Live', active: 890, type: 'Live', icon: <Play className="w-5 h-5" /> },
    { name: 'Strategy Backtesting', active: 89, type: 'Voice', icon: <Mic className="w-5 h-5" /> },
    { name: 'Global Market News', active: 1.2, type: 'Feed', icon: <Zap className="w-5 h-5" /> },
    { name: 'Psychology & Mindset', active: 45, type: 'Chat', icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center space-y-6">
          <Badge>Connect & Dominate</Badge>
          <h1 className="text-5xl md:text-8xl font-display font-extrabold tracking-tight">The Signal <span className="text-primary italic">Hub</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Real-time collaboration across global markets. Join 50K+ elite traders sharing alpha every second.</p>
          <div className="flex justify-center gap-6 pt-4">
             <Button to="/login" size="lg" className="px-10">Launch Discord Hub</Button>
             <Button to="/login" variant="secondary" size="lg" className="px-10">Explore Voice Rooms</Button>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
             <div className="grid md:grid-cols-2 gap-6">
                {rooms.map((room, i) => (
                  <motion.div
                    key={room.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="p-8 border-white/5 bg-white/2 group hover:border-primary/40 transition-all cursor-pointer">
                       <div className="flex justify-between items-start mb-6">
                          <div className={cn(
                             "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors shadow-inner",
                             room.type === 'Live' ? "bg-red-500/20 text-red-400" : "bg-primary/10 text-primary"
                          )}>
                             {room.icon}
                          </div>
                          <Badge className={cn("text-[8px] tracking-widest", room.type === 'Live' ? "bg-red-500/20 text-red-400 border-red-500/30" : "")}>{room.type}</Badge>
                       </div>
                       <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{room.name}</h3>
                       <div className="mt-4 pt-6 border-t border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                             <span className="text-[10px] font-bold text-gray-500">{room.active} ACTIVE NOW</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                       </div>
                    </Card>
                  </motion.div>
                ))}
             </div>

             <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold">Community <span className="text-primary italic">Live Feed</span></h2>
                <div className="space-y-4">
                   {[
                     { user: 'Siddharth M.', time: '2m ago', action: 'posted a new long setup on NIFTY', data: 'Potential 1:4 risk/reward identified.' },
                     { user: 'WhaleTracker', time: '5m ago', action: 'detected 4k BTC inflow to Exchange', data: 'Possible volatility increase expected in 15m.' },
                     { user: 'Sarah L.', time: '12m ago', action: 'completed Options Level 2 Path', data: 'Successfully earned certification in Scalping.' },
                   ].map((feed, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-card p-6 border-white/5 flex gap-4 items-start"
                     >
                        <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-primary shrink-0" />
                        <div className="space-y-1">
                           <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-white">{feed.user}</span>
                              <span className="text-[10px] text-gray-500 tracking-widest">{feed.time}</span>
                           </div>
                           <p className="text-sm text-gray-400">{feed.action}</p>
                           <p className="text-[11px] text-primary italic">{feed.data}</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                           <button className="text-xs text-gray-600 hover:text-white transition-colors">Like</button>
                           <button className="text-xs text-gray-600 hover:text-white transition-colors underline">Reply</button>
                        </div>
                     </motion.div>
                   ))}
                </div>
             </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
             <Card className="p-8 border-primary/20 shadow-[0_0_50px_rgba(182,255,59,0.05)] bg-primary/2">
                <h3 className="text-2xl font-bold mb-6">Elite <span className="text-primary italic">Leaderboard</span></h3>
                <div className="space-y-6">
                   {[
                     { rank: 1, name: 'Deepak Rao', pnl: '+$42,102', grow: '+12.5%' },
                     { rank: 2, name: 'Michael', pnl: '+$38,901', grow: '+10.2%' },
                     { rank: 3, name: 'Marco V.', pnl: '+$24,670', grow: '+8.4%' },
                     { rank: 4, name: 'Vikram S.', pnl: '+$19,230', grow: '+7.1%' },
                   ].map((u) => (
                     <div key={u.rank} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-xs font-mono">{u.rank}</div>
                        <div className="flex-1">
                           <div className="font-bold group-hover:text-primary transition-colors">{u.name}</div>
                           <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Member Since 2023</div>
                        </div>
                        <div className="text-right">
                           <div className="text-emerald-400 font-bold font-mono">{u.pnl}</div>
                           <div className="text-[9px] text-emerald-500/60 font-bold">{u.grow}</div>
                        </div>
                     </div>
                   ))}
                </div>
                <Button to="/login" variant="secondary" className="w-full mt-10 uppercase text-xs tracking-widest py-4">View All Standings</Button>
             </Card>

             <Card className="p-8 border-white/5 space-y-8">
                <div className="flex items-center gap-4">
                   <Target className="w-8 h-8 text-cyan animate-pulse" />
                   <div>
                      <div className="text-xl font-bold uppercase tracking-tighter">Voice Hubs</div>
                      <div className="text-xs text-gray-500 font-mono italic">ACTIVE_SESSIONS: 12</div>
                   </div>
                </div>
                <div className="space-y-4">
                   {[
                     { room: 'London Open Session', users: '24', timer: 'LIVE' },
                     { room: 'Advanced Candlestick Chat', users: '12', timer: 'Remind' },
                   ].map((v, i) => (
                     <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-cyan/40 transition-all cursor-pointer">
                        <div className="flex justify-between items-center mb-2">
                           <div className="font-bold text-sm group-hover:text-cyan transition-colors">{v.room}</div>
                           {v.timer === 'LIVE' && <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />}
                        </div>
                        <div className="flex items-center justify-between">
                           <div className="flex -space-x-2">
                              {[1,2,3].map(id => <div key={id} className="w-5 h-5 rounded-full bg-gray-800 border-2 border-bg-main" />)}
                              <span className="text-[10px] text-gray-500 ml-4">+{v.users} listening</span>
                           </div>
                           <button className="text-[10px] uppercase font-bold text-cyan">{v.timer}</button>
                        </div>
                     </div>
                   ))}
                </div>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
