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
  GraduationCap,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Badge, Card } from '@/src/components/UI';
import { cn } from '@/src/lib/utils';

// Assets
import aboutHeroImg from '../about_hero_financial_freedom_1778842588085.png';
import avatar1 from '../avatar_1.png';
import avatar2 from '../avatar_2.png';
import avatar3 from '../avatar_3.png';
import avatar4 from '../avatar_4.png';
import avatar5 from '../avatar_5.png';
import avatar6 from '../avatar_6.png';
import editImage from '../editimage.png';

export default function About() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden bg-bg-main text-white selection:bg-gold/30">
      <AboutHero />
      <MissionVisionSection />
      <FounderSection />
      <PhilosophySection />
      <WhyChooseSection />
      <TestimonialsSection />

      <ContactBannerSection />
    </div>
  );
}

function AboutHero() {
  return (
    <section className="relative min-h-[70vh] max-md:min-h-auto flex items-center pt-16 pb-4 max-md:pt-32 max-md:pb-20 overflow-hidden bg-bg-main">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={aboutHeroImg} 
          alt="About Hero" 
          className="w-full h-full object-cover object-center lg:object-right opacity-90 max-md:opacity-60 max-md:object-[70%_center]" 
        />
        {/* Mobile Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80 md:hidden" />
        <div className="absolute inset-0 bg-linear-to-r from-bg-main via-bg-main/80 to-transparent lg:w-3/4" />
        <div className="absolute inset-0 bg-linear-to-t from-bg-main via-transparent to-transparent" />
      </div>

      <div className="max-w-[1700px] mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">

               
               <h1 className="text-5xl md:text-5xl lg:text-6xl font-sans font-black text-white leading-tight tracking-tight">
                 Empowering Traders To<br />
                 <span className="text-gold">Achieve Financial Freedom</span>
               </h1>
               
               <p className="text-gray-300 text-[13px] md:text-sm leading-relaxed max-w-xl font-medium opacity-90">
                 At TeamUS 369, we believe trading is more than charts and indicators — it's about mindset, discipline, and a proven strategy. Our mission is to educate, guide, and help traders build the skills and confidence to create a consistent income from the markets.
               </p>
            </div>

            <div className="flex flex-wrap max-md:flex-col gap-5">
              <Link to="/courses" className="max-md:w-full">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-bold px-10 rounded-lg h-14 shadow-[0_4px_25px_rgba(255,215,0,0.25)] hover:scale-105 transition-all text-[15px] max-md:w-full max-md:justify-center">
                  Explore Courses <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button 
                to="/live-classes"
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white bg-white/5 hover:bg-white/10 px-8 rounded-lg h-14 flex items-center gap-3 backdrop-blur-md border-[1.5px] max-md:w-full max-md:justify-center"
              >
                Watch Live Sessions
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                   <Play className="w-3.5 h-3.5 text-gold fill-gold" />
                </div>
              </Button>
            </div>
          </motion.div>

          <div className="relative h-[600px] hidden lg:block">



          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section className="pt-10 pb-24 px-6 md:px-10 bg-bg-main relative overflow-hidden border-y border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1700px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="h-full bg-white/2 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 lg:p-14 transition-all duration-500 hover:bg-white/4 hover:border-primary/20 shadow-2xl relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
               
               <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-8 h-8 text-primary" />
               </div>
               
               <div className="space-y-4">
                  <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">The Purpose</span>
                  <h2 className="text-3xl lg:text-4xl font-sans font-black text-white uppercase tracking-tight">
                    Our <span className="text-primary">Mission</span>
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                    To democratize institutional-grade trading knowledge and empower individuals worldwide with the tools, strategies, and psychological discipline needed to achieve long-term financial independence.
                  </p>
               </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="h-full bg-white/2 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 lg:p-14 transition-all duration-500 hover:bg-white/4 hover:border-gold/20 shadow-2xl relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors" />
               
               <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-8 h-8 text-gold" />
               </div>
               
               <div className="space-y-4">
                  <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em]">The Goal</span>
                  <h2 className="text-3xl lg:text-4xl font-sans font-black text-white uppercase tracking-tight">
                    Our <span className="text-gold">Vision</span>
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                    To become the world's most trusted trading ecosystem, fostering a global community of consistently profitable traders who trade with unwavering discipline and institutional precision.
                  </p>
               </div>
            </div>
          </motion.div>
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
    <section className="py-10 px-6 md:px-10 bg-bg-main relative overflow-hidden">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1700px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Visual Side: Cinematic Portrait & Stats */}
        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Decorative Frame */}
            <div className="absolute -inset-4 bg-white/2 border border-white/5 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
            
            {/* Main Portrait Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[1.1/1] bg-bg-secondary border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
              <img 
                src={avatar1} 
                alt="Michael - Founder" 
                className="w-full h-full object-cover object-top opacity-95 group-hover:scale-105 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
              
              {/* Bottom HUD Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="text-gold font-serif text-[3rem] italic opacity-40 select-none tracking-tighter -rotate-6 transform -translate-x-4 group-hover:-translate-x-2 transition-transform duration-700">
                  Michael
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-4 -right-4 z-30">
              <div className="bg-primary/10 backdrop-blur-2xl border border-primary/20 rounded-2xl p-4 shadow-2xl flex flex-col items-center gap-1 group/badge hover:bg-primary/20 transition-all">
                <span className="text-3xl font-black text-white leading-none">07+</span>
                <span className="text-[9px] font-black text-primary uppercase tracking-widest text-center leading-tight">Years<br/>Experience</span>
              </div>
            </div>

            {/* Floating Stats Sidebar */}
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-30">
              {[
                { val: 50, suffix: 'K+', label: 'Trades Executed', icon: Zap, color: 'text-white' },
                { val: 85, suffix: '%', label: 'Win Rate', icon: TrendingUp, color: 'text-emerald-500' }
              ].map((stat, i) => (
                <div key={i} className="bg-black/60 backdrop-blur-2xl border border-white/10 p-4 rounded-2xl shadow-2xl flex flex-col items-start gap-3 hover:translate-x-2 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <stat.icon className={cn("w-4 h-4", stat.color)} />
                  </div>
                  <div>
                    <div className="text-xl font-black text-white leading-none">
                      <AnimatedNumber end={stat.val} suffix={stat.suffix} />
                    </div>
                    <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Content Side: Professional Narrative */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-4">

              <h2 className="text-3xl md:text-5xl font-display font-black text-white leading-tight uppercase tracking-tight">
                Meet Your <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white to-primary">Lead Mentor</span>
              </h2>
            </div>
            
            <div className="space-y-6 relative">
               <div className="absolute left-0 top-0 w-1 h-full bg-linear-to-b from-gold/30 to-transparent rounded-full -ml-8 hidden lg:block" />
               <div className="space-y-4">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight italic">"Hi, I'm Michael"</h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                    In 2017, I entered the markets with nothing but ambition. Like many, I faced heavy losses and frustrating setbacks. But through relentless research and systematic backtesting, I developed the <span className="text-white font-bold">Institutional Roadmap</span> to consistent profitability.
                  </p>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Today, my goal isn't just to trade, but to empower a new generation of disciplined traders with the exact framework I used to escape the beginner cycle and achieve true market mastery.
                  </p>
               </div>
            </div>
          </div>

          {/* Core Expertise Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: LineChart, title: 'Price Action', sub: 'Master' },
              { icon: Shield, title: 'Risk Control', sub: 'Expert' },
              { icon: Brain, title: 'Psychology', sub: 'Strategist' },
              { icon: Users, title: 'Community', sub: 'Leader' }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/2 border border-white/5 rounded-3xl group hover:border-white/20 transition-all flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold/10 transition-all">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                   <p className="text-white font-black text-[13px] uppercase tracking-tight">{item.title}</p>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-10 pt-8 border-t border-white/5">
             <Button to="/contact" size="lg" className="bg-primary hover:bg-primary/90 text-black font-black px-12 rounded-2xl h-16 shadow-[0_10px_40px_rgba(0,229,255,0.2)] flex items-center gap-4 text-xs uppercase tracking-widest transition-transform hover:scale-105">
               Start Mentorship <ArrowRight className="w-5 h-5" />
             </Button>
             <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">Founded At</span>
                <span className="text-white font-black text-lg">TeamUS 369</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const points = [
    { title: 'Discipline', icon: Target, color: 'from-gold to-yellow-500', desc: 'Discipline is the cornerstone of our strategy. We believe that following a proven plan with unwavering focus is what separates professional traders from the rest.' },
    { title: 'Risk Control', icon: Shield, color: 'from-emerald-400 to-emerald-600', desc: 'Capital preservation is our first priority. We teach institutional-grade risk management techniques to ensure your survival and growth in all market conditions.' },
    { title: 'Consistency', icon: TrendingUp, color: 'from-primary to-blue-600', desc: 'We value long-term compounding over overnight riches. Our philosophy focuses on repeatable processes that deliver consistent results month after month.' },
    { title: 'Mindset', icon: Brain, color: 'from-purple-400 to-purple-600', desc: 'Trading is 90% psychology. We help you master your emotions, overcome cognitive biases, and build the mental toughness required for high-stakes trading.' },
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-bg-main relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1700px] mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter">
            Our Trading <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-primary to-gold">Philosophy</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Success in the markets isn't about luck. It's about a systematic approach built on four unshakeable pillars that define everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group h-full"
            >
              <div className="h-full bg-white/2 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 transition-all duration-500 hover:bg-white/4 hover:border-white/20 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                 <div className={cn("absolute -top-12 -right-12 w-40 h-40 opacity-5 rounded-full blur-3xl transition-opacity group-hover:opacity-10 bg-linear-to-br", p.color)} />
                 
                 <div className="mb-10 relative">
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-500 bg-linear-to-br p-px", p.color)}>
                       <div className="w-full h-full bg-bg-secondary rounded-[inherit] flex items-center justify-center">
                          <p.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                       </div>
                    </div>
                    <div className={cn("absolute inset-0 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity bg-linear-to-br", p.color)} />
                 </div>

                 <div className="space-y-4 grow">
                    <h4 className="text-white font-black text-xl uppercase tracking-tight group-hover:text-primary transition-colors">{p.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {p.desc}
                    </p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
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
    <section className="pt-10 pb-24 px-6 md:px-10 bg-bg-main">
      <div className="max-w-[1700px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
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
           <Card className="bg-bg-secondary border-white/10 p-10 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
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
    { name: 'Rohit Patel', role: 'Options Trader', text: 'I was a beginner and now I trade confidently thanks to Michael\'s mentorship.', profit: '+38.7%', img: avatar4 },
    { name: 'Sanya Gupta', role: 'Intraday Trader', text: 'The mentorship program is top-notch. I learned how to manage risk properly for the first time.', profit: '+29.4%', img: avatar5 },
    { name: 'Amit Verma', role: 'Scalper', text: 'Highly recommend! The price action strategies are very powerful and easy to understand.', profit: '+47.1%', img: avatar6 },
  ];

  // Duplicate for seamless marquee
  const extendedReviews = [...reviews, ...reviews];

  return (
    <section className="pt-10 pb-24 bg-bg-main relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1700px] mx-auto relative z-10 px-6 md:px-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter">
            What Our <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white to-primary">Students Say</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Real stories from traders who transformed their journey with TeamUS 369.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Gradients for fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-bg-main to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-bg-main to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ 
            repeat: Infinity, 
            duration: 40, 
            ease: "linear" 
          }}
          whileHover={{ animationPlayState: 'paused' }}
          className="flex gap-8 py-4 whitespace-nowrap"
        >
          {extendedReviews.map((rev, i) => (
            <div
              key={i}
              className="w-[400px] bg-white/2 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 transition-all duration-500 hover:bg-white/5 hover:border-white/10 relative overflow-hidden shrink-0"
            >
               {/* Quote Mark Decoration */}
               <div className="absolute top-4 right-6 text-white/5 font-serif text-[6rem] select-none pointer-events-none">"</div>
               
               <div className="flex flex-col space-y-6 whitespace-normal">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-4">
                          <div className="relative">
                             <div className="w-12 h-12 rounded-2xl overflow-hidden border border-white/10">
                                <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" />
                             </div>
                             <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-bg-main rounded-full border border-white/10 flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                             </div>
                          </div>
                          <div>
                             <h4 className="text-white font-black text-[14px] tracking-tight">{rev.name}</h4>
                             <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">{rev.role}</p>
                          </div>
                       </div>
                       
                       <div className="flex flex-col items-end">
                          <span className="text-emerald-500 font-black text-base tracking-tighter">{rev.profit}</span>
                          <span className="text-[7px] text-gray-500 font-black uppercase tracking-widest">Growth</span>
                       </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed font-medium italic relative z-10">
                      "{rev.text}"
                    </p>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                       <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                             <Star key={i} className="w-3 h-3 text-gold fill-gold" />
                          ))}
                       </div>

                    </div>
                 </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



function ContactBannerSection() {
  return (
    <section className="relative overflow-hidden min-h-[500px] max-md:min-h-auto flex items-center group">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105">
        <img src={editImage} alt="Banner Background" className="w-full h-full object-cover max-md:object-[center_top]" />
        {/* Mobile Overlay */}
        <div className="absolute inset-0 bg-black/60 md:hidden" />
        <div className="absolute inset-0 bg-linear-to-l from-bg-main via-bg-main/20 to-transparent" />
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
