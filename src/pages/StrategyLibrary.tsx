import React from 'react';
import { 
  BookOpen, Play, Target, Award, 
  CheckCircle2, Clock, ChevronRight, 
  Search, Filter, Star, ArrowRight,
  Shield, Zap, Brain, TrendingUp,
  Activity, BarChart3, Layers, Monitor,
  Smartphone, MousePointer2, ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button, Badge, Card } from '@/src/components/UI';
import { cn } from '@/src/lib/utils';

// Asset imports
import heroBg from '../bull-hero.png';

export default function StrategyLibrary() {
  const stats = [
    { icon: Shield, count: '8', label: 'Strategy Stages', color: 'text-[#00A3FF]', bgColor: 'bg-[#00A3FF]/10', borderColor: 'border-[#00A3FF]/20' },
    { icon: Layers, count: '50+', label: 'In-depth Lessons', color: 'text-[#F4C542]', bgColor: 'bg-[#F4C542]/10', borderColor: 'border-[#F4C542]/20' },
    { icon: Activity, count: 'Practical', label: 'Real Market Examples', color: 'text-emerald-500', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/20' },
    { icon: Award, count: 'Certificate', label: 'Upon Completion', color: 'text-[#F4C542]', bgColor: 'bg-[#F4C542]/10', borderColor: 'border-[#F4C542]/20' }
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
      progress: 75,
      status: 'Continue',
      color: 'blue'
    },
    {
      id: '02',
      icon: Target,
      title: 'How to Win / Loss',
      desc: 'Learn what makes traders win consistently and how to minimize losses.',
      learnItems: ['Probability & Expectancy', 'Win Rate vs Risk Reward', 'Managing Losing Streaks'],
      lessons: '6 Lessons',
      time: '60 min',
      progress: 40,
      status: 'Continue',
      color: 'emerald'
    },
    {
      id: '03',
      icon: TrendingUp,
      title: 'Getting Rich in Trading',
      desc: 'Master wealth building strategies and compound your trading profits.',
      learnItems: ['High Probability Setups', 'Scaling & Compounding', 'Long Term Wealth Creation'],
      lessons: '7 Lessons',
      time: '75 min',
      progress: 20,
      status: 'Continue',
      color: 'orange'
    },
    {
      id: '04',
      icon: Layers,
      title: 'How to be Stable in Stock',
      desc: 'Build consistency and stability in your trading performance.',
      learnItems: ['Consistency Over Profits', 'Routine & Process', 'Emotional Control'],
      lessons: '6 Lessons',
      time: '60 min',
      progress: 0,
      status: 'Start Now',
      color: 'purple'
    },
    {
      id: '05',
      icon: Shield,
      title: 'Risk Management',
      desc: 'Protect your capital and manage risk like professional traders.',
      learnItems: ['Position Sizing', 'Stop Loss Strategies', 'Risk to Reward Ratio'],
      lessons: '5 Lessons',
      time: '50 min',
      progress: 0,
      status: 'Start Now',
      color: 'red'
    },
    {
      id: '06',
      icon: Activity,
      title: 'Technical Analysis Mastery',
      desc: 'Master charts, indicators and price action like a pro.',
      learnItems: ['Price Action', 'Indicators & Oscillators', 'Trend Analysis'],
      lessons: '8 Lessons',
      time: '90 min',
      progress: 0,
      status: 'Start Now',
      color: 'cyan'
    },
    {
      id: '07',
      icon: Zap,
      title: 'Advanced Strategies',
      desc: 'Advanced trading strategies for different market conditions.',
      learnItems: ['Breakout Strategies', 'Swing Trading', 'Option Strategies'],
      lessons: '7 Lessons',
      time: '80 min',
      progress: 0,
      status: 'Start Now',
      color: 'pink'
    },
    {
      id: '08',
      icon: Brain,
      title: 'Trading Psychology Mastery',
      desc: 'Master your emotions and become a mentally strong trader.',
      learnItems: ['Emotional Intelligence', 'Overcoming Fear & Greed', 'Peak Performance'],
      lessons: '4 Lessons',
      time: '40 min',
      progress: 0,
      status: 'Start Now',
      color: 'lime'
    }
  ];

  const tradingTools = [
    { name: 'TradingView', rating: '4.9', category: 'Charting & Analysis', logo: 'TV' },
    { name: 'ZERODHA', rating: '4.7', category: 'Brokerage', logo: 'Z' },
    { name: 'upstox', rating: '4.6', category: 'Brokerage', logo: 'U' },
    { name: 'Sensibull', rating: '4.8', category: 'Options Trading', logo: 'S' },
    { name: 'tickertape', rating: '4.6', category: 'Market Analysis', logo: 'T' },
    { name: 'Delta Exchange', rating: '4.5', category: 'Crypto Trading', logo: 'D' },
    { name: 'Fyers', rating: '4.6', category: 'Brokerage', logo: 'F' },
    { name: 'Angel One', rating: '4.4', category: 'Brokerage', logo: 'A' },
    { name: 'Trading Tick', rating: '4.7', category: 'Data Analysis', logo: 'TT' }
  ];

  const ToolLogo = ({ brand }: { brand: string }) => {
    switch (brand) {
      case 'F':
        return <div className="w-5 h-5 bg-[#2E7D32] rounded-sm flex items-center justify-center font-black text-white text-[8px]">F</div>;
      case 'A':
        return <div className="w-5 h-5 bg-[#1976D2] rounded-sm flex items-center justify-center font-black text-white text-[8px]">A</div>;
      case 'TT':
        return <Activity className="w-5 h-5 text-emerald-500" />;
      case 'TV':
        return (
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M4 17h2v-8h-2v8zm5 0h2v-11h-2v11zm5 0h2v-14h-2v14zm5 0h2v-8h-2v8z" className="opacity-40" />
            <path d="M4 17h16v2H4z" className="opacity-40" />
            <path d="M2 17h2v-3H2v3zm4 0h2v-6H6v6zm4 0h2V8h-2v9zm4 0h2V5h-2v12zm4 0h2V2h-2v15z" />
          </svg>
        );
      case 'Z':
        return (
          <div className="w-5 h-5 bg-[#387ED1] rounded-sm flex items-center justify-center">
             <div className="w-2 h-2 bg-[#0B1225] rounded-full" />
          </div>
        );
      case 'U':
        return <span className="text-[10px] font-black text-purple-500">upstox</span>;
      case 'S':
        return <Zap className="w-5 h-5 text-orange-500 fill-orange-500" />;
      case 'T':
        return (
          <div className="flex gap-0.5">
             <div className="w-1.5 h-3 bg-white" />
             <div className="w-1.5 h-3 bg-white/40" />
             <div className="w-1.5 h-3 bg-white" />
          </div>
        );
      case 'D':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5">
             <path d="M12 2L2 22h20L12 2z" className="fill-emerald-500" />
             <path d="M12 6L6 18h12L12 6z" className="fill-blue-500" />
          </svg>
        );
      default:
        return <Monitor className="w-5 h-5" />;
    }
  };

  const [activeFilter, setActiveFilter] = React.useState<'all' | 'completed'>('all');
  const [showAllTools, setShowAllTools] = React.useState(false);

  const getStageColor = (color: string) => {
    const maps: Record<string, any> = {
      blue: { text: 'text-blue-500', bg: 'bg-blue-500/10', dot: 'bg-blue-500', btn: 'bg-blue-500', border: 'border-blue-500/20' },
      emerald: { text: 'text-emerald-500', bg: 'bg-emerald-500/10', dot: 'bg-emerald-500', btn: 'bg-emerald-500', border: 'border-emerald-500/20' },
      orange: { text: 'text-orange-500', bg: 'bg-orange-500/10', dot: 'bg-orange-500', btn: 'bg-orange-500', border: 'border-orange-500/20' },
      purple: { text: 'text-purple-500', bg: 'bg-purple-500/10', dot: 'bg-purple-500', btn: 'bg-purple-500', border: 'border-purple-500/20' },
      red: { text: 'text-red-500', bg: 'bg-red-500/10', dot: 'bg-red-500', btn: 'bg-red-500', border: 'border-red-500/20' },
      cyan: { text: 'text-cyan-500', bg: 'bg-cyan-500/10', dot: 'bg-cyan-500', btn: 'bg-cyan-500', border: 'border-cyan-500/20' },
      pink: { text: 'text-pink-500', bg: 'bg-pink-500/10', dot: 'bg-pink-500', btn: 'bg-pink-500', border: 'border-pink-500/20' },
      lime: { text: 'text-lime-500', bg: 'bg-lime-500/10', dot: 'bg-lime-500', btn: 'bg-lime-500', border: 'border-lime-500/20' },
    };
    return maps[color] || maps.blue;
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white pt-24 pb-10">
      {/* Hero Section */}
      <section className="relative h-[320px] w-full overflow-hidden mb-12">
        <div className="absolute inset-0">
           <img src={heroBg} className="w-full h-full object-cover" alt="Strategies Hero" />
           <div className="absolute inset-0 bg-linear-to-r from-[#050816] via-[#050816]/70 to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-10 max-w-[1500px] h-full relative z-10 flex flex-col justify-center gap-8">
           <div className="space-y-3">
              <h1 className="text-5xl font-bold tracking-tight text-white">Trading Strategies</h1>
              <p className="text-gray-300 text-lg font-medium">
                 Master the art of trading with our proven strategies.
              </p>
           </div>

           <div className="w-full h-[1px] bg-white/5 max-w-4xl" />
           
           {/* Stats Row */}
           <div className="flex flex-wrap gap-12">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                   <div className={cn("w-12 h-12 rounded-xl border flex items-center justify-center transition-all group-hover:scale-110", s.bgColor, s.color, s.borderColor)}>
                      <s.icon className="w-6 h-6" />
                   </div>
                   <div className="space-y-0.5">
                      <p className="text-base font-bold text-white leading-none">{s.count}</p>
                      <p className="text-[11px] font-medium text-gray-500">{s.label}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-10 max-w-[1400px] space-y-20">
         {/* Roadmap Section */}
         <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
               <div className="space-y-2">
                  <h2 className="text-3xl font-black">Our Complete Strategy Roadmap</h2>
                  <p className="text-gray-500 text-sm font-medium">Step-by-step journey to trading mastery</p>
               </div>
               <div className="flex items-center gap-4 bg-white/5 p-1 rounded-xl border border-white/5">
                  <button 
                    onClick={() => setActiveFilter('all')}
                    className={cn(
                      "px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
                      activeFilter === 'all' ? "bg-[#00E5FF] text-black" : "text-gray-500 hover:text-white"
                    )}
                  >
                    All Stages
                  </button>
                  <button 
                    onClick={() => setActiveFilter('completed')}
                    className={cn(
                      "px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
                      activeFilter === 'completed' ? "bg-[#00E5FF] text-black" : "text-gray-500 hover:text-white"
                    )}
                  >
                    Completed
                  </button>
               </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {roadmapStages
                 .filter(stage => activeFilter === 'all' || stage.progress === 100)
                 .map((stage, idx) => {
                 const colors = getStageColor(stage.color);
                 return (
                 <Card key={stage.id} className="bg-[#0B1225]/40 border-white/5 p-6 rounded-3xl hover:bg-[#0B1225]/60 transition-all group relative overflow-hidden flex flex-col h-full">
                    <div className={cn("absolute top-0 right-0 w-24 h-24 blur-[50px] opacity-10", colors.bg)} />
                    
                    <div className="flex flex-col h-full space-y-6">
                       <div className="flex justify-between items-start">
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg",
                            colors.bg, colors.text
                          )}>
                             <stage.icon className="w-6 h-6" />
                          </div>
                          <span className={cn("text-3xl font-black opacity-10", colors.text)}>{stage.id}</span>
                       </div>

                       <div className="space-y-1.5">
                          <h3 className={cn("text-lg font-black leading-tight", colors.text)}>{stage.title}</h3>
                          <p className="text-gray-500 text-[11px] font-medium leading-relaxed line-clamp-2">{stage.desc}</p>
                       </div>

                       <div className="flex-1 space-y-3">
                          <p className={cn("text-[9px] font-black uppercase tracking-[0.2em]", colors.text)}>You'll Learn</p>
                          <ul className="space-y-2">
                             {stage.learnItems.map((item, j) => (
                               <li key={j} className="text-[11px] font-bold text-gray-400 flex items-center gap-2">
                                  <div className={cn("w-1 h-1 rounded-full", colors.dot)} /> <span className="line-clamp-1">{item}</span>
                                </li>
                             ))}
                          </ul>
                       </div>

                       <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                          <div className="space-y-0.5">
                             <p className="text-[11px] font-black text-white">{stage.lessons}</p>
                             <div className="flex items-center gap-1.5 text-gray-500">
                                <Clock className="w-3 h-3" />
                                <span className="text-[9px] font-bold">{stage.time}</span>
                             </div>
                          </div>

                          <Button className={cn(
                            "px-6 h-10 rounded-xl text-[9px] font-black uppercase tracking-widest text-black hover:opacity-90 transition-all",
                            colors.btn
                          )}>
                             {stage.status}
                          </Button>
                       </div>
                    </div>
                 </Card>
                 );
               })}
            </div>
         </div>

         {/* Apps & Tools Section */}
         <div className="space-y-6">
            <div className="space-y-8">
               <div className="space-y-2">
                  <h2 className="text-2xl font-black">Popular Trading Applications & Tools</h2>
                  <p className="text-gray-500 text-sm font-medium">Use the best tools used by professional traders</p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {(showAllTools ? tradingTools : tradingTools.slice(0, 6)).map((tool, i) => (
                    <Card key={i} className="bg-white/[0.01] border-white/5 p-5 rounded-xl hover:bg-white/[0.03] transition-all group cursor-pointer">
                       <div className="flex flex-col items-center text-center space-y-4">
                          <div className="flex items-center gap-2">
                             <ToolLogo brand={tool.logo} />
                             <span className="text-[13px] font-black text-white">{tool.name}</span>
                          </div>
                          
                          <div className="space-y-1">
                             <div className="flex items-center justify-center gap-1 text-[10px] text-[#F4C542] font-black">
                                <Star className="w-2.5 h-2.5 fill-current" />
                                <Star className="w-2.5 h-2.5 fill-current" />
                                <Star className="w-2.5 h-2.5 fill-current" />
                                <Star className="w-2.5 h-2.5 fill-current" />
                                <span className="text-white ml-1">{tool.rating}</span>
                             </div>
                             <p className="text-[10px] font-bold text-gray-500">{tool.category}</p>
                          </div>
                       </div>
                    </Card>
                  ))}
                  {!showAllTools && (
                    <Card 
                      onClick={() => setShowAllTools(true)}
                      className="bg-white/[0.01] border border-white/5 p-5 rounded-xl flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/[0.03] transition-all space-y-2"
                    >
                       <p className="text-[11px] font-black text-white/80">View All Tools</p>
                       <ArrowRight className="w-4 h-4 text-white/60 group-hover:translate-x-1 transition-transform" />
                    </Card>
                  )}
               </div>
            </div>

            {/* Certificate CTA */}
            <Card className="bg-[#0B1225]/40 border-white/5 p-8 rounded-2xl flex flex-col lg:flex-row items-center gap-10 overflow-hidden group">
               <div className="relative shrink-0 w-24 h-24 flex items-center justify-center">
                  {/* Background Shield/Diamond */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 w-16 h-16 bg-white/[0.03] rotate-45 border border-white/5 rounded-lg flex items-center justify-center">
                     <Target className="w-6 h-6 text-white/20 -rotate-45" />
                  </div>
                  
                  {/* Main Gold Certificate */}
                  <div className="relative w-14 h-18 bg-linear-to-b from-[#F4C542] to-[#D4A017] rounded-sm shadow-2xl flex flex-col items-center p-2 border border-white/20 group-hover:scale-110 transition-transform">
                     <div className="w-full h-[1px] bg-black/10 mt-2" />
                     <div className="w-full h-[1px] bg-black/10 mt-1" />
                     <div className="w-full h-[1px] bg-black/10 mt-1" />
                     <div className="mt-auto mb-1 relative">
                        <div className="w-6 h-6 rounded-full bg-[#F4C542] border-2 border-white/40 shadow-inner flex items-center justify-center">
                           <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                        <div className="absolute top-4 left-0 w-2 h-4 bg-[#F4C542] border-l border-white/20 origin-top -rotate-12" />
                        <div className="absolute top-4 right-0 w-2 h-4 bg-[#F4C542] border-r border-white/20 origin-top rotate-12" />
                     </div>
                  </div>
               </div>
               
               <div className="flex-1 space-y-2 text-center lg:text-left relative z-10">
                  <h3 className="text-xl font-black">Complete All Stages & Get Certified</h3>
                  <p className="text-gray-500 text-sm font-medium max-w-xl">
                     Showcase your trading expertise with our industry-recognized certificate and take your trading career to the next level.
                  </p>
               </div>

               <div className="hidden lg:block w-[1px] h-16 bg-white/5 mx-4" />

               <div className="flex flex-col lg:flex-row items-center gap-12 shrink-0">
                  <div className="w-32 space-y-2">
                     <p className="text-[10px] font-bold text-gray-500">Progress</p>
                     <p className="text-2xl font-black text-white">12%</p>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#F4C542] rounded-full" style={{ width: '12%' }} />
                     </div>
                  </div>
                  <Button className="px-10 h-12 bg-linear-to-r from-[#F4C542] to-[#FF9E0D] text-black font-black text-[11px] rounded-xl shadow-xl shadow-[#F4C542]/10 uppercase tracking-tight">
                     View Certificate Path
                  </Button>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
}
