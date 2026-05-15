import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, MicOff, Video, VideoOff, Users, MessageSquare, 
  Hand, Radio, MoreHorizontal, LogOut, HelpCircle, 
  ChevronDown, Search, Download, FileText, CheckCircle,
  TrendingUp, BarChart3, Monitor, ScreenShare, StopCircle,
  Settings, Bell, Share2, Award, Layout, Calendar,
  Target, Info, Globe, Play, Plus, ThumbsUp, ShieldCheck,
  MousePointer2, Grid, Layers, Zap, X, MoreVertical, SearchIcon,
  Smile, Share, PieChart, Activity, Clock, Maximize2, Shield, Info as InfoIcon,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button, Badge, Card } from '@/src/components/UI';
import { cn } from '@/src/lib/utils';

// Asset imports
import trader1 from '../trader_1.png'; // Rahul Mehta
import trader2 from '../trader_2.png'; // Aarav Sharma
import trader3 from '../trader_3.png'; // Neha Patel
import trader4 from '../trader_4.png'; // Vikram Singh
import trader5 from '../trader_5.png'; // Priya Nair
import trader6 from '../trader_6.png'; // Rohan Verma
import logoMain from '../logo_teamus.png';

export default function LiveSession() {
  const [activeTab, setActiveTab] = React.useState('All');
  const [isMicOn, setIsMicOn] = React.useState(true);
  const [isVideoOn, setIsVideoOn] = React.useState(true);
  const [isHandRaised, setIsHandRaised] = React.useState(false);
  const [isSharing, setIsSharing] = React.useState(false);
  const [showMoreMenu, setShowMoreMenu] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeSidePanel, setActiveSidePanel] = React.useState<'people' | 'chat' | 'info' | 'security' | null>('people');

  const participants = [
    { name: 'Rahul Mehta (You)', img: trader1, role: 'Host • Instructor', isMicOn: isMicOn, isVidOn: isVideoOn, handRaised: isHandRaised, type: 'Instructor' },
    { name: 'Aarav Sharma', img: trader2, role: 'Student', isMicOn: false, isVidOn: true, handRaised: false, type: 'Student' },
    { name: 'Neha Patel', img: trader3, role: 'Co-host', isMicOn: false, isVidOn: true, handRaised: false, type: 'Instructor' }, // Changed to Instructor for testing
    { name: 'Vikram Singh', img: trader4, role: 'Student', isMicOn: false, isVidOn: false, handRaised: false, type: 'Student' },
    { name: 'Priya Nair', img: trader5, role: 'Student', isMicOn: false, isVidOn: true, handRaised: false, type: 'Student' },
    { name: 'Rohan Verma', img: trader6, role: 'Student', isMicOn: false, isVidOn: false, handRaised: true, type: 'Student' },
    { name: 'Karan Mehta', img: trader4, role: 'Student', isMicOn: false, isVidOn: false, handRaised: false, type: 'Student' },
    { name: 'Ananya Gupta', img: trader5, role: 'Student', isMicOn: false, isVidOn: false, handRaised: false, type: 'Student' },
    { name: 'Aditya Raj', img: trader6, role: 'Student', isMicOn: false, isVidOn: false, handRaised: false, type: 'Student' },
  ];

  const chatMessages = [
    { user: 'Neha Patel', message: 'The breakout looks solid on 15m.', time: '11:42 AM' },
    { user: 'Aarav Sharma', message: 'Should we wait for retest of 22,050?', time: '11:43 AM' },
    { user: 'Rahul Mehta', message: 'Exactly. Retest is key for RR.', time: '11:44 AM' },
  ];

  const togglePanel = (panel: 'people' | 'chat' | 'info' | 'security') => {
    setActiveSidePanel(prev => prev === panel ? null : panel);
  };

  // Filter participants based on activeTab and searchQuery
  const filteredParticipants = participants.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    
    if (activeTab === 'Instructors') return p.type === 'Instructor';
    if (activeTab === 'Raised Hands') return p.handRaised;
    return true; // For 'All'
  });

  return (
    <div className="fixed inset-0 z-50 bg-[#0F1117] text-white font-sans flex flex-col overflow-hidden">
      
      {/* --- TOP HEADER --- */}
      <header className="h-16 px-6 flex items-center justify-between bg-[#0F1117] border-b border-white/5 shrink-0 z-50">
        <div className="flex items-center gap-6">
          <img src={logoMain} className="h-8 w-auto object-contain" alt="TEAMUS 369" />
          <div className="flex flex-col">
             <div className="flex items-center gap-2">
                <h1 className="text-sm font-black tracking-widest uppercase">Price Action Mastery</h1>
                <span className="px-1.5 py-0.5 rounded bg-[#00FF88]/10 text-[#00FF88] text-[9px] font-black tracking-widest border border-[#00FF88]/20">LIVE</span>
             </div>
             <div className="flex items-center gap-2 text-[10px] text-gray-500 font-medium">
                <span>Started 00:24:15</span>
                <span>•</span>
                <span>28 Participants</span>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
           <div className="flex items-center gap-4">
              <HelpCircle className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
              <Grid className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
           </div>
           <Link to="/live-classes">
              <button className="flex items-center gap-2 bg-[#FF4D4D] hover:bg-red-600 px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all">
                 <LogOut className="w-4 h-4 rotate-180" /> Leave Class
              </button>
           </Link>
        </div>
      </header>

      {/* --- MAIN LAYOUT --- */}
      <div className="flex-1 flex overflow-hidden p-4 gap-4">
        
        {/* LEFT SECTION (CHART + VIDEO STRIP) */}
        <div className="flex-1 flex flex-col gap-4 overflow-hidden">
           
           {/* MAIN CHART AREA */}
           <div className="flex-1 bg-[#131722] rounded-xl border-2 border-[#00FF88]/40 overflow-hidden flex flex-col relative shadow-2xl">
              
              {/* Presenter Label Overlay */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl">
                 <img src={trader1} className="w-7 h-7 rounded-full object-cover border border-white/20" />
                 <p className="text-[11px] font-bold text-white/90">Rahul Mehta is presenting</p>
              </div>

              {/* Chart Header Tools */}
              <div className="h-10 px-4 flex items-center justify-between border-b border-white/5 bg-[#1e222d] z-10">
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 pr-4 border-r border-white/10">
                       <TrendingUp className="w-4 h-4 text-emerald-500" />
                       <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">NIFTY 50 Index • 15 • NSE</span>
                    </div>
                    <div className="flex items-center gap-4 text-[9px] font-black text-gray-500 uppercase tracking-[0.2em]">
                       <span className="text-[#00C2FF]">15m</span>
                       <button className="flex items-center gap-1.5 hover:text-white transition-colors"><Zap className="w-3.5 h-3.5" /> Indicators</button>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <button className="p-1.5 text-gray-400 hover:text-white"><Layout className="w-4 h-4" /></button>
                    <button className="p-1.5 text-gray-400 hover:text-white"><Maximize2 className="w-4 h-4" /></button>
                 </div>
              </div>

              <div className="flex-1 flex relative">
                 {/* Sidebar Toolbar */}
                 <div className="w-12 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-[#131722]">
                    {[MousePointer2, Activity, Layout, Layers, ShieldCheck, Target, Globe, Plus].map((Icon, i) => (
                       <button key={i} className="text-gray-600 hover:text-cyan-400 transition-all">
                          <Icon className="w-4.5 h-4.5" />
                       </button>
                    ))}
                 </div>

                 {/* Simulated TradingView Chart Content */}
                 <div className="flex-1 relative bg-[#131722] p-8">
                    <div className="absolute top-6 left-6 z-20 flex gap-0 rounded-lg overflow-hidden border border-white/10">
                       <button className="bg-[#FF4D4D]/20 px-6 py-2 border-r border-white/10 flex flex-col items-center">
                          <span className="text-[8px] font-black text-[#FF4D4D] tracking-widest">22,101.30</span>
                          <span className="text-[9px] font-black text-white">SELL</span>
                       </button>
                       <button className="bg-white/5 px-4 py-2 border-r border-white/10 text-[10px] font-bold text-gray-400 flex items-center">0.00</button>
                       <button className="bg-[#00C2FF]/20 px-6 py-2 flex flex-col items-center">
                          <span className="text-[8px] font-black text-[#00C2FF] tracking-widest">22,101.30</span>
                          <span className="text-[9px] font-black text-white">BUY</span>
                       </button>
                    </div>

                    <div className="w-full h-full flex flex-col">
                       <div className="flex-1 opacity-60">
                          <svg viewBox="0 0 1000 400" className="w-full h-full overflow-visible">
                             <line x1="0" y1="220" x2="1000" y2="220" stroke="#FF4D4D" strokeWidth="1" strokeDasharray="5,3" opacity="0.5" />
                             <rect x="940" y="210" width="60" height="20" fill="#FF4D4D" rx="2" />
                             <text x="945" y="223" fill="white" className="text-[10px] font-bold">22,101.30</text>
                             <path d="M0,300 L50,280 L100,310 L150,250 L200,270 L250,180 L300,220 L350,160 L400,200 L450,120 L500,180 L550,100 L600,150 L650,80 L700,120 L750,50" 
                                   fill="none" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" />
                             <g transform="translate(0, 320)">
                                <line x1="0" y1="0" x2="1000" y2="0" stroke="white" strokeWidth="1" opacity="0.1" />
                                <path d="M0,40 L100,20 L200,45 L300,15 L400,35 L500,10 L600,30 L700,40 L800,20 L900,35 L1000,25" fill="none" stroke="#7E57C2" strokeWidth="1.5" />
                             </g>
                          </svg>
                       </div>
                       <div className="h-8 flex items-center justify-between border-t border-white/5 mt-4">
                          <div className="flex items-center gap-3">
                             <img src={logoMain} className="h-4 w-auto opacity-40" />
                             <span className="text-[10px] font-bold text-gray-600">TradingView</span>
                          </div>
                          <div className="flex items-center gap-4 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                             <span>1D</span><span>5D</span><span>1M</span><span>3M</span><span>6M</span><span>YTD</span><span>1Y</span><span>5Y</span><span className="text-white">All</span>
                             <button className="ml-2"><Calendar className="w-3.5 h-3.5" /></button>
                          </div>
                          <div className="flex items-center gap-4 text-[9px] font-bold text-gray-600 uppercase">
                             <span>11:30:37 (UTC+5:30)</span>
                             <span className="text-white">% log auto</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* BOTTOM VIDEO STRIP */}
           <div className="h-32 flex gap-4 shrink-0 overflow-x-auto scrollbar-hide pb-1">
              {participants.slice(0, 4).map((p, i) => (
                <div key={i} className="relative min-w-[180px] h-full rounded-xl overflow-hidden bg-[#242731] border border-white/5">
                   <img src={p.img} className="w-full h-full object-cover opacity-90" alt={p.name} />
                   <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                   <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
                      <p className="text-[10px] font-bold text-white truncate max-w-[100px]">{p.name}</p>
                      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center", p.isMicOn ? "bg-white/10" : "bg-red-500/20")}>
                         {p.isMicOn ? <Mic className="w-3 h-3 text-emerald-500" /> : <MicOff className="w-3 h-3 text-red-500" />}
                      </div>
                   </div>
                </div>
              ))}
              <div 
                onClick={() => togglePanel('people')}
                className="min-w-[160px] rounded-xl bg-[#242731] border border-white/5 flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-white/5 transition-colors"
              >
                 <div className="flex -space-x-2 mb-2">
                    <img src={trader5} className="w-7 h-7 rounded-full border-2 border-[#242731] object-cover" />
                    <img src={trader6} className="w-7 h-7 rounded-full border-2 border-[#242731] object-cover" />
                 </div>
                 <p className="text-sm font-black text-white">+23 others</p>
              </div>
           </div>
        </div>

        {/* RIGHT SIDE PANEL (PEOPLE / CHAT / ETC) */}
        <AnimatePresence mode="wait">
          {activeSidePanel && (
            <motion.aside 
              key={activeSidePanel}
              initial={{ x: 350, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 350, opacity: 0 }}
              className="w-[340px] bg-[#1a1c22] rounded-xl border border-white/5 flex flex-col shrink-0 overflow-hidden shadow-2xl z-40"
            >
              {activeSidePanel === 'people' && (
                <>
                  <div className="p-6 border-b border-white/5 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-white">People</h3>
                      <X onClick={() => setActiveSidePanel(null)} className="w-5 h-5 text-gray-500 cursor-pointer hover:text-white" />
                    </div>
                    
                    {/* WORKING TABS */}
                    <div className="flex gap-4 border-b border-white/5">
                      {[
                        { label: 'All', count: 28 },
                        { label: 'Raised Hands', count: 2 },
                        { label: 'Instructors', count: 2 }
                      ].map((tab) => (
                        <button 
                          key={tab.label}
                          onClick={() => setActiveTab(tab.label)}
                          className={cn(
                            "pb-2 text-[11px] font-black uppercase tracking-widest relative transition-all",
                            activeTab === tab.label ? "text-[#00FF88]" : "text-gray-500 hover:text-white"
                          )}
                        >
                          {tab.label} ({tab.count})
                          {activeTab === tab.label && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00FF88]" />}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                      <input 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-11 bg-white/5 rounded-xl border border-white/5 pl-10 pr-4 text-[11px] font-bold focus:outline-none focus:border-[#00FF88]/30 placeholder:text-gray-700" 
                        placeholder="Search people" 
                      />
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6 scrollbar-hide">
                    {/* DYNAMIC LIST BASED ON TAB */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center px-2">
                        <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest">{activeTab === 'All' ? 'Everyone' : activeTab}</p>
                        <span className="text-[11px] text-gray-600">{filteredParticipants.length}</span>
                      </div>
                      {filteredParticipants.map((p, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 group">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <img src={p.img} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                              {p.type === 'Instructor' && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#00FF88] rounded-full border-2 border-[#1a1c22]" />}
                            </div>
                            <div>
                              <p className="text-[12px] font-black text-white/90">{p.name}</p>
                              {p.type === 'Instructor' && <p className="text-[10px] font-bold text-[#00FF88] uppercase tracking-tighter mt-0.5">{p.role}</p>}
                              {p.role === 'Co-host' && p.type !== 'Instructor' && <p className="text-[10px] font-bold text-[#00FF88] uppercase tracking-tighter mt-0.5">Co-host</p>}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {p.handRaised && <Hand className="w-4 h-4 text-[#FFC857]" />}
                            {p.isMicOn ? <Mic className="w-4 h-4 text-[#00FF88]" /> : <MicOff className="w-4 h-4 text-[#FF4D4D] opacity-60" />}
                            <MoreVertical className="w-4 h-4 text-gray-600 group-hover:text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeSidePanel === 'chat' && (
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-white/5 flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">In-call messages</h3>
                    <X onClick={() => setActiveSidePanel(null)} className="w-5 h-5 text-gray-500 cursor-pointer hover:text-white" />
                  </div>
                  <div className="p-4 bg-white/5 m-4 rounded-xl border border-white/5">
                    <p className="text-[10px] text-gray-400 leading-relaxed font-medium">Messages can only be seen by people in the call and are deleted when the call ends.</p>
                  </div>
                  <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 scrollbar-hide">
                    {chatMessages.map((msg, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-black text-white">{msg.user}</span>
                          <span className="text-[9px] text-gray-600 font-medium">{msg.time}</span>
                        </div>
                        <p className="text-[12px] text-gray-300 leading-relaxed">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 border-t border-white/5 bg-[#1a1c22]">
                    <div className="relative">
                      <input className="w-full h-12 bg-white/5 rounded-xl border border-white/5 pl-4 pr-12 text-[11px] font-bold focus:outline-none focus:border-[#00FF88]/30 placeholder:text-gray-700" placeholder="Send a message" />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#00FF88] transition-colors">
                        <Send className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeSidePanel === 'info' && (
                <div className="p-6 space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">Call details</h3>
                    <X onClick={() => setActiveSidePanel(null)} className="w-5 h-5 text-gray-500 cursor-pointer hover:text-white" />
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                       <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Joining info</p>
                       <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                          <span className="text-xs font-bold text-gray-300">meet.teamus369.com/pa-mastery</span>
                          <button className="text-[#00C2FF] text-[10px] font-black uppercase tracking-widest">Copy</button>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Session Topic</p>
                       <p className="text-sm font-bold text-white">Advanced Price Action & Institutional Order Flow Analysis</p>
                    </div>
                  </div>
                </div>
              )}

              {activeSidePanel === 'security' && (
                <div className="p-6 space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">Host controls</h3>
                    <X onClick={() => setActiveSidePanel(null)} className="w-5 h-5 text-gray-500 cursor-pointer hover:text-white" />
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <div>
                          <p className="text-sm font-bold text-white">Host management</p>
                          <p className="text-[10px] text-gray-500 mt-1">Allows you to restrict what participants can do</p>
                       </div>
                       <div className="w-10 h-5 bg-[#00FF88] rounded-full relative cursor-pointer shadow-lg shadow-[#00FF88]/20">
                          <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-black rounded-full" />
                       </div>
                    </div>
                    <div className="pt-6 border-t border-white/5 space-y-4">
                       <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Let everyone</p>
                       <div className="flex items-center justify-between opacity-80">
                          <span className="text-xs font-bold text-gray-300">Share their screen</span>
                          <div className="w-10 h-5 bg-white/10 rounded-full relative cursor-pointer" />
                       </div>
                       <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-gray-300">Send chat messages</span>
                          <div className="w-10 h-5 bg-[#00FF88] rounded-full relative cursor-pointer" />
                       </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.aside>
          )}
        </AnimatePresence>
      </div>

      {/* --- BOTTOM CONTROL BAR --- */}
      <footer className="h-20 px-8 flex items-center justify-between bg-[#0F1117] shrink-0 border-t border-white/5">
        <div className="flex items-center gap-4">
           <div onClick={() => setIsMicOn(!isMicOn)} className="flex flex-col items-center gap-1 group cursor-pointer transition-all active:scale-95">
              <div className={cn("w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-xl", isMicOn ? "bg-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.2)]" : "bg-[#FF4D4D] shadow-[0_0_20px_rgba(255,77,77,0.2)]")}>
                 {isMicOn ? <Mic className="w-5 h-5 text-black" /> : <MicOff className="w-5 h-5 text-white" />}
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{isMicOn ? 'Mic On' : 'Mic Off'}</span>
           </div>
           <div onClick={() => setIsVideoOn(!isVideoOn)} className="flex flex-col items-center gap-1 group cursor-pointer transition-all active:scale-95">
              <div className={cn("w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-xl", isVideoOn ? "bg-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.2)]" : "bg-[#FF4D4D] shadow-[0_0_20px_rgba(255,77,77,0.2)]")}>
                 {isVideoOn ? <Video className="w-5 h-5 text-black" /> : <VideoOff className="w-5 h-5 text-white" />}
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{isVideoOn ? 'Camera On' : 'Camera Off'}</span>
           </div>
        </div>

        <div className="flex items-center gap-10">
           <div onClick={() => togglePanel('chat')} className={cn("flex flex-col items-center gap-1 group cursor-pointer transition-all active:scale-95", activeSidePanel === 'chat' && "text-[#00FF88]")}>
              <div className={cn("transition-colors", activeSidePanel === 'chat' ? "text-[#00FF88]" : "text-gray-500 group-hover:text-white")}>
                 <MessageSquare className="w-5 h-5" />
              </div>
              <span className={cn("text-[9px] font-black uppercase tracking-widest transition-colors", activeSidePanel === 'chat' ? "text-[#00FF88]" : "text-gray-500 group-hover:text-white")}>Chat</span>
           </div>
           <div onClick={() => setIsSharing(!isSharing)} className={cn("flex flex-col items-center gap-1 group cursor-pointer transition-all active:scale-95", isSharing && "text-[#00C2FF]")}>
              <div className={cn("transition-colors", isSharing ? "text-[#00C2FF]" : "text-gray-500 group-hover:text-white")}>
                 <ScreenShare className="w-5 h-5" />
              </div>
              <span className={cn("text-[9px] font-black uppercase tracking-widest transition-colors", isSharing ? "text-[#00C2FF]" : "text-gray-500 group-hover:text-white")}>Share Screen</span>
           </div>
           <div onClick={() => setIsHandRaised(!isHandRaised)} className={cn("flex flex-col items-center gap-1 group cursor-pointer transition-all active:scale-95", isHandRaised && "text-[#FFC857]")}>
              <div className={cn("transition-colors", isHandRaised ? "text-[#FFC857]" : "text-gray-500 group-hover:text-white")}>
                 <Hand className={cn("w-5 h-5", isHandRaised && "fill-[#FFC857]")} />
              </div>
              <span className={cn("text-[9px] font-black uppercase tracking-widest transition-colors", isHandRaised ? "text-[#FFC857]" : "text-gray-500 group-hover:text-white")}>Raise Hand</span>
           </div>
           {[
             { icon: <HelpCircle className="w-5 h-5" />, label: 'Q&A' },
             { icon: <PieChart className="w-5 h-5" />, label: 'Polls' },
           ].map((ctrl, i) => (
             <div key={i} className="flex flex-col items-center gap-1 group cursor-pointer transition-all active:scale-95">
                <div className="text-gray-500 group-hover:text-white transition-colors">{ctrl.icon}</div>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{ctrl.label}</span>
             </div>
           ))}

           {/* MORE BUTTON WITH POPUP */}
           <div className="relative">
              <div 
                onClick={() => setShowMoreMenu(!showMoreMenu)} 
                className={cn("flex flex-col items-center gap-1 group cursor-pointer transition-all active:scale-95", showMoreMenu && "text-white")}
              >
                 <div className={cn("transition-colors", showMoreMenu ? "text-white" : "text-gray-500 group-hover:text-white")}>
                    <MoreHorizontal className="w-5 h-5" />
                 </div>
                 <span className={cn("text-[9px] font-black uppercase tracking-widest transition-colors", showMoreMenu ? "text-white" : "text-gray-500 group-hover:text-white")}>More</span>
              </div>

              <AnimatePresence>
                 {showMoreMenu && (
                   <motion.div 
                    initial={{ y: 20, opacity: 0, scale: 0.95 }}
                    animate={{ y: -10, opacity: 1, scale: 1 }}
                    exit={{ y: 20, opacity: 0, scale: 0.95 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-[#1a1c22] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-110 backdrop-blur-3xl"
                   >
                      <div className="py-3 px-2 space-y-1">
                         {[
                           { icon: <StopCircle className="w-4 h-4 text-red-500" />, label: 'Record Session' },
                           { icon: <Layout className="w-4 h-4" />, label: 'Change Layout' },
                           { icon: <Monitor className="w-4 h-4" />, label: 'Whiteboard' },
                           { icon: <Maximize2 className="w-4 h-4" />, label: 'Fullscreen' },
                           { icon: <Settings className="w-4 h-4" />, label: 'Settings' },
                           { icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />, label: 'Report Problem' },
                         ].map((item, i) => (
                           <button key={i} className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-white/5 rounded-2xl text-xs font-bold text-gray-300 hover:text-white transition-all group/item">
                              <div className="p-1.5 rounded-lg bg-white/5 group-hover/item:bg-white/10 transition-colors">
                                 {item.icon}
                              </div>
                              {item.label}
                           </button>
                         ))}
                      </div>
                   </motion.div>
                 )}
              </AnimatePresence>
           </div>
        </div>

        <div className="flex items-center gap-6">
           <InfoIcon onClick={() => togglePanel('info')} className={cn("w-5 h-5 cursor-pointer transition-colors hover:text-white", activeSidePanel === 'info' ? "text-[#00FF88]" : "text-gray-500")} />
           <div onClick={() => togglePanel('people')} className={cn("flex items-center gap-1.5 cursor-pointer transition-colors group", activeSidePanel === 'people' ? "text-[#00FF88]" : "text-gray-500 hover:text-white")}>
              <Users className="w-5 h-5" />
              <span className="text-xs font-black">28</span>
           </div>
           <Shield onClick={() => togglePanel('security')} className={cn("w-5 h-5 cursor-pointer transition-colors hover:text-white", activeSidePanel === 'security' ? "text-[#00FF88]" : "text-gray-500")} />
        </div>
      </footer>

    </div>
  );
}
