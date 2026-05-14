import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  BookOpen, 
  Play, 
  Star, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  Trophy,
  History,
  Target,
  LineChart,
  Brain,
  Search,
  MessageSquare,
  LifeBuoy,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Send,
  ArrowRight,
  Clock,
  MapPin,
  Mail,
  Phone,
  Activity,
  Flag,
  Radio,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge, Card } from '@/src/components/UI';
import { cn } from '@/src/lib/utils';

// Assets
import aboutHeroImg from '../abouthero.png';
import avatar1 from '../avatar_1.png';
import avatar2 from '../avatar_2.png';
import avatar3 from '../avatar_3.png';
import avatar4 from '../avatar_4.png';
import avatar5 from '../avatar_5.png';
import avatar6 from '../avatar_6.png';
import editImage from '../editimage.png';

export default function About() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden bg-[#020617] text-white selection:bg-gold/30">
      <AboutHero />
      <OurJourney />
      <FounderSection />
      <PhilosophySection />
      <WhyChooseSection />
      <TestimonialsSection />
      <TradingSetupSection />
      <ContactBannerSection />
    </div>
  );
}

function AboutHero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 pb-6 overflow-hidden bg-[#020617]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={aboutHeroImg} 
          alt="About Hero" 
          className="w-full h-full object-cover object-center lg:object-right opacity-90" 
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#020617] via-[#020617]/70 to-transparent lg:w-1/2" />
        <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
               <div className="space-y-3">
                  <div className="block">
                     <span className="text-gold text-[11px] font-bold uppercase tracking-[0.2em]">ABOUT US</span>
                  </div>
               </div>
               
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black text-white leading-[1.1] tracking-tight">
                 Empowering Traders To<br />
                 <span className="text-gold">Achieve Financial Freedom</span>
               </h1>
               
               <p className="text-gray-300 text-[13px] md:text-sm leading-relaxed max-w-xl font-medium opacity-90">
                 At TeamUS 369, we believe trading is more than charts and indicators — it's about mindset, discipline, and a proven strategy. Our mission is to educate, guide, and help traders build the skills and confidence to create a consistent income from the markets.
               </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <Link to="/courses">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-bold px-10 rounded-lg h-14 shadow-[0_4px_25px_rgba(255,215,0,0.25)] hover:scale-105 transition-all text-[15px]">
                  Explore Courses <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/5 hover:bg-white/10 px-8 rounded-lg h-14 flex items-center gap-3 backdrop-blur-md border-[1.5px]">
                Watch Live Sessions
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                   <Play className="w-3.5 h-3.5 text-gold fill-gold" />
                </div>
              </Button>
            </div>
          </motion.div>

          <div className="relative h-[600px] hidden lg:block">
            {/* Top Right Card: Monthly Profit */}
            <div className="absolute top-10 right-0 z-20">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <Card className="bg-black/40 backdrop-blur-xl border-white/10 p-5 w-[260px] shadow-2xl rounded-2xl">
                   <div className="flex items-center justify-between mb-2">
                      <div className="flex flex-col">
                        <span className="text-emerald-500 text-xl font-black">+23.68%</span>
                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">This Month Profit</span>
                      </div>
                      <div className="w-20 h-10 overflow-hidden">
                        <svg viewBox="0 0 100 40" className="w-full h-full">
                           <path d="M0,35 Q20,30 40,32 T80,10 T100,5" fill="none" stroke="#10b981" strokeWidth="3" />
                        </svg>
                      </div>
                   </div>
                </Card>
              </motion.div>
            </div>

            {/* Bottom Center Card: Win Rate */}
            <div className="absolute bottom-20 left-10 z-20">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <Card className="bg-black/40 backdrop-blur-xl border-white/10 p-5 w-[220px] shadow-2xl rounded-2xl">
                   <div className="flex items-center justify-between mb-1">
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">Win Rate</span>
                        <span className="text-2xl font-black text-white">85%</span>
                      </div>
                      <div className="w-20 h-10 overflow-hidden">
                        <svg viewBox="0 0 100 40" className="w-full h-full">
                           <path d="M0,38 Q20,35 40,30 T80,15 T100,10" fill="none" stroke="#10b981" strokeWidth="3" />
                        </svg>
                      </div>
                   </div>
                </Card>
              </motion.div>
            </div>

            {/* Bottom Right Card: Live Sessions */}
            <div className="absolute bottom-10 -right-4 z-20">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                <Card className="bg-black/40 backdrop-blur-xl border-white/10 p-5 w-[200px] shadow-2xl rounded-2xl">
                   <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">Live Sessions</span>
                        <span className="text-2xl font-black text-white">500+</span>
                      </div>
                      <div className="p-2 bg-emerald-500/10 rounded-full">
                         <Zap className="w-5 h-5 text-emerald-500" />
                      </div>
                   </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurJourney() {
  const steps = [
    { year: '2021', title: 'Started Trading Community', desc: 'Began with a small group of passionate traders sharing knowledge.', icon: Flag },
    { year: '2022', title: '1,000+ Students Joined', desc: 'Our community grew rapidly with trust and results.', icon: Users },
    { year: '2023', title: 'Live Mentorship Launch', desc: 'Started live trading sessions and mentorship programs.', icon: Radio },
    { year: '2024', title: 'Advanced Strategy Courses', desc: 'Launched advanced courses for serious market learners.', icon: GraduationCap },
    { year: '2025', title: 'Global Trading Academy', desc: 'Expanding globally and empowering traders worldwide.', icon: Trophy },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="pt-2 pb-10 px-6 md:px-10 bg-[#020617] border-y border-white/5">
      <div className="max-w-[1400px] mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-sans font-black text-white mb-4">Our Journey</h2>
        <p className="text-gray-500 text-xs md:text-sm font-medium tracking-tight">Building a community of successful traders worldwide.</p>
      </div>

      <div className="max-w-[1200px] mx-auto relative px-4">
        {/* Connection Line - Handled by individual segments for animation */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-0 relative z-10">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group relative">
              {/* Connection Line Segment */}
              {i < steps.length - 1 && (
                <div className={cn(
                  "hidden lg:block absolute top-[36px] left-[50%] w-full h-[1px] transition-all duration-1000 z-0",
                  i === activeIndex ? "bg-gold/60 shadow-[0_0_8px_rgba(244,197,66,0.4)]" : "bg-white/10"
                )} />
              )}

              {/* Dot on line (only between steps) */}
              {i < steps.length - 1 && (
                <div className={cn(
                  "hidden lg:block absolute top-[36px] -right-[1px] translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-700 z-20",
                  i === activeIndex ? "bg-gold shadow-[0_0_12px_rgba(244,197,66,0.8)] scale-125" : "bg-white/30"
                )} />
              )}
              
              <div className="mb-8 relative">
                 <div className={cn(
                   "w-[72px] h-[72px] rounded-full bg-[#050b1a] border-[1px] flex items-center justify-center transition-all duration-1000 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] relative z-10",
                   i === activeIndex ? "border-gold shadow-[0_0_25px_rgba(244,197,66,0.3)] scale-110" : "border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                 )}>
                    <step.icon 
                      className={cn(
                        "w-6 h-6 transition-all duration-1000", 
                        i === activeIndex ? "text-gold" : "text-white opacity-90"
                      )} 
                      strokeWidth={1.5} 
                    />
                    {i === activeIndex && <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl animate-pulse" />}
                    {i !== activeIndex && <div className="absolute inset-0 rounded-full bg-white/5 blur-md" />}
                 </div>
              </div>
              
              <div className="space-y-3">
                <span className={cn(
                  "font-black text-lg block transition-colors duration-1000",
                  i === activeIndex ? "text-gold" : "text-white"
                )}>{step.year}</span>
                <h3 className="text-white font-bold text-[13px] leading-tight">{step.title}</h3>
                <p className="text-gray-500 text-[10px] leading-relaxed max-w-[180px] mx-auto font-medium">{step.desc}</p>
              </div>
            </div>
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

function FounderSection() {
  return (
    <section className="pt-10 pb-24 px-6 md:px-10 bg-[#020617] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group max-w-[500px] lg:max-w-none lg:ml-auto">
          <div className="relative max-w-[480px] lg:ml-auto">
            {/* Main Image - Now in Color */}
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[1.1/1] border border-white/5 shadow-2xl z-10 bg-[#050b1a]">
              <img src={avatar1} alt="Founder" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-1000" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Signature on image */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                 <div className="text-gold font-serif text-[3.5rem] italic opacity-80 select-none tracking-tighter drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                    Rahul Verma
                 </div>
              </div>
            </div>

            <div className="absolute -left-[72px] top-1/2 -translate-y-1/2 z-20 space-y-4 hidden lg:block">
              {[
                { val: 7, suffix: '+', label: 'Years Of Market<br/>Experience', color: 'text-white' },
                { val: 50, suffix: 'K+', label: 'Trades<br/>Executed', color: 'text-white' },
                { val: 85, suffix: '%', label: 'Consistent<br/>Win Rate', color: 'text-emerald-500' }
              ].map((stat, i) => (
                <Card key={i} className="bg-black/60 backdrop-blur-md border-white/10 p-6 w-36 h-36 rounded-[2rem] hover:translate-x-2 transition-all shadow-2xl flex flex-col items-start justify-center text-left group/card font-sans">
                  <div className={cn("text-3xl font-sans font-black mb-2 tracking-tight transition-transform group-hover/card:scale-110 duration-500", stat.color)}>
                    <AnimatedNumber end={stat.val} suffix={stat.suffix} />
                  </div>
                  <div 
                    className="text-[9px] text-gray-400 font-sans font-bold uppercase tracking-widest leading-tight"
                    dangerouslySetInnerHTML={{ __html: stat.label }}
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-6">
             <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 backdrop-blur-md">
                <Target className="w-3.5 h-3.5 text-gold" />
                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em]">FOUNDER & LEAD MENTOR</span>
             </div>
             
             <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-sans font-black text-white leading-tight tracking-tight">
               Hi, I'm <span className="text-gold">Rahul Verma</span>
             </h2>
             
             <div className="space-y-6">
                <p className="text-gray-300 text-[13px] md:text-sm leading-relaxed font-medium opacity-90">
                  I started my trading journey in 2017 with zero knowledge and faced every loss a beginner can face. Through years of learning, failing, researching, and building strategies, I finally discovered the roadmap to consistent profitability.
                </p>
                <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed font-medium">
                  Now, my mission is simple — to help traders like YOU avoid my mistakes and fast-track your journey with proven strategies, real market insights, and the right mindset.
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: TrendingUp, label: 'Professional Trader' },
              { icon: LineChart, label: 'Market Analyst' },
              { icon: Users, label: 'Mentor & Educator' },
              { icon: Shield, label: 'Risk Management Expert' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3 hover:bg-white/10 transition-all group">
                <div className="w-5 h-5 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                   <item.icon className="w-4 h-4" />
                </div>
                <span className="text-white text-[12px] font-bold tracking-tight opacity-90">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-10 pt-4">
             <Button size="lg" className="bg-transparent border border-white/20 text-white font-bold px-10 rounded-xl h-14 hover:bg-white/10 hover:border-white/40 transition-all flex items-center gap-4">
               Watch My Story 
               <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center">
                  <Play className="w-3 h-3 text-black fill-black ml-0.5" />
               </div>
             </Button>
             <div className="text-gold font-serif text-[2.5rem] italic opacity-60 select-none tracking-tighter drop-shadow-lg">
               Rahul Verma
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const points = [
    { title: 'Discipline', icon: Target, desc: 'We believe discipline is the foundation of consistent trading and long-term success.' },
    { title: 'Risk Management', icon: Shield, desc: 'Protect your capital at all costs. We teach proper risk management for consistent growth.' },
    { title: 'Consistency', icon: TrendingUp, desc: 'Small consistent wins lead to massive results. We focus on process, not overnight riches.' },
    { title: 'Psychology', icon: Brain, desc: 'Master your emotions, control your mindset, and become a professional trader.' },
  ];

  return (
    <section className="pt-10 pb-24 px-6 md:px-10 bg-[#050b1a]/50">
      <div className="max-w-[1400px] mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-sans font-black text-white mb-4">Our Trading Philosophy</h2>
        <p className="text-gray-500 text-xs md:text-sm font-medium tracking-tight">The core principles that drive our success and teachings.</p>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((p, i) => (
          <Card key={i} className="bg-[#050b1a] border-white/5 p-8 group hover:border-gold/30 transition-all hover:-translate-y-1 rounded-[2rem] flex items-start gap-6">
             <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/10 transition-all">
                <p.icon className="w-8 h-8" strokeWidth={1.5} />
             </div>
             <div className="space-y-2 pt-1">
                <h4 className="text-white font-bold text-lg tracking-tight">{p.title}</h4>
                <p className="text-gray-500 text-[11px] leading-relaxed font-medium">{p.desc}</p>
             </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const features = [
    { icon: Play, title: 'Live Market Sessions', desc: 'Learn directly from real market analysis sessions.' },
    { icon: Users, title: 'Real Trade Examples', desc: 'See real trades with entries, exits & results.' },
    { icon: Activity, title: 'Daily Market Analysis', desc: 'Daily updates on Forex, Crypto, Stocks & more.' },
    { icon: History, title: 'Strategy Backtesting', desc: 'Learn backtested, proven strategies that work.' },
    { icon: Users, title: 'Lifetime Community', desc: 'Join our premium community of serious traders.' },
    { icon: Clock, title: 'Dedicated Support', desc: "We're always here to help you succeed." },
  ];

  const stats = [
    { val: '10K+', label: 'Active Students', icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { val: '85%', label: 'Success Rate', icon: Star, color: 'text-gold', bg: 'bg-gold/10' },
    { val: '500+', label: 'Live Sessions', icon: Trophy, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { val: '50+', label: 'Courses', icon: BookOpen, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { val: '3+', suffix: ' Years', label: 'Of Experience', icon: Clock, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  ];

  return (
    <section className="pt-10 pb-24 px-6 md:px-10 bg-[#020617]">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
             <h2 className="text-3xl md:text-4xl font-sans font-black text-white">
               Why Choose <span className="text-gold">TeamUS 369?</span>
             </h2>
             <p className="text-gray-500 text-xs md:text-sm font-medium tracking-tight">We provide everything a trader needs to succeed in the markets.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10">
            {features.map((f, i) => (
              <div key={i} className="space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold/10 group-hover:border-gold/30 transition-all">
                   <f.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="space-y-1.5">
                   <h4 className="text-white font-bold text-[14px] tracking-tight">{f.title}</h4>
                   <p className="text-gray-500 text-[10px] leading-relaxed font-medium">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
           <Card className="bg-[#050b1a] border-white/10 p-10 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              {/* Bull Background Image */}
              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none grayscale translate-x-1/4 translate-y-1/4">
                 <img src={aboutHeroImg} alt="Bull" className="w-full h-full object-contain" />
              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                 {stats.map((s, i) => (
                   <div key={i} className="flex items-center gap-4">
                      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/5 shadow-inner", s.bg)}>
                         <s.icon className={cn("w-6 h-6", s.color)} strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-white font-black text-2xl tracking-tighter leading-none">
                            {s.val}{s.suffix || ''}
                         </span>
                         <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">
                            {s.label}
                         </span>
                      </div>
                   </div>
                 ))}
              </div>
           </Card>
        </div>
      </div>
    </section>
  );
}



function TestimonialsSection() {
  const reviews = [
    { name: 'Vikram Singh', role: 'Swing Trader', text: 'TeamUS 369 changed my trading career. Their strategies are simple, effective and highly profitable!', profit: '+42.5%', img: avatar1 },
    { name: 'Priya Mehta', role: 'Forex Trader', text: 'The live sessions and real trade examples helped me become a consistently profitable trader.', profit: '+31.8%', img: avatar2 },
    { name: 'Arjun Nair', role: 'Crypto Trader', text: 'Best community of traders! The support and guidance are amazing.', profit: '+56.2%', img: avatar3 },
    { name: 'Rohit Patel', role: 'Options Trader', text: 'I was a beginner and now I trade confidently thanks to TeamUS 369.', profit: '+38.7%', img: avatar4 },
    { name: 'Sanya Gupta', role: 'Intraday Trader', text: 'The mentorship program is top-notch. I learned how to manage risk properly for the first time.', profit: '+29.4%', img: avatar5 },
    { name: 'Amit Verma', role: 'Scalper', text: 'Highly recommend! The price action strategies are very powerful and easy to understand.', profit: '+47.1%', img: avatar6 },
  ];

  // Duplicate for seamless marquee
  const extendedReviews = [...reviews, ...reviews];

  return (
    <section className="pt-10 pb-24 bg-[#020617] overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center mb-16 px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-sans font-black text-white mb-4">What Our Students Say</h2>
        <p className="text-gray-500 text-xs md:text-sm font-medium tracking-tight">Real results from our dedicated trading community.</p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradients for fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#020617] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#020617] to-transparent z-10" />

        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ 
            repeat: Infinity, 
            duration: 35, 
            ease: "linear" 
          }}
          className="flex gap-6 py-4 whitespace-nowrap"
        >
          {extendedReviews.map((r, i) => (
            <Card key={i} className="bg-[#050b1a] border-white/5 p-8 w-[350px] min-h-[200px] shrink-0 rounded-[2rem] flex flex-col justify-between group hover:border-gold/20 transition-all">
               <p className="text-gray-300 text-[13px] leading-relaxed italic mb-6 whitespace-normal font-medium">"{r.text}"</p>
               
               <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                  <div className="flex items-center gap-3">
                     <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-gold/30 transition-all">
                        <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
                     </div>
                     <div className="flex flex-col">
                        <h5 className="text-white font-bold text-[14px] tracking-tight">{r.name}</h5>
                        <p className="text-gray-500 text-[10px] font-medium">{r.role}</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <div className="text-emerald-500 font-black text-sm tracking-tight">{r.profit}</div>
                     <div className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Monthly Profit</div>
                  </div>
               </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TradingSetupSection() {
  return (
    <section className="pt-10 pb-2 px-6 md:px-10 bg-[#020617] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_3.5fr] gap-12 items-center">
        {/* Left Side: Content */}
        <div className="space-y-4">
           <h2 className="text-3xl md:text-4xl font-sans font-black text-white tracking-tight">
             Our Trading <span className="text-gold">Setup</span>
           </h2>
           <p className="text-gray-400 text-[13px] md:text-sm font-medium leading-relaxed opacity-80 max-w-[280px]">
             Professional environment for professional traders.
           </p>
        </div>

        {/* Right Side: Horizontal Image Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?auto=format&fit=crop&w=800&q=80",
            "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800"
          ].map((url, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden border border-white/10 group aspect-[4/3]">
              <img 
                src={url} 
                alt={`Trading Setup ${i + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBannerSection() {
  return (
    <section className="py-10 px-6 md:px-10 bg-[#020617]">
      <div className="max-w-[1400px] mx-auto relative rounded-2xl overflow-hidden shadow-2xl min-h-[160px] border border-white/5">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={editImage} 
            alt="Banner Background" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 p-10 flex flex-col items-center justify-center gap-10 h-full">
          {/* Main Content Stack */}
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-sans font-black text-white leading-tight">
              Ready to Start Your <span className="text-gold">Trading Journey?</span>
            </h2>
            <p className="text-white text-sm md:text-lg font-medium opacity-80 max-w-2xl">
              Join thousands of successful traders and take the first step today!
            </p>
            <div className="pt-2">
              <Button 
                to="/contact"
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-black font-bold px-12 rounded-lg h-14 shadow-[0_4px_25px_rgba(255,215,0,0.25)] hover:scale-105 transition-all"
              >
                Contact Us <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
