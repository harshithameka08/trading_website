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
import courseIntraday from '../course_scalping_v2.png';
import courseOptions from '../course_options_v2.png';
import courseSwing from '../course_swing_v2.png';
import coursePriceAction from '../course_price_action_v2.png';
import coursePsychology from '../course_psychology.png';
import avatar1 from '../avatar_1.png';
import avatar2 from '../avatar_2.png';
import editImage from '../editimage.png';
import avatar3 from '../avatar_3.png';
import avatar4 from '../avatar_4.png';
import avatar5 from '../avatar_5.png';
import avatar6 from '../avatar_6.png';
import homeImage2 from '../home-image2.jpg';

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden bg-[#020617] text-white selection:bg-gold/30">
      <HeroSection />
      <MarketTicker />
      <StatsSection />
      <AboutSection />
      <CoursesSection />
      <LiveExperienceSection />
      <FAQSection />
      <ContactBannerSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] max-md:min-h-[720px] max-md:h-auto flex items-center pt-32 pb-16 max-md:pt-[120px] max-md:pb-[80px] overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src={heroo} 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center lg:object-right opacity-80 max-md:opacity-60 max-md:object-[70%_center] max-[480px]:object-[75%_center]" 
        />
        {/* Mobile Readability Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/78 to-black/55 md:hidden" />
        <div className="absolute inset-0 bg-linear-to-r from-[#020617] via-[#020617]/80 to-transparent lg:w-2/3" />
        <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent" />
      </div>

      <div className="max-w-[1700px] mx-auto px-6 md:px-10 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-md:max-w-[90%]"
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

          <div className="flex flex-wrap max-md:flex-row max-md:gap-3 gap-5">
            <Button to="/courses" size="lg" className="bg-gold hover:bg-gold/90 text-black font-bold px-8 rounded-lg flex items-center gap-3 h-12 shadow-[0_0_20px_rgba(255,215,0,0.20)] max-md:px-5 max-md:text-[13px]">
              Explore Courses <ArrowRight className="w-4 h-4" />
            </Button>
            <Button to="/live-classes" variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/10 px-8 rounded-lg flex items-center gap-3 h-12 bg-white/5 backdrop-blur-sm max-md:px-5 max-md:text-[13px]">
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
      <div className="max-w-[1700px] mx-auto px-6 md:px-10">
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
    <section className="relative pt-8 pb-10 px-6 md:px-10 overflow-hidden min-h-[500px] max-md:min-h-auto max-md:py-24 flex items-center bg-[#020617]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={homeImage2} 
          alt="About Us Background" 
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] w-auto object-contain opacity-40 scale-75 lg:scale-90 max-md:h-full max-md:w-full max-md:object-cover max-md:object-center max-md:opacity-10 max-md:scale-100" 
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#020617] via-[#020617]/90 to-transparent lg:w-2/3" />
        <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent" />
      </div>

      <div className="max-w-[1700px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
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

          <Button to="/about" variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm rounded-xl px-5 h-10 font-medium flex items-center gap-2 mt-6 w-fit">
            Know More About Us <ArrowRight className="w-3.5 h-3.5" />
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
      <div className="max-w-[1700px] mx-auto">
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
                    <Link to={`/enroll?course=${encodeURIComponent(c.title)}`}>
                      <Button className="bg-gold hover:bg-gold/90 text-black font-bold px-4 py-2 rounded h-auto text-[11px]">
                        Enroll Now
                      </Button>
                    </Link>
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
    <section className="py-24 px-6 md:px-10 bg-[#020617] relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none opacity-30" />
      
      <div className="max-w-[1700px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Cinematic Video Player */}
          <div className="lg:col-span-7 relative group order-2 lg:order-1">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-[#050b1a] aspect-video border border-white/5 shadow-2xl transition-all duration-700 group-hover:border-primary/20 p-1.5">
               <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                 <img src={liveChart} alt="Live Session" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" />
                 
                 {/* Player HUD Overlays */}
                 <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10" />
                 
                 {/* Top HUD Widgets */}
                 <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                    <div className="flex gap-3">
                       <div className="px-3 py-1.5 rounded-xl bg-red-600/20 border border-red-600/30 backdrop-blur-md flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                          <span className="text-red-500 text-[9px] font-black uppercase tracking-widest">Live</span>
                       </div>
                       <div className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md flex items-center gap-2">
                          <Activity className="w-3.5 h-3.5 text-primary" />
                          <span className="text-white text-[9px] font-black uppercase tracking-widest">4K Ultra</span>
                       </div>
                    </div>
                    <div className="px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-md flex items-center gap-2">
                       <Users className="w-3.5 h-3.5 text-primary" />
                       <span className="text-white text-[9px] font-black uppercase tracking-widest">1.2K Watching</span>
                    </div>
                 </div>

                 {/* Center Play Button */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center group/play cursor-pointer hover:bg-primary/30 transition-all duration-500 scale-100 hover:scale-110 shadow-[0_0_40px_rgba(0,229,255,0.15)]">
                       <Play className="w-8 h-8 text-white fill-primary ml-1" />
                    </div>
                 </div>

                 {/* Bottom Metadata */}
                 <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="flex items-end justify-between">
                       <div className="space-y-1">
                          <p className="text-primary text-[9px] font-black uppercase tracking-[0.2em]">Live Session</p>
                          <h4 className="text-white font-black text-xl uppercase tracking-tight">Market Structure Breakout</h4>
                       </div>
                       <div className="flex -space-x-2">
                          {[avatar1, avatar2, avatar3].map((av, i) => (
                            <div key={i} className="w-7 h-7 rounded-full border-2 border-black overflow-hidden shadow-xl">
                               <img src={av} alt="viewer" className="w-full h-full object-cover" />
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Floating Achievement Widget */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -bottom-8 -right-8 hidden xl:block z-30"
            >
              <div className="bg-[#050b1a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-5 min-w-[240px]">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="text-xl font-black text-white leading-none">82% Win Rate</p>
                  <p className="text-[9px] font-bold uppercase tracking-widest mt-1 text-gold">Institutional Grade</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content & Action */}
          <div className="lg:col-span-5 space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-sans font-black text-white leading-tight uppercase">
                Master The <br />
                <span className="text-gold">Live Markets</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-lg">
                Stop trading alone. Join our elite community to see exactly how professionals navigate market structure and execute high-probability setups in real-time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 py-4 border-y border-white/5">
              {[
                { label: 'Daily Analysis', val: '2 Sessions', icon: Activity },
                { label: 'Trade Signals', val: 'Real-time', icon: Zap },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <s.icon className="w-4 h-4 text-gold" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{s.label}</span>
                  </div>
                  <p className="text-xl font-black text-white uppercase">{s.val}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/live-classes" className="bg-primary hover:bg-primary/90 text-black font-black px-10 rounded-2xl h-16 shadow-[0_10px_30px_rgba(0,229,255,0.2)] flex items-center gap-3 text-[13px] uppercase tracking-widest">
                Access Live Desk <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
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
              className={cn("bg-[#050b1a] border border-white/5 transition-all cursor-pointer hover:bg-white/2", openIndex === i ? "rounded-[30px] py-6 px-10 border-white/10 shadow-[0_0_20px_rgba(0,229,255,0.05)]" : "rounded-full py-5 px-10")}
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
    <section className="relative overflow-hidden min-h-[500px] max-md:min-h-auto flex items-center group">
      <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105">
        <img src={editImage} alt="Banner Background" className="w-full h-full object-cover max-md:object-[center_top]" />
        {/* Mobile Overlay */}
        <div className="absolute inset-0 bg-black/60 md:hidden" />
        <div className="absolute inset-0 bg-linear-to-l from-[#020617] via-[#020617]/20 to-transparent" />
      </div>
 
      <div className="max-w-[1700px] mx-auto px-6 md:px-10 relative z-10 py-24 w-full">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-sans font-black text-white leading-none uppercase tracking-tighter"
          >
            Ready to Start Your <br />
            <span className="text-gold">Trading Journey?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-sm md:text-xl font-medium max-w-2xl leading-relaxed"
          >
            Join thousands of successful traders who have transformed their lives through our institutional-grade training and community.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-4 w-full flex justify-center"
          >
            <Button to="/contact" size="lg" className="bg-gold hover:bg-gold/90 text-black font-black px-12 rounded-xl h-16 shadow-[0_10px_40px_rgba(244,197,66,0.3)] hover:scale-105 transition-all flex items-center gap-3 text-[13px] uppercase tracking-widest max-md:w-full max-md:max-w-md max-md:justify-center">
              Start My Journey Now <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
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
