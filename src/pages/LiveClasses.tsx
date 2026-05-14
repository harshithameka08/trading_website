import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Card } from "@/src/components/UI";
import { 
  Play, Users, Calendar, Clock, Radio, ChevronRight, 
  ChevronLeft, CheckCircle, Video, Monitor, Layout, 
  Globe, Search, Bell, TrendingUp, Info, HelpCircle, Target
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

// Assets
import avatar1 from '../avatar_1.png';
import coursePriceAction from '../course_price_action.png';
import editImage from '../editimage.png';

export default function LiveClasses() {
  const [activeTab, setActiveTab] = React.useState('Upcoming Live Classes');

  const liveClasses = [
    {
      id: 1,
      status: 'LIVE NOW',
      statusColor: 'bg-[#00FF85]',
      viewers: 245,
      title: 'Live Market Analysis',
      subtitle: 'NIFTY & BANKNIFTY',
      desc: 'Real-time market analysis and trading opportunities in index.',
      mentor: 'Mr. Arjun Mehta',
      exp: '10+ Years Exp.',
      time: '09:30 AM',
      duration: '2 Hours',
      btnText: 'JOIN LIVE ROOM',
      btnColor: 'bg-[#00FF85] hover:bg-[#00D16D]',
      isLive: true
    },
    {
      id: 2,
      status: 'STARTS IN 02:15:30',
      statusColor: 'bg-[#F4C542]',
      viewers: 180,
      title: 'Options Trading Strategies',
      subtitle: 'Option Buying & Selling',
      desc: 'Learn powerful option buying and selling strategies with live examples.',
      mentor: 'Mr. Vivek Singh',
      exp: '8+ Years Exp.',
      time: '11:30 AM',
      duration: '2 Hours',
      btnText: 'SET REMINDER',
      btnColor: 'bg-[#F4C542] hover:bg-[#D4AF37]'
    },
    {
      id: 3,
      status: 'STARTS IN 05:45:30',
      statusColor: 'bg-[#A855F7]',
      viewers: 120,
      title: 'Price Action Mastery',
      subtitle: 'Support, Resistance & Trend',
      desc: 'Master price action techniques to find high probability setups.',
      mentor: 'Mr. Neha Patel',
      exp: '7+ Years Exp.',
      time: '03:00 PM',
      duration: '2 Hours',
      btnText: 'SET REMINDER',
      btnColor: 'bg-[#F4C542] hover:bg-[#D4AF37]'
    },
    {
      id: 4,
      status: 'STARTS TOMORROW',
      statusColor: 'bg-blue-500',
      viewers: 120,
      title: 'Swing Trading Blueprint',
      subtitle: 'Identify High Probability Trades',
      desc: 'Learn swing trading approach for consistent profits.',
      mentor: 'Mr. Aditya Raj',
      exp: '9+ Years Exp.',
      time: '10:00 AM',
      duration: '2 Hours',
      btnText: 'SET REMINDER',
      btnColor: 'bg-[#F4C542] hover:bg-[#D4AF37]'
    }
  ];

  return (
    <div className="bg-[#020617] min-h-screen text-white font-sans selection:bg-gold/30 pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-6 md:pt-16 md:pb-8 overflow-visible">
        {/* Background Bull Graphic */}
        <div className="absolute -top-12 right-0 w-[700px] h-full opacity-30 pointer-events-none z-0">
          <img src={editImage} alt="Bull Graphic" className="w-full h-full object-contain object-right" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span className="text-[#00FF85]">Live</span> Classes
              </h1>
              <div className="text-gray-400 text-sm font-bold leading-relaxed space-y-1">
                <p>Join our live interactive sessions with market experts.</p>
                <p>Learn, ask questions and trade the markets with confidence.</p>
              </div>
            </div>

            {/* Stats Bar (High Density) */}
            <div className="bg-[#050816] border border-white/5 rounded-2xl p-6 flex flex-wrap md:flex-nowrap items-center gap-10 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F4C542]/10 flex items-center justify-center">
                  <Video className="w-5 h-5 text-[#F4C542] fill-[#F4C542]" />
                </div>
                <div>
                  <p className="text-lg font-black leading-none">50+</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Live Classes / Month</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-l border-white/5 pl-10">
                <div className="w-10 h-10 rounded-lg bg-[#F4C542]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#F4C542] fill-[#F4C542]" />
                </div>
                <div>
                  <p className="text-lg font-black leading-none">12K+</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Students Joined</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-l border-white/5 pl-10">
                <div className="w-10 h-10 rounded-lg bg-[#F4C542]/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#F4C542]" />
                </div>
                <div>
                  <p className="text-lg font-black leading-none">10+</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Expert Mentors</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-l border-white/5 pl-10">
                <div className="w-10 h-10 rounded-lg bg-[#00FF85]/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#00FF85] fill-[#00FF85]/20" />
                </div>
                <div>
                  <p className="text-lg font-black leading-none">100%</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Interactive Sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <div className="flex gap-8 border-b border-white/5 overflow-x-auto no-scrollbar">
          {['Upcoming Live Classes', 'Ongoing Live Classes', 'Completed Live Classes'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "py-4 text-sm font-bold whitespace-nowrap transition-all border-b-2",
                activeTab === tab ? "border-[#F4C542] text-[#F4C542]" : "border-transparent text-gray-500 hover:text-white"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <section className="px-6 py-4">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Live Class Cards */}
          <div className="lg:col-span-9 space-y-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {liveClasses.map((cls) => (
                <Card key={cls.id} className="bg-[#0B1020] border-white/5 p-0 overflow-hidden rounded-3xl shadow-2xl group transition-all hover:border-white/10 flex flex-col">
                  {/* Thumbnail Area */}
                  <div className="relative h-[180px] overflow-hidden">
                    <img src={coursePriceAction} alt={cls.title} className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0B1020] via-transparent to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                       <div className={cn("px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest text-white shadow-lg flex items-center gap-1.5", cls.statusColor)}>
                          {cls.isLive && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
                          {cls.status}
                       </div>
                       <div className="flex items-center gap-1.5 text-white/80 text-[10px] font-bold">
                          <Users className="w-3 h-3" /> {cls.viewers}
                       </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <Play className="w-5 h-5 fill-white text-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 space-y-4 flex flex-1 flex-col">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-white group-hover:text-[#F4C542] transition-colors">{cls.title}</h3>
                      <p className="text-[11px] font-bold text-[#F4C542] uppercase tracking-wide">{cls.subtitle}</p>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2">{cls.desc}</p>
                    
                    {/* Mentor Info */}
                    <div className="flex items-center gap-3 py-3 border-y border-white/5">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
                        <img src={avatar1} alt={cls.mentor} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{cls.mentor}</p>
                        <p className="text-[9px] text-gray-500 uppercase font-medium">{cls.exp}</p>
                      </div>
                    </div>

                    {/* Footer Info */}
                    <div className="flex justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                       <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-gray-600" /> Today
                          <span className="opacity-40 ml-1">{cls.time}</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-gray-600" /> Duration
                          <span className="opacity-40 ml-1">{cls.duration}</span>
                       </div>
                    </div>

                    <div className="pt-4 mt-auto">
                      <Link to="/live-session" className="block w-full">
                        <Button className={cn("w-full h-12 rounded-xl text-[11px] font-black uppercase tracking-widest text-black shadow-xl", cls.btnColor)}>
                           {cls.isLive ? <Video className="w-4 h-4 mr-2 fill-black" /> : <Bell className="w-4 h-4 mr-2 fill-black" />}
                           {cls.btnText}
                        </Button>
                      </Link>
                      <button className="w-full text-[10px] font-bold text-gray-500 hover:text-white mt-4 flex items-center justify-center gap-2 transition-colors">
                        <Calendar className="w-3 h-3" /> Add to Calendar
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="flex justify-center pt-8">
               <button className="px-10 py-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">
                 VIEW ALL LIVE CLASSES
               </button>
            </div>
          </div>

          {/* Right Column: Sidebars */}
          <div className="lg:col-span-3 space-y-6">
            {/* Live Class Schedule */}
            <div className="bg-[#0B1020] border border-white/5 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xs font-black uppercase tracking-tight">Live Class Schedule</h4>
                <button className="text-[9px] font-black text-[#F4C542] hover:text-gold transition-colors">View Full Calendar</button>
              </div>

              <div className="space-y-4">
                {[
                  { month: 'MAY', day: '20', time: '09:30 AM - 11:30 AM', title: 'Live Market Analysis', status: 'LIVE', statusColor: 'text-[#00FF85] border-[#00FF85]/20 bg-[#00FF85]/5' },
                  { month: 'MAY', day: '20', time: '11:30 AM - 01:30 PM', title: 'Options Trading Strategies', status: 'UPCOMING', statusColor: 'text-[#F4C542] border-[#F4C542]/20 bg-[#F4C542]/5' },
                  { month: 'MAY', day: '20', time: '03:00 PM - 05:00 PM', title: 'Price Action Mastery', status: 'UPCOMING', statusColor: 'text-[#F4C542] border-[#F4C542]/20 bg-[#F4C542]/5' },
                  { month: 'MAY', day: '21', time: '10:00 AM - 12:00 PM', title: 'Swing Trading Blueprint', status: 'UPCOMING', statusColor: 'text-[#F4C542] border-[#F4C542]/20 bg-[#F4C542]/5' },
                  { month: 'MAY', day: '21', time: '03:00 PM - 05:00 PM', title: 'Risk Management Masterclass', status: 'UPCOMING', statusColor: 'text-[#F4C542] border-[#F4C542]/20 bg-[#F4C542]/5' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 group cursor-pointer">
                     <div className="flex flex-col items-center justify-center p-1.5 min-w-[45px] rounded-lg bg-white/5 border border-white/5 h-fit group-hover:border-white/20 transition-all">
                        <span className="text-[8px] font-black text-gray-500 uppercase tracking-tighter">{item.month}</span>
                        <span className="text-xs font-black text-white">{item.day}</span>
                     </div>
                     <div className="flex-1 space-y-1">
                        <h5 className="text-[10px] font-black text-white leading-tight group-hover:text-[#F4C542] transition-colors">{item.title}</h5>
                        <p className="text-[9px] text-gray-500 font-bold tracking-tight">{item.time}</p>
                     </div>
                     <div className={cn("px-2 py-0.5 rounded text-[7px] font-black uppercase h-fit border flex items-center gap-1", item.statusColor)}>
                        {item.status === 'LIVE' && <Radio className="w-2 h-2" />}
                        {item.status}
                     </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Join Live Classes? */}
            <div className="bg-[#0B1020] border border-white/5 rounded-2xl p-4 shadow-2xl relative overflow-hidden group">
               <div className="relative z-10 space-y-4">
                 <h4 className="text-xs font-black uppercase tracking-tight">Why Join Live Classes?</h4>
                 
                 <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="space-y-2.5">
                       {[
                         'Live interaction with experts',
                         'Real-time market analysis',
                         'Ask & get instant answers',
                         'Screensharing & charts',
                         'Recordings available'
                       ].map((feat, i) => (
                         <div key={i} className="flex items-center gap-2 text-[9px] text-gray-400 font-bold leading-tight">
                           <div className="w-3 h-3 rounded-full bg-[#F4C542]/10 flex items-center justify-center border border-[#F4C542]/20 shrink-0">
                             <CheckCircle className="w-1.5 h-1.5 text-[#F4C542]" />
                           </div>
                           <span>{feat}</span>
                         </div>
                       ))}
                    </div>

                    {/* Video Conference Simulation */}
                    <div className="relative rounded-lg overflow-hidden aspect-video border border-white/10 group-hover:border-white/20 transition-all shadow-inner">
                       <img src={coursePriceAction} alt="Conference" className="w-full h-full object-cover opacity-60" />
                       <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent p-2 flex flex-col justify-between">
                          <div className="flex justify-end">
                             <Badge className="bg-red-600 text-white border-none text-[6px] font-black px-1 py-0.5">LIVE</Badge>
                          </div>
                          <div className="flex gap-1">
                             {[avatar1, avatar1].map((av, i) => (
                               <div key={i} className="w-5 h-5 rounded-md overflow-hidden border border-white/20 bg-black/40">
                                  <img src={av} alt="Participant" className="w-full h-full object-cover opacity-40" />
                               </div>
                             ))}
                          </div>
                       </div>
                       <div className="absolute inset-0 flex items-center justify-center">
                          <img src={avatar1} alt="Mentor" className="w-10 h-10 rounded-full border border-white/20 object-cover shadow-2xl" />
                       </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Recording Portal */}
            <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 space-y-3 text-center">
               <div className="space-y-1">
                 <h4 className="text-[10px] font-black text-white uppercase tracking-tight">Can't join live?</h4>
                 <p className="text-[9px] text-gray-500 font-bold leading-relaxed px-1">No worries! All live classes are recorded and available for unlimited replays.</p>
               </div>
               <button className="w-full py-2 rounded-lg border border-white/10 hover:bg-white/20 text-[8px] font-black uppercase tracking-widest text-white transition-all">
                 View Recordings
               </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

