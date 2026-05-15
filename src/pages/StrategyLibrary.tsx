import React from 'react';
import { 
  BookOpen, Play, Target, Award, 
  CheckCircle2, Clock, ChevronRight, 
  Search, Filter, Star, ArrowRight,
  Shield, Zap, Brain, TrendingUp,
  Activity, BarChart3, Layers, Monitor,
  Smartphone, MousePointer2, ExternalLink,
  ShieldCheck, CheckCircle, Wallet, Globe, Sparkles, Trophy, Users, MoveRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button, Badge, Card } from '@/src/components/UI';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

// Asset imports
import heroBg from '../bull-hero.png';

export default function StrategyLibrary() {
  const [activeFilter, setActiveFilter] = React.useState<'all' | 'completed'>('all');

  const stats = [
    { icon: Shield, count: '8', label: 'Strategy Stages', color: 'text-blue-500' },
    { icon: Layers, count: '50+', label: 'In-depth Lessons', color: 'text-gold' },
    { icon: Activity, count: 'Practical', label: 'Real Market Examples', color: 'text-emerald-500' },
    { icon: Award, count: 'Certificate', label: 'Upon Completion', color: 'text-gold' }
  ];

  const roadmapStages = [
    {
      id: '01',
      icon: Brain,
      title: 'Mindset & Foundation',
      desc: 'Build the right trading mindset and a strong foundation for long-term success.',
      learnItems: ['Trading Mindset & Psychology', 'Discipline & Patience', 'Market Basics & Key Concepts'],
      lessons: '5 Lessons',
      time: '45 min',
      status: 'Continue'
    },
    {
      id: '02',
      icon: Target,
      title: 'How to Win / Loss',
      desc: 'Learn what makes traders win consistently and how to minimize losses.',
      learnItems: ['Probability & Expectancy', 'Win Rate vs Risk Reward', 'Managing Losing Streaks'],
      lessons: '6 Lessons',
      time: '60 min',
      status: 'Continue'
    },
    {
      id: '03',
      icon: TrendingUp,
      title: 'Getting Rich in Trading',
      desc: 'Master wealth building strategies and compound your trading profits.',
      learnItems: ['High Probability Setups', 'Scaling & Compounding', 'Long Term Wealth Creation'],
      lessons: '7 Lessons',
      time: '75 min',
      status: 'Continue'
    },
    {
      id: '04',
      icon: Layers,
      title: 'How to be Stable in Stock',
      desc: 'Build consistency and stability in your trading performance.',
      learnItems: ['Consistency Over Profits', 'Routine & Process', 'Emotional Control'],
      lessons: '6 Lessons',
      time: '60 min',
      status: 'Start Now'
    },
    {
      id: '05',
      icon: Shield,
      title: 'Risk Management',
      desc: 'Protect your capital and manage risk like professional traders.',
      learnItems: ['Position Sizing', 'Stop Loss Strategies', 'Risk to Reward Ratio'],
      lessons: '5 Lessons',
      time: '50 min',
      status: 'Start Now'
    },
    {
      id: '06',
      icon: Activity,
      title: 'Technical Analysis Mastery',
      desc: 'Master charts, indicators and price action like a pro.',
      learnItems: ['Price Action', 'Indicators & Oscillators', 'Trend Analysis'],
      lessons: '8 Lessons',
      time: '90 min',
      status: 'Start Now'
    },
    {
      id: '07',
      icon: Zap,
      title: 'Advanced Strategies',
      desc: 'Advanced trading strategies for different market conditions.',
      learnItems: ['Breakout Strategies', 'Swing Trading', 'Option Strategies'],
      lessons: '7 Lessons',
      time: '80 min',
      status: 'Start Now'
    },
    {
      id: '08',
      icon: ShieldCheck,
      title: 'Trading Psychology Mastery',
      desc: 'Master your emotions and become a mentally strong trader.',
      learnItems: ['Emotional Intelligence', 'Overcoming Fear & Greed', 'Peak Performance'],
      lessons: '4 Lessons',
      time: '40 min',
      status: 'Start Now'
    }
  ];

  const propFirms = [
    { name: 'FTMO', rating: 4.8, funding: 'Up to $200K Funding' },
    { name: 'The 5%ers', rating: 4.7, funding: 'Up to $4M Funding' },
    { name: 'Funding Pips', rating: 4.6, funding: 'Up to $200K Funding' },
    { name: 'TOPSTEP', rating: 4.8, funding: 'Up to $150K Funding' },
    { name: 'Turtle Trader', rating: 4.5, funding: 'Up to $100K Funding' }
  ];

  const tools = [
    { name: 'TradingView', rating: 4.9, desc: 'Charting & Analysis', color: 'blue' },
    { name: 'ZERODHA', rating: 4.7, desc: 'Brokerage', color: 'sky' },
    { name: 'upstox', rating: 4.5, desc: 'Brokerage', color: 'purple' },
    { name: 'Sensibull', rating: 4.8, desc: 'Options Trading', color: 'orange' },
    { name: 'tickertape', rating: 4.6, desc: 'Market Analysis', color: 'white' },
    { name: 'Delta Exchange', rating: 4.5, desc: 'Crypto Trading', color: 'emerald' }
  ];

  return (
    <div className="bg-bg-main min-h-screen text-white font-sans pt-28 overflow-hidden selection:bg-gold/30">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 py-12 lg:pt-20 lg:pb-12 relative overflow-hidden max-md:pt-24 max-md:pb-16">
          {/* Background Bull Graphic - Hero Only */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <img src={heroBg} alt="Bull Graphic" className="w-full h-full object-cover object-right opacity-60 max-md:object-[70%_center] max-md:opacity-40" />
            {/* Mobile Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80 md:hidden" />
            <div className="absolute inset-0 bg-linear-to-r from-bg-main via-bg-main/50 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-bg-main via-transparent to-transparent" />
          </div>

          <div className="max-w-[1700px] mx-auto relative z-10">
            <div className="space-y-6 max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl lg:text-6xl font-display font-black tracking-tighter uppercase leading-none"
              >
                Trading <span className="text-gold">Strategies</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-xl font-medium leading-relaxed"
              >
                Master the art of trading with our proven institutional-grade strategies. Follow our step-by-step roadmap to financial independence.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-8 md:gap-12 pt-8 max-md:grid max-md:grid-cols-2"
              >
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gold shrink-0">
                      <s.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-lg md:text-xl font-black leading-none">{s.count}</p>
                      <p className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">{s.label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Roadmap & Content Section */}
        <section className="px-6 py-12 lg:py-20 relative bg-bg-main">
          <div className="max-w-[1700px] mx-auto">


            {/* Strategy Roadmap */}
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="space-y-2">
                  <h2 className="text-5xl lg:text-5xl font-black uppercase tracking-tight">Strategy Roadmap</h2>
                  <p className="text-gray-500 font-medium text-lg italic">Step-by-step journey to institutional trading mastery</p>
                </div>
                <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl">
                  <button 
                    onClick={() => setActiveFilter('all')}
                    className={cn(
                      "px-8 py-3.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all",
                      activeFilter === 'all' ? "bg-gold text-black shadow-[0_10px_30px_rgba(244,197,66,0.3)]" : "text-gray-500 hover:text-white"
                    )}
                  >
                    All Stages
                  </button>
                  <button 
                    onClick={() => setActiveFilter('completed')}
                    className={cn(
                      "px-8 py-3.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all",
                      activeFilter === 'completed' ? "bg-gold text-black shadow-[0_10px_30px_rgba(244,197,66,0.3)]" : "text-gray-500 hover:text-white"
                    )}
                  >
                    Completed (0/8)
                  </button>
                </div>
              </div>

              {/* Unified Institutional Design Roadmap */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {roadmapStages.map((stage, i) => (
                  <motion.div 
                    key={stage.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative"
                  >
                    {/* Stage Number Background */}
                    <div className="absolute -top-10 -left-6 text-[12rem] font-black text-white/2 pointer-events-none select-none transition-all group-hover:text-gold/3">
                      {stage.id}
                    </div>

                    <div className="relative z-10 bg-linear-to-b from-white/5 to-transparent rounded-[2rem] border border-white/5 p-10 h-full flex flex-col hover:border-gold/30 hover:bg-white/7 transition-all duration-500 shadow-2xl min-h-[500px]">
                      <div className="flex items-center gap-6 mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-bg-main border border-gold/20 flex items-center justify-center text-gold shadow-[0_0_30px_rgba(244,197,66,0.1)] group-hover:scale-110 group-hover:border-gold transition-all duration-500">
                          <stage.icon className="w-8 h-8" />
                        </div>
                        <div className="h-px flex-1 bg-linear-to-r from-gold/30 to-transparent" />
                      </div>

                      <div className="space-y-4 mb-8">
                        <h3 className="text-2xl font-black uppercase tracking-tight text-white leading-none">{stage.title}</h3>
                        <p className="text-gray-500 text-sm font-medium leading-relaxed italic line-clamp-2">{stage.desc}</p>
                      </div>

                      <div className="flex-1 space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">Learning Objectives</p>
                        <ul className="space-y-3">
                          {stage.learnItems.map((item, j) => (
                            <li key={j} className="flex items-center gap-3 text-xs font-bold text-gray-400">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-500/50" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-8 mt-10 border-t border-white/5 flex items-center justify-between">
                        <div className="flex flex-col gap-1 text-gray-500 text-[10px] font-black uppercase tracking-widest">
                           <div className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" /> {stage.lessons}</div>
                           <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {stage.time}</div>
                        </div>
                        <Button 
                          to="/login"
                          className="h-12 px-8 rounded-xl bg-gold hover:bg-gold/90 text-black font-black text-[10px] uppercase tracking-widest transition-all hover:scale-105 active:scale-95 border-none shadow-[0_10px_20px_rgba(244,197,66,0.1)]"
                        >
                          {stage.status}
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Funded Accounts Section - Moved inside the same flow but distinct section */}
          <div className="max-w-[1700px] mx-auto py-24 border-t border-white/5 mt-24">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="space-y-3">
                <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">Funded Accounts</h2>
                <p className="text-gray-500 font-medium text-lg">Trade with firm capital and keep up to 90% of profits.</p>
              </div>
              <Link to="/funded-accounts">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black text-[10px] h-16 px-10 rounded-2xl flex items-center gap-4 uppercase tracking-widest shadow-2xl">
                  Explore Funded Accounts <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
              <div className="flex flex-col justify-center gap-6 text-gray-500">
                {[
                  { icon: <Wallet className="w-5 h-5" />, label: 'Up to $400K', sub: 'Funding Limit' },
                  { icon: <TrendingUp className="w-5 h-5" />, label: 'Up to 90%', sub: 'Profit Split' },
                  { icon: <Users className="w-5 h-5" />, label: 'Multiple Programs', sub: 'Scalability' },
                  { icon: <Clock className="w-5 h-5" />, label: 'Payouts in 24H', sub: 'Processing' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-500 border border-white/5">{item.icon}</div>
                    <div>
                      <p className="text-xs font-black text-white">{item.label}</p>
                      <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {propFirms.map((firm, i) => (
                <div key={i} className="bg-bg-secondary rounded-[2.5rem] border border-white/5 p-10 flex flex-col items-center justify-center text-center space-y-6 group hover:border-gold/40 hover:bg-white/2 transition-all duration-500 shadow-2xl">
                   <div className="w-20 h-20 rounded-2xl bg-white/3 flex items-center justify-center mb-2 overflow-hidden border border-white/10 group-hover:border-gold/20 transition-all">
                      <p className="text-2xl font-black text-white opacity-40 group-hover:opacity-100 transition-opacity">{firm.name[0]}</p>
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-xl font-black text-white uppercase tracking-tight">{firm.name}</h4>
                      <div className="flex items-center justify-center gap-1.5 text-gold">
                          {[...Array(5)].map((_, j) => <Star key={j} className={cn("w-3.5 h-3.5 fill-gold", j === 4 && "opacity-20")} />)}
                      </div>
                   </div>
                   <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest">{firm.funding}</p>
                </div>
              ))}


            </div>
          </div>

          {/* Tools Section */}
          <div className="max-w-[1700px] mx-auto py-24">
            <div className="flex justify-between items-end mb-16">
              <div className="space-y-3">
                <h2 className="text-4xl font-black uppercase tracking-tight">Professional Toolset</h2>
                <p className="text-gray-500 font-medium text-lg">Elite applications used by our institutional traders</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {tools.map((tool, i) => (
                <div key={i} className="bg-bg-main rounded-[2rem] border border-white/5 p-10 space-y-6 hover:border-gold/30 hover:bg-white/2 transition-all duration-500 group">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-gold/20 transition-all">
                      <Monitor className="w-7 h-7 text-gray-600 group-hover:text-gold transition-colors" />
                   </div>
                   <div className="space-y-2">
                      <h4 className="text-lg font-black text-white group-hover:text-gold transition-colors uppercase tracking-tight leading-none">{tool.name}</h4>
                      <div className="flex items-center gap-1">
                         {[...Array(5)].map((_, j) => <Star key={j} className={cn("w-2.5 h-2.5 fill-gold", j === 4 && "opacity-20")} />)}
                      </div>
                   </div>
                   <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest leading-relaxed">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification CTA */}
        <section className="px-6 pb-16 lg:pb-20">
          <div className="max-w-[1700px] mx-auto">
            <div className="bg-linear-to-br from-gold/20 via-gold/5 to-transparent rounded-[3rem] border border-gold/20 p-10 lg:p-16 relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
               <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20 relative z-10">
                  <div className="space-y-8">
                    <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center shadow-[0_15px_40px_rgba(244,197,66,0.3)]">
                      <Award className="w-8 h-8 text-black" />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-4xl lg:text-6xl font-display font-black tracking-tighter uppercase leading-none">
                        Institutional <br/><span className="text-gold">Certification</span>
                      </h2>
                      <p className="text-gray-400 text-lg lg:text-xl font-medium leading-relaxed max-w-xl italic">
                        Showcase your expertise with our industry-recognized credentials and accelerate your professional trading career.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-bg-main/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-10 space-y-6 shadow-inner">
                      <div className="flex justify-between items-end">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Curriculum Progress</p>
                          <p className="text-xs font-bold text-gray-400 italic">Stage 01 of 08 Active</p>
                        </div>
                        <p className="text-3xl font-black text-gold">12%</p>
                      </div>
                      <div className="h-3 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '12%' }}
                          transition={{ duration: 2, ease: "circOut" }}
                          className="h-full bg-linear-to-r from-gold to-[#FFD700] rounded-full shadow-[0_0_20px_rgba(244,197,66,0.5)]" 
                        />
                      </div>
                    </div>
                    <Button to="/login" className="w-full bg-gold hover:bg-gold/90 text-black font-black text-xs h-16 rounded-2xl shadow-[0_20px_40px_rgba(244,197,66,0.15)] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-95 border-none">
                      Explore Certification Path <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
