import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, MicOff, Video, VideoOff, Users, MessageSquare, 
  Hand, Radio, MoreHorizontal, LogOut, HelpCircle, 
  ChevronDown, Search, Download, FileText, CheckCircle,
  TrendingUp, BarChart3, Monitor, ScreenShare, StopCircle,
  Settings, Bell, Share2, Award, Layout, Calendar,
  Target, Info, Globe, Play, Plus, ThumbsUp
} from 'lucide-react';
import { Button, Badge, Card } from '@/src/components/UI';
import { cn } from '@/src/lib/utils';

// Generated Professional Assets
import trader1 from '../trader_1.png'; // Rahul Mehta (Instructor)
import trader2 from '../trader_2.png'; // Aarav Sharma
import trader3 from '../trader_3.png'; // Neha Patel
import trader4 from '../trader_4.png'; // Vikram Singh
import trader5 from '../trader_5.png'; // Priya Nair
import trader6 from '../trader_6.png'; // Rohan Verma
import logoMain from '../logo_teamus.png';
import avatarPlaceholder from '../avatar_1.png';

export default function LiveSession() {
  const [activeTab, setActiveTab] = React.useState('Participants');
  const [isMuted, setIsMuted] = React.useState(true);
  const [isVideoOn, setIsVideoOn] = React.useState(false);
  const [isSharing, setIsSharing] = React.useState(true);
  const [isRecording, setIsRecording] = React.useState(true);
  const [pinnedId, setPinnedId] = React.useState('Rahul Mehta');

  const handlePin = (name: string) => {
    setPinnedId(pinnedId === name ? '' : name);
  };

  // Participant Data with unique images
  const participants = [
    { name: 'Rahul Mehta', img: trader1, role: 'Instructor', isMicOn: true, isVidOn: true, isSharing: true },
    { name: 'Aarav Sharma', img: trader2, role: 'Student', isMicOn: false, isVidOn: false },
    { name: 'Neha Patel', img: trader3, role: 'Co-Host', isMicOn: false, isVidOn: false },
    { name: 'Vikram Singh', img: trader4, role: 'Student', isMicOn: true, isVidOn: false },
    { name: 'Priya Nair', img: trader5, role: 'Student', isMicOn: false, isVidOn: true },
    { name: 'Rohan Verma', img: trader6, role: 'Student', isMicOn: false, isVidOn: false },
  ];

  // Tab Content Helper
  const renderTabContent = () => {
    switch(activeTab) {
      case 'Chat':
        return (
          <div className="flex-1 space-y-6 flex flex-col justify-end pt-4">
            {[
              { name: 'Aarav Sharma', img: trader2, time: '11:32 AM', msg: 'Can you explain this breakout again?' },
              { name: 'Vikram Singh', img: trader4, time: '11:33 AM', msg: 'Yes, please show another example.' },
              { name: 'Neha Patel', img: trader3, time: '11:34 AM', msg: 'Thank you! 🙌' }
            ].map((chat, i) => (
              <div key={i} className="flex gap-3">
                 <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 shrink-0">
                    <img src={chat.img} alt={chat.name} className="w-full h-full object-cover" />
                 </div>
                 <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                       <span className="text-[11px] font-black text-white">{chat.name}</span>
                       <span className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">{chat.time}</span>
                    </div>
                    <div className="p-3 bg-white/5 rounded-2xl rounded-tl-none border border-white/5 max-w-[90%]">
                       <p className="text-[12px] text-gray-300 leading-relaxed">{chat.msg}</p>
                    </div>
                 </div>
              </div>
            ))}
            
            <div className="flex gap-3 justify-end">
              <div className="space-y-1.5 text-right flex flex-col items-end">
                 <div className="flex items-center gap-2 justify-end">
                    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">11:34 AM</span>
                    <span className="text-[11px] font-black text-[#F4C542]">You</span>
                 </div>
                 <div className="p-3 bg-[#F4C542]/10 border border-[#F4C542]/20 rounded-2xl rounded-tr-none max-w-[90%]">
                    <p className="text-[12px] text-gray-200 leading-relaxed">Sure, I will share one more chart.</p>
                 </div>
              </div>
            </div>
          </div>
        );
      case 'Q&A':
        return (
          <div className="space-y-6 pt-4">
            <div className="p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10">
              <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-2">Top Question</p>
              <p className="text-xs font-bold text-white mb-4">How do we identify the difference between a trap and a real breakout in Nifty?</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-white/10">
                    <img src={trader2} alt="Student" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400">Aarav S.</span>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1.5 text-blue-500 text-[10px] font-black"><ThumbsUp className="w-3.5 h-3.5" /> 24</button>
                  <button className="text-[10px] font-black text-gray-500 uppercase">Answered</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Polls':
        return (
          <div className="space-y-6 pt-4">
            <div className="p-5 bg-white/[0.02] rounded-2xl border border-white/5 space-y-5">
              <div>
                <p className="text-[11px] font-black text-white mb-2 tracking-tight">What is the next likely move for NIFTY 50 according to the chart?</p>
                <p className="text-[9px] text-gray-500 uppercase font-bold">128 votes • Live</p>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: 'Bullish Breakout', percent: 65, active: true },
                  { label: 'Bearish Reversal', percent: 25, active: false },
                  { label: 'Sideways Consolidaton', percent: 10, active: false }
                ].map((opt, i) => (
                  <button key={i} className="w-full group text-left">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-tight mb-1.5">
                      <span className={opt.active ? "text-[#F4C542]" : "text-gray-400"}>{opt.label}</span>
                      <span>{opt.percent}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full transition-all duration-1000", opt.active ? "bg-[#F4C542]" : "bg-white/10")} style={{ width: `${opt.percent}%` }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      default: // Participants
        return (
          <div className="space-y-8 pt-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input className="w-full h-11 bg-white/5 rounded-xl border border-white/5 pl-10 pr-4 text-[11px] font-bold focus:outline-none focus:border-[#F4C542]/30 transition-all" placeholder="Search participants..." />
            </div>

            {/* Instructor */}
            <div className="space-y-4">
               <p className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] px-1">Instructor (1)</p>
               <div 
                onClick={() => handlePin('Rahul Mehta')}
                className={cn(
                  "flex items-center justify-between p-2 rounded-xl transition-all cursor-pointer",
                  pinnedId === 'Rahul Mehta' ? "bg-blue-600/20 border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)]" : "bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10"
                )}
               >
                  <div className="flex items-center gap-3">
                     <div className={cn(
                       "w-9 h-9 rounded-lg border-2 p-0.5 overflow-hidden transition-all",
                       pinnedId === 'Rahul Mehta' ? "border-blue-400 scale-110 shadow-lg" : "border-blue-500/40"
                     )}>
                        <img src={trader1} className="w-full h-full object-cover" alt="Mentor" />
                     </div>
                     <div>
                        <p className="text-[11px] font-black text-white">Rahul Mehta</p>
                        <p className="text-[8px] font-black text-blue-500 uppercase tracking-widest mt-0.5">Host • Instructor</p>
                     </div>
                  </div>
                  <div className="flex gap-2.5">
                     {pinnedId === 'Rahul Mehta' && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />}
                     <Mic className="w-4 h-4 text-[#00FF85]" />
                     <Video className="w-4 h-4 text-[#00FF85]" />
                     <Monitor className="w-4 h-4 text-blue-500" />
                  </div>
               </div>
            </div>

            {/* Students */}
            <div className="space-y-4">
               <p className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] px-1">Students (26)</p>
               {participants.slice(1).map((s, i) => (
                 <div 
                  key={i} 
                  onClick={() => handlePin(s.name)}
                  className={cn(
                    "flex items-center justify-between group p-2 rounded-xl transition-all cursor-pointer",
                    pinnedId === s.name ? "bg-[#F4C542]/10 border border-[#F4C542]/20" : "hover:bg-white/[0.02]"
                  )}
                 >
                    <div className="flex items-center gap-3">
                       <div className={cn(
                         "w-9 h-9 rounded-lg border border-white/5 overflow-hidden transition-all duration-300",
                         pinnedId === s.name && "border-[#F4C542] scale-105"
                       )}>
                          <img src={s.img} className="w-full h-full object-cover" alt={s.name} />
                       </div>
                       <div>
                          <p className={cn("text-[11px] font-black transition-colors", pinnedId === s.name ? "text-[#F4C542]" : "text-gray-400 group-hover:text-white")}>{s.name}</p>
                          {s.role === 'Co-Host' && <p className="text-[8px] font-bold text-[#F4C542] uppercase tracking-tighter">Co-Host</p>}
                       </div>
                    </div>
                    <div className={cn("flex gap-2.5 transition-all", pinnedId === s.name ? "opacity-100" : "opacity-30 group-hover:opacity-100")}>
                       {pinnedId === s.name && <div className="w-1 h-1 bg-[#F4C542] rounded-full mt-1.5" />}
                       {s.isMicOn ? <Mic className="w-4 h-4 text-[#00FF85]" /> : <MicOff className="w-4 h-4 text-red-500" />}
                       {s.isVidOn ? <Video className="w-4 h-4 text-[#00FF85]" /> : <VideoOff className="w-4 h-4 text-red-500" />}
                       <MoreHorizontal className="w-4 h-4 text-gray-600" />
                    </div>
                 </div>
               ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#020617] text-white font-sans flex flex-col overflow-hidden selection:bg-gold/30">
      {/* Top Header */}
      <header className="h-12 border-b border-white/5 px-6 flex items-center justify-between bg-[#0B1020]/90 backdrop-blur-xl shrink-0">
        <div className="flex items-center gap-8">
          {/* New Logo */}
          <div className="flex items-center gap-3">
            <img src={logoMain} className="h-9 w-auto object-contain" alt="TEAMUS 369" />
          </div>

          <div className="h-6 w-px bg-white/10" />

          {/* Session Title & Live Badge */}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-white/10 shrink-0">
               <img src={trader1} className="w-full h-full object-cover" alt="Instructor" />
            </div>
            <h1 className="text-sm font-bold tracking-tight">Live Class: Price Action Mastery</h1>
            <Badge className="bg-[#00FF85]/10 text-[#00FF85] border border-[#00FF85]/20 text-[8px] font-black px-2 py-0.5 flex items-center gap-1.5">
               <div className="w-1.5 h-1.5 bg-[#00FF85] rounded-full animate-pulse" /> LIVE
            </Badge>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Started 00:24:15</span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="text-gray-400 hover:text-white transition-colors hover:scale-110 transition-transform"><HelpCircle className="w-5 h-5" /></button>
          <button className="text-gray-400 hover:text-white transition-colors hover:scale-110 transition-transform"><MoreHorizontal className="w-5 h-5" /></button>
          <Link to="/live-classes">
            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white border-none text-[10px] font-black h-8 px-5 rounded-lg shadow-lg shadow-red-600/10 transition-all hover:-translate-y-0.5">
              Leave Class
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col p-4 space-y-4 overflow-hidden">
          
          {/* Attendee Row */}
          <div className="grid grid-cols-7 gap-2.5 h-[90px] shrink-0">
            {participants.map((p, i) => (
              <div 
                key={i} 
                onClick={() => handlePin(p.name)}
                className={cn(
                "relative rounded-xl overflow-hidden border group cursor-pointer transition-all duration-300",
                pinnedId === p.name ? "border-[#F4C542] ring-4 ring-[#F4C542]/20 scale-105 z-10" : (p.role === 'Instructor' ? "border-blue-500 ring-4 ring-blue-500/10 shadow-2xl" : "border-white/5 bg-[#0B1020]")
              )}>
                <img src={p.img} className={cn("w-full h-full object-cover transition-all duration-500", p.role !== 'Instructor' && "group-hover:scale-110")} alt={p.name} />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                   {p.role === 'Instructor' && <Badge className="bg-blue-500 text-white border-none text-[7px] font-black px-2 py-0 uppercase">Instructor</Badge>}
                   {pinnedId === p.name && <Badge className="bg-[#F4C542] text-black border-none text-[7px] font-black px-2 py-0 uppercase">Pinned</Badge>}
                </div>
                <div className="absolute bottom-2 left-2">
                  <p className="text-[10px] font-bold text-white tracking-tight">{p.name}</p>
                </div>
                <div className="absolute bottom-2 right-2 flex gap-1 items-center">
                   {p.isMicOn ? <Mic className="w-3 h-3 text-[#00FF85] animate-pulse" /> : <MicOff className="w-3 h-3 text-red-500" />}
                   {p.isSharing && <Monitor className="w-3 h-3 text-blue-400" />}
                </div>
              </div>
            ))}

            <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 transition-colors group">
               <p className="text-xl font-black group-hover:scale-110 transition-transform">+24</p>
               <p className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-1">More</p>
            </div>
          </div>

          {/* Main Stage */}
          <div className="flex-1 bg-[#0B1020] rounded-xl border border-white/5 overflow-hidden flex flex-col shadow-inner">
            <div className="h-10 px-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                 <Monitor className="w-4 h-4 text-gray-500" />
                 <span className="text-[11px] font-bold text-gray-300">Rahul Mehta is sharing screen</span>
              </div>
              <div className="flex items-center gap-4">
                 <button className="text-[10px] font-black text-red-500 hover:text-red-400 transition-colors">Stop Sharing</button>
                 <div className="h-4 w-px bg-white/10" />
                 <button className="text-[10px] font-bold text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors">
                   View <ChevronDown className="w-3 h-3" />
                 </button>
              </div>
            </div>
            
            <div className="flex-1 relative flex">
              <div className="w-12 border-r border-white/5 flex flex-col items-center py-4 gap-5 bg-black/20 shrink-0">
                 {[TrendingUp, BarChart3, Monitor, Layout, ScreenShare, Target, Info, Globe].map((Icon, i) => (
                    <button key={i} className="text-gray-500 hover:text-white transition-all hover:scale-110">
                       <Icon className="w-4 h-4" />
                    </button>
                 ))}
              </div>

              <div className="flex-1 relative bg-[#020617] overflow-hidden group">
                 <div className="absolute top-4 left-6 right-6 flex justify-between items-start z-10 pointer-events-none">
                    <div className="space-y-1">
                       <div className="flex items-center gap-4">
                          <span className="text-2xl font-black tracking-tighter uppercase">NIFTY 50</span>
                          <span className="text-xs font-bold text-gray-500">15m</span>
                          <div className="flex items-center gap-3 ml-4">
                             <TrendingUp className="w-4 h-4 text-[#00FF85]" />
                             <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Indicators</span>
                             <ChevronDown className="w-3 h-3 text-gray-600" />
                          </div>
                       </div>
                       <p className="text-[11px] font-bold text-gray-600">Nifty 50 Index • 15 • NSE • <span className="text-red-500">22,101.30 (-0.11%)</span></p>
                    </div>
                    <div className="flex gap-2 pointer-events-auto">
                       <div className="flex flex-col items-center bg-red-600/10 border border-red-600/20 px-4 py-1.5 rounded-lg">
                          <span className="text-[9px] font-black text-red-500 uppercase">SELL</span>
                          <span className="text-[11px] font-black text-white leading-none mt-0.5">22,101.30</span>
                       </div>
                       <div className="flex flex-col items-center bg-blue-600/10 border border-blue-600/20 px-4 py-1.5 rounded-lg">
                          <span className="text-[9px] font-black text-blue-500 uppercase">BUY</span>
                          <span className="text-[11px] font-black text-white leading-none mt-0.5">22,101.30</span>
                       </div>
                    </div>
                 </div>

                 <div className="absolute inset-0 flex items-center justify-center p-12">
                    <svg viewBox="0 0 1000 400" className="w-full h-full overflow-visible opacity-80">
                       <path d="M0,250 L100,230 L200,260 L300,200 L400,240 L500,150 L600,220 L700,180 L800,230 L900,140 L1000,170" 
                             fill="none" stroke="#EF4444" strokeWidth="2" />
                       <path d="M300,200 L400,100 L500,180 L600,80 L700,150 L800,50 L900,110 L1000,40" 
                             fill="none" stroke="#00FF85" strokeWidth="2" strokeDasharray="6,4" />
                       <line x1="200" y1="120" x2="800" y2="120" stroke="#F4C542" strokeWidth="1.5" strokeDasharray="4,4" />
                       <text x="500" y="110" textAnchor="middle" fill="#F4C542" className="text-[12px] font-black uppercase italic tracking-widest">Resistance Zone</text>
                       <line x1="300" y1="280" x2="900" y2="280" stroke="#F4C542" strokeWidth="1.5" strokeDasharray="4,4" />
                       <text x="600" y="300" textAnchor="middle" fill="#F4C542" className="text-[12px] font-black uppercase italic tracking-widest">Support Zone</text>
                       <g transform="translate(500, 150)">
                          <circle r="6" fill="#F4C542" className="animate-ping opacity-20" />
                          <circle r="4" fill="#F4C542" />
                          <text x="12" y="5" fill="white" className="text-[12px] font-black uppercase italic">Entry</text>
                       </g>
                    </svg>
                 </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3 shrink-0 h-[150px]">
             <Card className="bg-[#0B1020] border-white/5 p-3.5 rounded-xl flex flex-col shadow-2xl">
                <h4 className="text-[9px] font-black uppercase tracking-tight text-gray-500 mb-3">Instructor's Notes</h4>
                <div className="flex-1 space-y-2 overflow-hidden text-[10px]">
                   {[
                     'Identify the key support and resistance zones.',
                     'Wait for price confirmation before entry.',
                     'Always use proper risk management.'
                   ].map((note, i) => (
                     <div key={i} className="flex gap-3 text-[11px] text-gray-300 leading-tight">
                        <CheckCircle className="w-3.5 h-3.5 text-[#F4C542] shrink-0" />
                        <p className="font-medium">{note}</p>
                     </div>
                   ))}
                </div>
             </Card>

             <Card className="bg-[#0B1020] border-white/5 p-3.5 rounded-xl flex flex-col shadow-2xl">
                <h4 className="text-[9px] font-black uppercase tracking-tight text-gray-500 mb-3">Class Resources</h4>
                <div className="flex-1 space-y-2 overflow-hidden">
                   {[
                     { name: 'Price Action PDF Guide', size: '2.4 MB' },
                     { name: 'Support & Resistance Worksheet', size: '1.8 MB' }
                   ].map((res, i) => (
                     <div key={i} className="flex items-center justify-between group cursor-pointer bg-white/[0.02] p-2 rounded-lg border border-white/5 hover:border-[#F4C542]/20 transition-all">
                        <div className="flex items-center gap-3">
                           <div className="w-7 h-7 rounded-md bg-red-600/10 flex items-center justify-center text-red-600">
                              <FileText className="w-3.5 h-3.5" />
                           </div>
                           <p className="text-[10px] font-bold text-white group-hover:text-[#F4C542] transition-colors">{res.name}</p>
                        </div>
                        <Download className="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition-colors" />
                     </div>
                   ))}
                </div>
             </Card>

             <Card className="bg-[#0B1020] border-white/5 p-3.5 rounded-xl flex flex-col shadow-2xl">
                <div className="flex justify-between items-center mb-3">
                   <h4 className="text-[9px] font-black uppercase tracking-tight text-gray-500">Upcoming Classes</h4>
                   <button className="text-[9px] font-black text-[#F4C542] uppercase hover:underline">View All</button>
                </div>
                <div className="flex-1 space-y-2 overflow-hidden">
                   {[
                     { title: 'Swing Trading Blueprint', time: 'May 21' },
                     { title: 'Risk Management Masterclass', time: 'May 22' }
                   ].map((cls, i) => (
                     <div key={i} className="flex items-center justify-between p-2 bg-white/[0.02] rounded-lg border border-white/5">
                        <div className="flex gap-2">
                           <div className="w-7 h-7 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-500">
                              <Calendar className="w-3.5 h-3.5" />
                           </div>
                           <div>
                              <p className="text-[10px] font-bold text-white line-clamp-1">{cls.title}</p>
                              <p className="text-[8px] text-gray-500 font-bold uppercase tracking-tighter">{cls.time}</p>
                           </div>
                        </div>
                        <button className="text-[8px] font-black text-blue-500 uppercase px-2 py-1 rounded border border-blue-500/20 hover:bg-blue-500/10 transition-all">Join</button>
                     </div>
                   ))}
                </div>
             </Card>
          </div>
        </div>

        <aside className="w-[340px] border-l border-white/5 flex flex-col bg-[#0B1020]/60 backdrop-blur-3xl shrink-0">
          <div className="flex border-b border-white/5 px-4">
             {['Participants (28)', 'Chat', 'Q&A', 'Polls'].map((tab) => (
               <button 
                key={tab}
                onClick={() => setActiveTab(tab.split(' ')[0])}
                className={cn(
                  "flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all relative",
                  activeTab === tab.split(' ')[0] ? "text-[#F4C542]" : "text-gray-500 hover:text-white"
                )}
               >
                 {tab}
                 {activeTab === tab.split(' ')[0] && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F4C542]" />}
               </button>
             ))}
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col scrollbar-hide">
             {renderTabContent()}
          </div>

          <div className="p-4 border-t border-white/5 bg-black/20">
             {activeTab === 'Chat' ? (
               <div className="relative">
                  <input className="w-full h-11 bg-white/5 rounded-xl border border-white/5 pl-5 pr-14 text-[11px] font-bold focus:outline-none focus:border-[#F4C542]/40 transition-all" placeholder="Type a message..." />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-[#F4C542] hover:scale-110 transition-all">
                     <Share2 className="w-5 h-5 rotate-90" />
                  </button>
               </div>
             ) : (
               <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-white/5 rounded-lg text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all border border-white/5">Mute All</button>
                  <button className="flex-1 py-3 bg-blue-600/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-blue-500 hover:bg-blue-600 hover:text-white transition-all border border-blue-600/30">Ask to Unmute</button>
               </div>
             )}
          </div>
        </aside>
      </main>

      <footer className="h-18 bg-[#0B1020] border-t border-white/5 px-8 flex items-center justify-between shadow-2xl shrink-0">
        <div className="flex items-center gap-6">
          <button onClick={() => setIsMuted(!isMuted)} className="group flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-all">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border transition-all", isMuted ? "bg-white/5 border-white/5" : "bg-[#00FF85]/10 border-[#00FF85]/30")}>
               {isMuted ? <MicOff className="w-5 h-5 text-red-500" /> : <Mic className="w-5 h-5 text-[#00FF85]" />}
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest text-gray-600 group-hover:text-gray-400">{isMuted ? 'Unmute' : 'Mute'}</span>
          </button>
          <button onClick={() => setIsVideoOn(!isVideoOn)} className="group flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-all">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border transition-all", isVideoOn ? "bg-[#00FF85]/10 border-[#00FF85]/30" : "bg-white/5 border-white/5")}>
               {isVideoOn ? <Video className="w-5 h-5 text-[#00FF85]" /> : <VideoOff className="w-5 h-5 text-red-500" />}
            </div>
            <span className="text-[8px] font-black uppercase tracking-widest text-gray-600 group-hover:text-gray-400">{isVideoOn ? 'Stop Video' : 'Start Video'}</span>
          </button>
        </div>

        <div className="flex items-center gap-8">
           {[
             { icon: <Users className="w-5 h-5" />, label: 'Participants', count: '28' },
             { icon: <MessageSquare className="w-5 h-5" />, label: 'Chat' },
             { icon: <HelpCircle className="w-5 h-5" />, label: 'Q&A', count: '3', badge: 'bg-red-600' },
             { icon: <BarChart3 className="w-5 h-5" />, label: 'Polls' }
           ].map((ctrl, i) => (
             <button key={i} className="group flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-all relative">
                <div className="transition-transform group-hover:scale-110">{ctrl.icon}</div>
                <span className="text-[8px] font-black uppercase tracking-widest text-gray-600 group-hover:text-gray-400">{ctrl.label}</span>
                {ctrl.count && (
                  <div className={cn("absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-black text-white", ctrl.badge || "bg-white/20")}>
                    {ctrl.count}
                  </div>
                )}
             </button>
           ))}
           
           <div className="h-8 w-px bg-white/10" />

           <button onClick={() => setIsSharing(!isSharing)} className={cn("group flex flex-col items-center gap-1.5 transition-all", isSharing ? "text-[#00FF85]" : "text-gray-500")}>
              <ScreenShare className="w-5 h-5" />
              <span className="text-[8px] font-black uppercase tracking-widest">Share Screen</span>
           </button>
           <button className="group flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-all">
              <Hand className="w-5 h-5" />
              <span className="text-[8px] font-black uppercase tracking-widest">Raise Hand</span>
           </button>
           <button onClick={() => setIsRecording(!isRecording)} className="group flex flex-col items-center gap-1.5 transition-all">
              <div className={cn("w-2 h-2 rounded-full mb-0.5", isRecording ? "bg-red-600 animate-pulse" : "bg-gray-600")} />
              <span className="text-[8px] font-black uppercase tracking-widest text-gray-600 group-hover:text-gray-400">{isRecording ? 'Recording' : 'Record'}</span>
           </button>
        </div>

        <div className="flex items-center">
           <Link to="/live-classes">
              <button className="px-6 py-3 bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white rounded-xl border border-red-600/20 text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-2.5 shadow-xl hover:shadow-red-600/20">
                 <LogOut className="w-4 h-4" /> Leave Class
              </button>
           </Link>
        </div>
      </footer>
    </div>
  );
}
