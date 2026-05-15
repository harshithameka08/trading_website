import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button } from "@/src/components/UI";
import { 
  Play, Users, Calendar, Clock, Radio, ChevronRight, 
  ChevronLeft, CheckCircle, Video, Monitor, Layout, 
  Globe, Search, Bell, TrendingUp, Info, HelpCircle, Target, Sparkles, Zap, ShieldCheck, Award, MessageSquare, Download, History
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

// Assets
import avatar1 from '../avatar_1.png';
import avatar2 from '../avatar_2.png';
import avatar3 from '../avatar_3.png';
import avatar4 from '../avatar_4.png';
import liveBanner from '../live_session_new.png';

export default function LiveClasses() {
  const [activeTab, setActiveTab] = React.useState('Live Now');

  const liveSessions = [
    {
      id: 1,
      status: 'LIVE NOW',
      statusColor: 'bg-emerald-500',
      viewers: '1,245',
      title: 'Global Market Open Analysis',
      subtitle: 'NIFTY & BANKNIFTY Scalping',
      desc: 'Executing live institutional setups and order flow analysis during the opening bell.',
      mentor: 'Michael',
      exp: '12+ Years Exp.',
      time: '09:30 AM',
      duration: '2 Hours',
      isLive: true,
      img: liveBanner,
      avatar: avatar1
    }
  ];

  const upcomingSessions = [
    {
      id: 2,
      status: 'STARTS IN 02:15:30',
      statusColor: 'bg-gold',
      viewers: '840',
      title: 'Advanced Options Greeks',
      subtitle: 'Risk Hedging Techniques',
      desc: 'Mastering Delta and Gamma for consistent option selling in volatile markets.',
      mentor: 'Vikram Singh',
      exp: '8+ Years Exp.',
      time: '11:30 AM',
      duration: '2 Hours',
      btnText: 'SET REMINDER',
      avatar: avatar2
    },
    {
      id: 3,
      status: 'STARTS IN 05:45:30',
      statusColor: 'bg-blue-500',
      viewers: '520',
      title: 'Price Action Masterclass',
      subtitle: 'Psychology of Candle Patterns',
      desc: 'Deep dive into retail traps and how to identify high-probability institutional entries.',
      mentor: 'Rahul Verma',
      exp: '9+ Years Exp.',
      time: '03:00 PM',
      duration: '2 Hours',
      btnText: 'SET REMINDER',
      avatar: avatar3
    },
    {
      id: 4,
      status: 'TOMORROW',
      statusColor: 'bg-purple-500',
      viewers: '1.2K',
      title: 'Forex Liquidity Hubs',
      subtitle: 'USD/JPY Analysis',
      desc: 'Identifying where big banks place their orders in the forex market.',
      mentor: 'Michael',
      exp: '12+ Years Exp.',
      time: '10:00 AM',
      duration: '3 Hours',
      btnText: 'SET REMINDER',
      avatar: avatar1
    }
  ];

  const pastRecordings = [
    {
      id: 101,
      title: 'Mastering Support & Resistance',
      date: 'May 12, 2026',
      duration: '1h 45m',
      views: '4.5K',
      mentor: 'Michael',
      category: 'Foundation',
      img: liveBanner
    },
    {
      id: 102,
      title: 'Volatility Contraction Patterns',
      date: 'May 10, 2026',
      duration: '2h 10m',
      views: '3.2K',
      mentor: 'Vikram Singh',
      category: 'Advanced',
      img: liveBanner
    },
    {
      id: 103,
      title: 'Trading Psychology: Fear of Loss',
      date: 'May 08, 2026',
      duration: '1h 15m',
      views: '6.8K',
      mentor: 'Rahul Verma',
      category: 'Psychology',
      img: liveBanner
    },
    {
      id: 104,
      title: 'Commodity Market Fundamentals',
      date: 'May 05, 2026',
      duration: '2h 30m',
      views: '2.1K',
      mentor: 'Vikram Singh',
      category: 'Commodities',
      img: liveBanner
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen text-white font-sans selection:bg-gold/30 pt-28 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation & Tabs */}
        <section className="px-6 py-12">
          <div className="max-w-[1700px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-display font-black tracking-tighter leading-tight uppercase">
                  Live <span className="text-gold">Sessions</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-xl font-medium leading-relaxed">
                  Real-time market analysis, live execution, and institutional insights from world-class mentors.
                </p>
              </div>

              <div className="flex gap-10 border-b border-white/5">
                {['Live Now', 'Upcoming', 'Past Recordings'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "py-6 text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all relative",
                      activeTab === tab ? "text-gold" : "text-gray-500 hover:text-white"
                    )}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div 
                        layoutId="live-tab-underline"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-gold rounded-full" 
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content Rendering */}
            <AnimatePresence mode="wait">
              {activeTab === 'Live Now' && (
                <motion.div 
                  key="live-now"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-24"
                >
                  {/* Featured Session */}
                  <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-bg-main shadow-[0_40px_100px_rgba(0,0,0,0.5)] group">
                    <div className="grid lg:grid-cols-12 items-stretch">
                      <div className="lg:col-span-7 relative overflow-hidden min-h-[400px] max-md:min-h-[300px]">
                        <img src={liveBanner} alt="Live Session" className="absolute inset-0 w-full h-full object-cover opacity-50 max-md:object-center" />
                        {/* Mobile Overlay */}
                        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80 md:hidden" />
                        <div className="absolute inset-0 bg-linear-to-r from-bg-main via-bg-main/40 to-transparent" />
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                          <div className="flex gap-3">
                            <div className="px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">ON AIR NOW</span>
                            </div>
                            <div className="px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md flex items-center gap-3 text-white">
                              <Users className="w-4 h-4" />
                              <span className="text-[10px] font-black uppercase tracking-widest">{liveSessions[0].viewers} Watching</span>
                            </div>
                          </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-gold/90 backdrop-blur-xl flex items-center justify-center border-4 border-white/20 shadow-[0_0_50px_rgba(244,197,66,0.4)] cursor-pointer hover:scale-110 transition-transform group/play">
                            <Play className="w-10 h-10 fill-black text-black ml-1.5" />
                          </div>
                        </div>
                        </div>
                      </div>
                      <div className="lg:col-span-5 p-12 lg:p-16 flex flex-col justify-center space-y-10">
                        <div className="space-y-6">
                          <h2 className="text-4xl lg:text-5xl font-display font-black leading-tight uppercase tracking-tight">
                            {liveSessions[0].title}
                          </h2>
                          <p className="text-gray-400 text-lg leading-relaxed font-medium">
                            {liveSessions[0].desc}
                          </p>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                            <img src={liveSessions[0].avatar} alt="Mentor" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold flex items-center gap-2">{liveSessions[0].mentor} <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500/10" /></h4>
                            <p className="text-gray-500 text-xs font-black uppercase tracking-widest">{liveSessions[0].exp}</p>
                          </div>
                        </div>
                        <div className="flex gap-4 max-md:flex-col">
                          <Link to="/live-session" className="flex-1 max-md:w-full">
                            <Button className="w-full bg-gold hover:bg-gold/90 text-black font-black text-sm h-16 rounded-2xl max-md:justify-center">
                              JOIN LIVE ROOM
                            </Button>
                          </Link>
                          <button className="w-16 h-16 max-md:w-full rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                            <Bell className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[
                      { icon: <Monitor className="w-8 h-8" />, title: 'HD Live Stream', desc: 'Lag-free ultra high definition live trading experience.' },
                      { icon: <MessageSquare className="w-8 h-8" />, title: 'Live Q&A', desc: 'Interact directly with mentors during live market hours.' },
                      { icon: <ShieldCheck className="w-8 h-8" />, title: 'Institutional Flow', desc: 'Real-time order block and liquidity pool identification.' },
                      { icon: <Award className="w-8 h-8" />, title: 'Live Signals', desc: 'High-probability setups executed right in front of you.' }
                    ].map((benefit, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative p-10 rounded-[2.5rem] bg-white/2 border border-white/5 hover:bg-white/4 hover:border-gold/30 transition-all duration-500 cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity rounded-[2.5rem]" />
                        <div className="relative z-10 space-y-8">
                          <div className="w-20 h-20 rounded-3xl bg-bg-main border border-gold/20 flex items-center justify-center text-gold group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(244,197,66,0.2)] transition-all duration-500">
                            {benefit.icon}
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-gold transition-colors">{benefit.title}</h4>
                            <p className="text-gray-500 text-base font-medium leading-relaxed">{benefit.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'Upcoming' && (
                <motion.div 
                  key="upcoming"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                  {upcomingSessions.map((session, i) => (
                    <div 
                      key={session.id}
                      className="group bg-white/2 rounded-[2.5rem] border border-white/5 p-10 space-y-8 hover:bg-white/4 hover:border-gold/30 transition-all duration-500"
                    >
                      <div className="flex justify-between items-start">
                        <div className={cn(
                          "px-5 py-2 rounded-full border text-[10px] font-black tracking-widest uppercase",
                          session.statusColor === 'bg-gold' ? "bg-gold/10 border-gold/20 text-gold" : "bg-blue-500/10 border-blue-500/20 text-blue-400"
                        )}>
                          {session.status}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-xs font-bold">
                          <Users className="w-4 h-4" />
                          {session.viewers} Registered
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-tight">{session.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed font-medium line-clamp-2">{session.desc}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-gold" />
                          <div>
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">Starts At</p>
                            <p className="text-sm font-bold text-white">{session.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-gold" />
                          <div>
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">Duration</p>
                            <p className="text-sm font-bold text-white">{session.duration}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-4">
                          <img src={session.avatar} alt="Mentor" className="w-10 h-10 rounded-xl object-cover border border-white/10" />
                          <div>
                            <p className="text-xs font-bold text-white">{session.mentor}</p>
                            <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">{session.exp}</p>
                          </div>
                        </div>
                        <Button to="/login" variant="outline" className="border-white/10 hover:bg-gold hover:border-gold hover:text-black font-black text-[10px] px-6 py-2.5 h-auto rounded-xl uppercase tracking-widest">
                          {session.btnText}
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  {/* Join Community CTA */}
                  <div className="relative rounded-[2.5rem] bg-linear-to-br from-gold/20 to-primary/20 border border-gold/20 p-10 flex flex-col justify-center text-center space-y-8 overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-32 h-32 text-gold" />
                    </div>
                    <div className="space-y-4 relative z-10">
                      <h3 className="text-3xl font-black uppercase tracking-tight text-white leading-tight">Master The <span className="text-gold">Live Market</span></h3>
                      <p className="text-gray-400 text-sm font-medium leading-relaxed">
                        Join our Discord community for 24/7 market discussions and real-time trade signals.
                      </p>
                    </div>
                    <Button to="/login" className="w-full bg-white text-black font-black text-sm h-14 rounded-2xl relative z-10 hover:scale-105 transition-all">
                      JOIN OUR DISCORD
                    </Button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'Past Recordings' && (
                <motion.div 
                  key="past-recordings"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                  {pastRecordings.map((recording, i) => (
                    <div 
                      key={recording.id}
                      className="group bg-bg-main rounded-3xl border border-white/5 overflow-hidden flex flex-col hover:border-white/10 transition-all duration-500"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img src={recording.img} alt={recording.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center border-2 border-white/20 shadow-[0_0_30px_rgba(244,197,66,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                            <Play className="w-6 h-6 fill-black text-black ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-bold text-white">
                          {recording.duration}
                        </div>
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[9px] font-black uppercase tracking-widest text-white border border-white/10">
                          {recording.category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1 space-y-4">
                        <h4 className="text-base font-bold text-white leading-tight group-hover:text-gold transition-colors">{recording.title}</h4>
                        <div className="flex items-center justify-between text-[11px] text-gray-500 font-bold uppercase tracking-widest">
                          <div className="flex items-center gap-2">
                            <History className="w-3.5 h-3.5" /> {recording.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-3.5 h-3.5" /> {recording.views}
                          </div>
                        </div>
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-black text-[10px] text-gray-400 uppercase">
                              {recording.mentor[0]}
                            </div>
                            <span className="text-xs font-bold text-gray-400">{recording.mentor}</span>
                          </div>
                          <button className="text-gold hover:text-white transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </div>
  );
}
