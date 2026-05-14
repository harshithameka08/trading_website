import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, TrendingUp, BarChart2, Shield, Zap, Globe, MessageSquare, Cpu, Search, Layers, Award, Target, Users, CheckCircle2, Star, ChevronDown, Plus, Minus, Clock, Instagram, Linkedin, Youtube, Send, Activity, MicOff, VideoOff, Monitor, Hand, MoreHorizontal, Check, Mail, Phone, MapPin, Video, PlayCircle, BookOpen, Wifi, Calendar, ChevronRight, Trophy, Radio } from 'lucide-react';
import { Button, Card, Badge } from '@/src/components/UI';
import { cn } from '@/src/lib/utils';

// Image Imports (Using generated assets)
import heroo from '../heroo.png';
import traderWorkstation from '../trader_workstation_1778565817961.png';
import aboutImage from '../aboutimage.png';
import liveChart from '../live_session_new.png';
import courseTechnical from '../course_technical.png';
import courseIntraday from '../course_intraday.png';
import courseOptions from '../course_options.png';
import courseSwing from '../course_swing.png';
import coursePriceAction from '../course_price_action.png';
import coursePsychology from '../course_psychology.png';
import avatar1 from '../avatar_1.png';
import avatar2 from '../avatar_2.png';
import editImage from '../editimage.png';
import avatar3 from '../avatar_3.png';
import avatar4 from '../avatar_4.png';
import avatar5 from '../avatar_5.png';
import avatar6 from '../avatar_6.png';

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden bg-[#020617] text-white selection:bg-gold/30">
      <HeroSection />
      <MarketTicker />
      <StatsSection />
      <AboutSection />
      <CoursesSection />
      <LiveExperienceSection />
      <StrategySection />
      <FAQSection />
      <ContactBannerSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-16 overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src={heroo} 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center lg:object-right opacity-80" 
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#020617] via-[#020617]/80 to-transparent lg:w-2/3" />
        <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-sans font-black tracking-tight leading-[1.1] uppercase">
              MASTER TRADING.<br />
              CREATE <span className="text-gold">FINANCIAL</span><br />
              <span className="text-gold">FREEDOM.</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed font-medium">
              Learn proven trading strategies, live market insights, and professional techniques from experienced traders. Start your journey from learning to consistently earning.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <Button to="/courses" size="lg" className="bg-gold hover:bg-gold/90 text-black font-bold px-8 rounded-lg flex items-center gap-3 h-12 shadow-[0_0_20px_rgba(255,215,0,0.20)]">
              Explore Courses <ArrowRight className="w-4 h-4" />
            </Button>
            <Button to="/live-classes" variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/10 px-8 rounded-lg flex items-center gap-3 h-12 bg-white/5 backdrop-blur-sm">
              Join Live Class <Video className="w-4 h-4 text-gray-300" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative lg:h-[500px] flex items-center justify-center"
        >
          <div className="absolute top-[20%] right-[10%] z-20 px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-xl shadow-2xl animate-float backdrop-blur-xl flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-500" />
             </div>
             <div>
                <div className="text-lg font-black text-green-500 leading-none">+23.68%</div>
                <div className="text-[10px] text-gray-400 font-medium">This Month Profit</div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { icon: Users, num: 10, suffix: 'K+', label: 'Active Students' },
    { icon: BookOpen, num: 50, suffix: '+', label: 'Courses' },
    { icon: Radio, num: 500, suffix: '+', label: 'Live Sessions' },
    { icon: Trophy, num: 85, suffix: '%', label: 'Success Rate' },
    { icon: Calendar, num: 3, suffix: '+ Years', label: 'Of Experience' },
  ];

  return (
    <section className="py-12 bg-[#020617] border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="bg-[#050b1a] border border-white/5 rounded-2xl flex flex-wrap justify-between items-center py-8 px-10 gap-y-8">
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-1.5 flex-1 min-w-[120px]">
                <s.icon className="w-7 h-7 text-primary opacity-90 mb-1" strokeWidth={1.5} />
                <h3 className="text-[28px] font-bold text-white tracking-tight leading-none">
                  <AnimatedNumber end={s.num} suffix={s.suffix} />
                </h3>
                <p className="text-[13px] text-gray-400">{s.label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-0.5 h-12 bg-slate-400/40"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ end, suffix }: { end: number, suffix: string }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(ease * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function AboutSection() {
  return (
    <section className="relative pt-8 pb-10 px-6 md:px-10 overflow-hidden min-h-[500px] flex items-center bg-[#020617]">
      <div className="absolute inset-0 z-0">
        <img src={aboutImage} alt="About Us Background" className="w-full h-full object-cover object-center lg:object-right opacity-50" />
        <div className="absolute inset-0 bg-linear-to-r from-[#020617] via-[#020617]/90 to-transparent lg:w-2/3" />
        <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 pr-0 lg:pr-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <Activity className="w-3.5 h-3.5 text-primary" />
               <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">ABOUT US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-white leading-[1.1] tracking-tight drop-shadow-lg">
              Empowering <span className="text-primary">Traders</span><br />
              Worldwide
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium drop-shadow-md">
              TeamUS 369 is built by professional traders with years of real market experience. Our mission is to educate, guide, and help traders build the skills and mindset to achieve consistent profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
            {[
              'Real Market Experience', 'Proven Strategies', 
              'Live Market Support', 'Community of Winners'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-gold/50 flex items-center justify-center shrink-0 bg-[#020617]/50 backdrop-blur-sm">
                  <Activity className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
                </div>
                <span className="text-gray-200 text-sm font-medium drop-shadow-md">{item}</span>
              </div>
            ))}
          </div>

          <Button to="/about" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm rounded-xl px-6 h-11 text-xs font-medium flex items-center gap-2 mt-6">
            Know More About Us <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="hidden lg:block relative h-full"></div>
      </div>
    </section>
  );
}

function CoursesSection() {
  const allCourses = [
    { id: 1, title: 'Price Action Mastery', duration: '12 Hours', desc: 'Learn advanced price action concepts and trading strategies.', topics: ['Price Action Basics', 'Support & Resistance', 'Market Structure', 'Real Chart Examples'], badge: 'BESTSELLER', badgeColor: 'bg-red-500 text-black', image: coursePriceAction },
    { id: 2, title: 'Scalping Strategy', duration: '8 Hours', desc: 'Master the art of scalping and make consistent profits.', topics: ['Scalping Techniques', 'Entry & Exit Rules', 'Risk Management', 'Live Scalping Examples'], badge: 'POPULAR', badgeColor: 'bg-primary text-black', image: courseIntraday },
    { id: 3, title: 'Swing Trading Blueprint', duration: '10 Hours', desc: 'Capture big moves in the market with swing trading.', topics: ['Trend Analysis', 'Swing Strategies', 'Trade Management', 'Position Sizing'], badge: 'TRENDING', badgeColor: 'bg-green-500 text-black', image: courseSwing },
    { id: 4, title: 'Options Trading', duration: '14 Hours', desc: 'Learn option strategies and maximize your returns.', topics: ['Options Basics', 'Greeks & Strategies', 'Risk Control', 'Live Option Trades'], badge: 'ADVANCED', badgeColor: 'bg-gold text-black', image: courseOptions },
    { id: 5, title: 'Institutional Trading', duration: '15 Hours', desc: 'Trade like the big players using SMC and ICT concepts.', topics: ['Order Blocks', 'Liquidity Runs', 'Fair Value Gaps', 'Market Manipulation'], badge: 'PREMIUM', badgeColor: 'bg-purple-500 text-white', image: courseTechnical },
    { id: 6, title: 'Advanced Psychology', duration: '6 Hours', desc: 'Master your emotions and build the professional mindset.', topics: ['Discipline', 'Fear & Greed', 'Patience', 'Risk Psychology'], badge: 'ESSENTIAL', badgeColor: 'bg-blue-500 text-white', image: coursePsychology },
    { id: 7, title: 'Forex Fundamentals', duration: '10 Hours', desc: 'Complete guide to understanding the global currency markets.', topics: ['Currency Pairs', 'Economic Indicators', 'Central Banks', 'Market Sessions'], badge: 'FOUNDATION', badgeColor: 'bg-emerald-500 text-black', image: courseSwing },
    { id: 8, title: 'Crypto Trading Masterclass', duration: '12 Hours', desc: 'Master the volatile crypto markets with proven techniques.', topics: ['Bitcoin Analysis', 'DeFi Trading', 'Altcoin Selection', 'Crypto Risk Control'], badge: 'TRENDING', badgeColor: 'bg-orange-500 text-white', image: courseIntraday },
  ];

  const displayedCourses = allCourses.slice(0, 4);

  return (
    <section className="pt-2 pb-10 px-6 md:px-10 bg-[#020617]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">POPULAR COURSES</span>
            <h2 className="text-3xl md:text-4xl font-sans font-black text-white">
              Our Best <span className="text-gold">Courses</span>
            </h2>
          </div>
          <Link 
            to="/courses#featured-courses"
            className="border-white/20 text-white hover:bg-white/10 rounded-lg px-6 h-10 text-xs font-bold flex items-center gap-2 transition-colors border"
          >
            View All Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedCourses.map((c, i) => (
            <div key={i} className="flex flex-col rounded-xl bg-[#050b1a] border border-white/5 overflow-hidden group hover:border-white/10 transition-all shadow-xl">
               <div className="relative h-[150px] overflow-hidden bg-gray-900 p-4">
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#050b1a] opacity-90 z-10" />
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500 mix-blend-lighten" />
                  <div className={cn("absolute top-4 left-4 z-20 px-3 py-1 text-[9px] font-black uppercase rounded-full", c.badgeColor)}>
                     {c.badge}
                  </div>
               </div>
               
               <div className="p-5 flex flex-col flex-1 space-y-4 -mt-6 z-20 relative">
                  <div>
                     <h3 className="text-[15px] font-bold text-white mb-2 leading-tight">{c.title}</h3>
                     <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
                        <Clock className="w-3.5 h-3.5 text-gold" /> {c.duration}
                     </div>
                  </div>
                  
                  <p className="text-[11px] text-gray-400 leading-relaxed min-h-[35px]">{c.desc}</p>
                  
                  <div className="flex-1">
                    <p className="text-[11px] font-bold text-white mb-3">What you'll learn:</p>
                    <div className="grid grid-cols-2 gap-x-1.5 gap-y-3">
                      {c.topics.map((t, j) => (
                        <div key={j} className="flex items-start gap-1 text-[10px] text-gray-400 font-medium">
                           <Check className="w-3 h-3 text-gold shrink-0 mt-0.5" />
                           <span className="leading-tight whitespace-nowrap tracking-tight">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-auto flex items-center justify-between border-t border-white/5">
                    <Button to={`/course/${c.id}`} className="bg-gold hover:bg-gold/90 text-black font-bold px-4 py-2 rounded h-auto text-[11px]">
                      Enroll Now
                    </Button>
                    <Link to={`/course/${c.id}`}>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black font-bold px-4 py-2 rounded h-auto text-[11px] transition-colors">
                        View Course
                      </Button>
                    </Link>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveExperienceSection() {
  return (
    <section className="pt-10 pb-10 px-6 md:px-10 bg-[#020617] border-y border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="space-y-2 mb-12">
          <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">LIVE SESSION</span>
          <h2 className="text-3xl md:text-4xl font-sans font-black text-white flex flex-wrap items-center gap-x-2">
            <div className="relative inline-block mr-1">
              Join Our
              <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-white rounded-full"></div>
            </div>
            <span className="text-gold">Live</span> <span className="text-primary">Trading Sessions</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
          <div className="relative rounded-xl overflow-hidden bg-[#050b1a] aspect-video border border-white/10 shadow-2xl group p-1 cursor-pointer">
             <div className="relative w-full h-full rounded-lg overflow-hidden">
               <img src={liveChart} alt="Live Session" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 bg-red-600 rounded text-[9px] font-bold text-white uppercase tracking-wider z-30">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE
               </div>
               <div className="absolute inset-0 flex bg-black/20 group-hover:bg-black/30 transition-all duration-500 z-10">
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#020617] via-[#020617]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 z-20">
                     <Play className="w-5 h-5 fill-current ml-1" />
                  </div>
                  <div className="absolute bottom-12 right-6 grid grid-cols-2 gap-x-6 gap-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                     {[
                       { icon: TrendingUp, title: 'Live Market Analysis', color: 'text-gold' },
                       { icon: Calendar, title: 'Real-time Trading', color: 'text-gold' },
                       { icon: MessageSquare, title: 'Q&A with Experts', color: 'text-primary' },
                       { icon: MessageSquare, title: 'Live Chat Support', color: 'text-gold' },
                     ].map((f, i) => (
                       <div key={i} className="flex items-center gap-3 text-gray-300">
                          <div className={cn("w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0", f.color)}>
                            <f.icon className="w-4 h-4" strokeWidth={2} />
                          </div>
                          <span className="text-[11px] font-bold text-white whitespace-nowrap">{f.title}</span>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="absolute bottom-4 left-4 flex items-center gap-3 z-30">
                  <Play className="w-4 h-4 text-white fill-current group-hover:text-gold transition-colors" />
                  <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
                  <span className="text-white/80 text-[10px] font-medium ml-2">08:45 / 09:23</span>
               </div>
               <div className="absolute bottom-4 right-4 flex items-center gap-3 text-white/80 z-30">
                  <Wifi className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                  <Monitor className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
               </div>
             </div>
          </div>

          <div className="bg-[#050b1a] border border-white/5 rounded-2xl p-8 relative overflow-hidden shadow-2xl lg:ml-auto w-full max-w-[380px]">
             <span className="text-[11px] text-gold font-medium tracking-wide">Upcoming Live Session</span>
             <h3 className="text-[22px] font-bold text-white mt-1 mb-6 relative inline-block">
               Live Market Analysis
               <div className="absolute -bottom-2 left-0 w-6 h-[2px] bg-gray-500 rounded-full"></div>
             </h3>
             <div className="space-y-4 mb-8 mt-4">
               <div className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                  <Calendar className="w-4 h-4 text-gold" /> 25 May, 2024
               </div>
               <div className="flex items-center gap-3 text-gray-300 text-sm font-medium">
                  <Clock className="w-4 h-4 text-gold" /> 08:00 PM IST
               </div>
             </div>
             <Button to="/live-classes" className="w-full bg-gold hover:bg-gold/90 text-black font-bold h-12 rounded-lg flex items-center justify-between px-5 mb-6 transition-all">
                <span>Join Live Session</span> <ArrowRight className="w-4 h-4" />
             </Button>
             <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                   {[avatar1, avatar2, avatar3, avatar4].map((av, i) => (
                     <div key={i} className="w-7 h-7 rounded-full border border-[#050b1a] overflow-hidden">
                        <img src={av} alt="user" className="w-full h-full object-cover grayscale opacity-80" />
                     </div>
                   ))}
                </div>
                <span className="text-[10px] text-gray-500 font-medium tracking-wide">200+ People Registered</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StrategySection() {
  const steps = [
    { num: '1', title: 'Learn The Basics', desc: 'Build a strong foundation in trading concepts and market understanding.', icon: BookOpen },
    { num: '2', title: 'Develop Strategy', desc: 'Create and test your own trading strategy with discipline.', icon: Layers },
    { num: '3', title: 'Risk Management', desc: 'Protect your capital with proper risk management techniques.', icon: Shield },
    { num: '4', title: 'Stay Consistent', desc: 'Stay patient, follow your plan, and be consistent for long-term success.', icon: Target },
  ];

  return (
    <section className="pt-10 pb-10 px-6 md:px-10 bg-[#020617]">
      <div className="max-w-[1400px] mx-auto">
        <div className="space-y-2 mb-16">
          <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">4 STEPS</span>
          <h2 className="text-3xl md:text-4xl font-sans font-black text-white">
            4 Steps To <span className="text-gold">Win</span> In Trading
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[40px] left-10 right-10 h-px bg-white/5 border-t border-dashed border-white/20" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative flex flex-col sm:flex-row lg:flex-col gap-6 group">
                <div className="relative shrink-0 self-start lg:self-center">
                  <div className="w-20 h-20 rounded-2xl bg-[#050b1a] border border-white/10 flex flex-col items-center justify-center relative z-10 group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors shadow-xl">
                    <s.icon className={cn("w-6 h-6 mb-1", i === 0 ? "text-primary" : "text-gold")} />
                    <span className="text-[10px] font-black text-gray-500">{s.num}</span>
                  </div>
                  {i < steps.length - 1 && (
                     <div className="hidden lg:flex absolute top-1/2 -right-8 -translate-y-1/2 z-20 text-white/20 group-hover:text-primary/50 transition-colors">
                        <ChevronRight className="w-6 h-6" />
                     </div>
                  )}
                </div>
                <div className="lg:text-center mt-2 lg:mt-6">
                  <h4 className="text-lg font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium px-0 lg:px-4">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'Who are these courses for?', a: 'Our courses are designed for beginners looking to start their journey, as well as experienced traders wanting to refine their strategies.' },
    { q: 'Will I get lifetime access to recordings?', a: 'Yes, once you enroll, you receive lifetime access to all course materials and recorded live sessions.' },
    { q: 'Do I need any prior trading experience?', a: 'No prior experience is necessary. We cover everything from the absolute basics to advanced trading concepts.' },
    { q: 'Is there any refund policy?', a: 'Yes, we offer a 7-day money-back guarantee if you are not satisfied with the course content.' },
    { q: 'How are the live classes conducted?', a: 'Live classes are conducted via interactive webinars where you can ask questions and see real-time market analysis.' },
    { q: 'How can I contact support?', a: 'You can reach out to our support team 24/7 via the live chat on your dashboard or by emailing support@teamus369.com.' },
  ];

  return (
    <section className="pt-10 pb-10 px-6 md:px-10 bg-[#020617] border-y border-white/5">
      <div className="max-w-[750px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-black text-white">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div 
              key={i} 
              className={cn("bg-[#050b1a] border border-white/5 transition-all cursor-pointer hover:bg-white/[0.02]", openIndex === i ? "rounded-[30px] py-6 px-10 border-white/10 shadow-[0_0_20px_rgba(0,229,255,0.05)]" : "rounded-full py-5 px-10")}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex justify-between items-center gap-6">
                <h4 className={cn("text-[13px] md:text-[14px] font-bold transition-colors", openIndex === i ? "text-primary" : "text-white")}>{f.q}</h4>
                <div className={cn("shrink-0 transition-colors", openIndex === i ? "text-primary" : "text-gray-400")}>
                   {openIndex === i ? <Minus className="w-5 h-5 stroke-[2.5]" /> : <Plus className="w-5 h-5 stroke-[2.5]" />}
                </div>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed pt-4 font-semibold border-t border-white/10 mt-4">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBannerSection() {
  return (
    <section className="pt-10 pb-20 px-6 md:px-10 bg-[#020617]">
      <div className="max-w-[1400px] mx-auto relative rounded-xl overflow-hidden shadow-2xl min-h-[140px] border border-white/5">
        <div className="absolute inset-0">
          <img src={editImage} alt="Banner Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 p-8 md:px-16 flex flex-col items-center justify-center gap-10 h-full">
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-sans font-black text-white leading-tight">
              Ready to Start Your <span className="text-gold">Trading Journey?</span>
            </h2>
            <p className="text-white text-sm md:text-lg font-medium opacity-80 max-w-2xl">
              Join thousands of successful traders and take the first step today!
            </p>
            <div className="pt-2">
              <Button to="/contact" size="lg" className="bg-gold hover:bg-gold/90 text-black font-bold px-12 rounded-lg h-14 shadow-[0_4px_25px_rgba(255,215,0,0.25)] hover:scale-105 transition-all">
                Contact Us <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketTicker() {
  const marketData = [
    { name: 'NIFTY 50', price: '24,834.85', change: '+1.02%', isUp: true, color: 'bg-indigo-600' },
    { name: 'BANK NIFTY', price: '51,248.75', change: '+0.85%', isUp: true, color: 'bg-emerald-700' },
    { name: 'BTC/USDT', price: '67,892.45', change: '-0.45%', isUp: false, color: 'bg-orange-500' },
    { name: 'ETH/USDT', price: '3,245.67', change: '+1.15%', isUp: true, color: 'bg-slate-400' },
    { name: 'GOLD', price: '2,345.80', change: '+0.65%', isUp: true, color: 'bg-yellow-500' },
  ];

  const items = [...marketData, ...marketData, ...marketData, ...marketData];

  return (
    <div className="w-full bg-black border-y border-white/5 py-3 overflow-hidden whitespace-nowrap relative z-30">
      <div className="flex animate-scroll w-max">
        {items.map((item, i) => (
          <div key={i} className="inline-flex items-center gap-4 px-10 border-r border-white/5 last:border-r-0">
            <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0 shadow-lg", item.color)}>
              {item.name.charAt(0)}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 font-bold text-[12px] tracking-tight">{item.name}</span>
              <span className="text-white font-mono text-sm font-bold">{item.price}</span>
              <span className={cn("text-[11px] font-bold px-2 py-0.5 rounded", item.isUp ? "text-emerald-500 bg-emerald-500/10" : "text-rose-500 bg-rose-500/10")}>
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
