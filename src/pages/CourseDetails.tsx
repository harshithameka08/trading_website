import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from './Courses';
import { Button, Badge, Card } from '@/src/components/UI';
import { 
  ArrowLeft, Clock, BookOpen, Star, Users, CheckCircle, Play, 
  ChevronRight, ChevronLeft, Download, Bookmark, ShieldCheck,
  Video, FileText, ChevronDown, Monitor, Layout, Search, Bell,
  Target, Globe, Shield, Award, Check, TrendingUp
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

// Assets
import avatar1 from '../avatar_1.png';
import coursePriceAction from '../course_price_action.png';
import editImage from '../editimage.png';

export default function CourseDetails() {
  const { id } = useParams<{ id: string }>();
  const [activeModule, setActiveModule] = React.useState(1);
  const [activeTab, setActiveTab] = React.useState('Curriculum');
  
  const course = courses.find(c => c.id === Number(id)) || courses[0];

  return (
    <div className="bg-[#020617] min-h-screen text-white font-sans selection:bg-gold/30 pt-24">
      {/* Breadcrumb / Top Navigation */}
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-gray-500 text-xs font-bold uppercase tracking-widest">
          <Link to="/courses" className="hover:text-white flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> Courses
          </Link>
          <span>/</span>
          <span className="text-gray-300">{course.title}</span>
        </div>
      </div>

      {/* Main Hero / Info Section */}
      <section className="px-6 py-8">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Video Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl group cursor-pointer">
              <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="space-y-4">
                  <div className="text-3xl font-black leading-tight uppercase">
                    {course.title.split(' ').slice(0, -1).join(' ')} <br />
                    <span className="text-[#00FF85]">{course.title.split(' ').slice(-1)}</span>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={cn("text-black border-none text-[8px] font-black", course.badgeColor || "bg-[#F4C542]")}>
                      {course.badge || 'BESTSELLER'}
                    </Badge>
                    <Badge className="bg-blue-500 text-white border-none text-[8px] font-black">LIVE + RECORDED</Badge>
                    <Badge className="bg-purple-600 text-white border-none text-[8px] font-black">{course.level.toUpperCase()}</Badge>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-all shadow-2xl">
                  <Play className="w-8 h-8 fill-white text-white ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Course Text Info */}
          <div className="lg:col-span-4 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {course.title}
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              {course.desc}
            </p>
            
            <div className="flex items-center gap-4 py-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                <img src={course.avatars?.[0] || avatar1} alt={course.mentor} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-bold flex items-center gap-1">
                  By {course.mentor} <CheckCircle className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" />
                </p>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Market Expert & Mentor</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">4.9</span>
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold" />)}
                </div>
                <span className="text-gray-500 text-xs">(2,450 Reviews)</span>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4 border-t border-white/5 pt-6">
              {[
                { label: course.duration.split(' ')[0], sub: course.duration.split(' ')[1] || 'Hours', icon: <Clock className="w-4 h-4 text-gold" /> },
                { label: course.lessons.split(' ')[0], sub: 'Lessons', icon: <BookOpen className="w-4 h-4 text-gold" /> },
                { label: course.students, sub: 'Students', icon: <Users className="w-4 h-4 text-gold" /> },
                { label: 'Lifetime', sub: 'Access', icon: <ShieldCheck className="w-4 h-4 text-gold" /> },
                { label: 'Cert.', sub: 'Included', icon: <Award className="w-4 h-4 text-gold" /> }
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-1">
                  <div className="flex justify-center">{stat.icon}</div>
                  <p className="text-xs font-black text-white">{stat.label}</p>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pricing Card */}
          <div className="lg:col-span-3 lg:sticky top-32">
            <Card className="bg-[#0B1020] border-white/10 p-8 rounded-3xl space-y-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black">{course.price}</span>
                  <span className="text-gray-500 line-through text-sm mb-1">₹{parseInt(course.price.replace(/[^\d]/g, '')) * 2}</span>
                </div>
                <Badge className="bg-[#00FF85]/20 text-[#00FF85] border-none font-black text-[10px]">50% OFF</Badge>
              </div>

              <div className="space-y-4">
                <Button className="w-full h-14 bg-[#F4C542] hover:bg-[#D4AF37] text-black font-black uppercase tracking-widest text-sm rounded-xl shadow-[0_8px_30px_rgba(244,197,66,0.3)]">
                  Continue Learning
                </Button>
                <Button variant="outline" className="w-full h-12 border-white/10 hover:bg-white/5 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2">
                  <Bookmark className="w-4 h-4" /> Add to Wishlist
                </Button>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-[11px] text-gray-300 font-medium">
                  <Check className="w-4 h-4 text-[#00FF85]" />
                  <span>30-Day Money Back Guarantee</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Navigation Tabs */}
      <div className="max-w-[1400px] mx-auto px-6 border-b border-white/5">
        <div className="flex gap-8 overflow-x-auto no-scrollbar">
          {['Overview', 'Curriculum', 'Live Classes', 'Recorded Classes', 'Notes', 'Resources', 'Reviews (2,350)', 'Q&A'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "py-6 text-[13px] font-bold whitespace-nowrap transition-all border-b-2",
                activeTab === tab ? "border-[#F4C542] text-[#F4C542]" : "border-transparent text-gray-500 hover:text-white"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dashboard Content */}
      <section className="px-6 py-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-8">
          
          {/* Sidebar: Curriculum */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-[#050816] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
              <div className="p-6 border-b border-white/5">
                <h3 className="font-sans font-black uppercase tracking-tight text-base mb-6">Course Curriculum</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-[11px] font-bold text-gray-400">
                    <span className="uppercase tracking-widest">Your Progress</span>
                    <span>35% Complete</span>
                  </div>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00FF85] w-[35%] transition-all duration-1000" />
                  </div>
                </div>
              </div>

              <div className="divide-y divide-white/5">
                {/* Module 1: Completed */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[13px] font-bold text-white pr-4">Module 1: Introduction to Technical Analysis</h4>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-bold text-gray-500">5/5</span>
                      <CheckCircle className="w-4 h-4 text-[#00FF85] fill-[#00FF85]/10" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    {[
                      { id: 1, title: 'What is Technical Analysis?', time: '12:45' },
                      { id: 2, title: 'Price, Volume & Market Data', time: '18:30' },
                      { id: 3, title: 'Timeframes in Trading', time: '10:20' },
                      { id: 4, title: 'Chart Types Explained', time: '14:15' },
                      { id: 5, title: 'Support & Resistance Basics', time: '16:40' }
                    ].map((lesson) => (
                      <div key={lesson.id} className="flex items-center justify-between py-2.5 text-[11px] text-gray-400 group cursor-pointer hover:text-white transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border border-[#00FF85] flex items-center justify-center">
                            <Play className="w-2 h-2 text-[#00FF85] fill-[#00FF85]" />
                          </div>
                          <span>{lesson.id}. {lesson.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <span>{lesson.time}</span>
                           <CheckCircle className="w-3.5 h-3.5 text-[#00FF85]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Module 2: Active */}
                <div className="p-4 bg-white/[0.02]">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[13px] font-bold text-white pr-4">Module 2: Chart Patterns</h4>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-bold text-gray-500">2/6</span>
                      <ChevronDown className="w-4 h-4 text-gold" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between py-2.5 text-[11px] text-gray-400 hover:text-white transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border border-[#00FF85] flex items-center justify-center">
                          <Play className="w-2 h-2 text-[#00FF85] fill-[#00FF85]" />
                        </div>
                        <span>6. Candlestick Basics</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <span>15:20</span>
                         <CheckCircle className="w-3.5 h-3.5 text-[#00FF85]" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 -mx-2 rounded-xl border border-gold/50 bg-gold/5 text-gold shadow-[0_0_15px_rgba(244,197,66,0.1)]">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border border-gold flex items-center justify-center">
                          <Play className="w-2.5 h-2.5 text-gold fill-gold" />
                        </div>
                        <span className="font-bold">7. Bullish Candlestick Patterns</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <span className="font-bold">21:30</span>
                         <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                           <Play className="w-2.5 h-2.5 text-black fill-black ml-0.5" />
                         </div>
                      </div>
                    </div>

                    {[
                      { id: 8, title: 'Bearish Candlestick Patterns', time: '18:45' },
                      { id: 9, title: 'Continuation Patterns', time: '16:10' },
                      { id: 10, title: 'Reversal Patterns', time: '22:05' },
                      { id: 11, title: 'Pattern Trading Strategy', time: '19:30' }
                    ].map((lesson) => (
                      <div key={lesson.id} className="flex items-center justify-between py-2.5 text-[11px] text-gray-500 hover:text-white transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Shield className="w-4 h-4" />
                          <span>{lesson.id}. {lesson.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <span>{lesson.time}</span>
                           <Shield className="w-3.5 h-3.5 opacity-50" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Module 3-6: Collapsed */}
                {[
                  { title: 'Module 3: Technical Indicators', count: '0/8' },
                  { title: 'Module 4: Trend Analysis', count: '0/7' },
                  { title: 'Module 5: Advanced Strategies', count: '0/7' },
                  { title: 'Module 6: Risk Management', count: '0/5' }
                ].map((mod, i) => (
                  <div key={i} className="p-4 flex items-center justify-between text-gray-500 hover:bg-white/[0.01] transition-colors cursor-pointer">
                    <h4 className="text-[13px] font-bold pr-4">{mod.title}</h4>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-bold">{mod.count}</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-6 rounded-2xl flex flex-col items-center justify-center gap-1 group transition-all">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-[12px] font-sans font-black uppercase tracking-tight">Download Entire Course</span>
              </div>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Available for Offline Access</span>
            </Button>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9 space-y-8">
            {/* Current Lesson Title */}
            <div className="flex items-center justify-between pb-6 border-b border-white/5">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                7. Bullish Candlestick Patterns
                <Bookmark className="w-5 h-5 text-gray-600 hover:text-gold cursor-pointer transition-colors" />
              </h2>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white transition-colors">
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button className="flex items-center gap-2 text-xs font-bold text-[#F4C542] hover:text-gold transition-colors">
                  Next <ChevronRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 ml-4">
                  <Layout className="w-4 h-4 text-gray-500" />
                  <Monitor className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Large Video Player */}
            <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 bg-black shadow-2xl group">
               <img src={coursePriceAction} alt="Player" className="w-full h-full object-cover opacity-60" />
               <div className="absolute inset-0 flex flex-col justify-end p-8 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="space-y-4">
                    <div className="h-1 bg-white/20 rounded-full relative overflow-hidden">
                       <div className="absolute left-0 top-0 h-full bg-[#F4C542] w-[45%]" />
                    </div>
                    <div className="flex items-center justify-between text-xs text-white">
                       <div className="flex items-center gap-6">
                          <Play className="w-5 h-5 fill-white" />
                          <Bell className="w-5 h-5" />
                          <span>08:45 / 21:30</span>
                       </div>
                       <div className="flex items-center gap-6">
                          <span className="font-bold">1x</span>
                          <Globe className="w-5 h-5" />
                          <Search className="w-5 h-5" />
                          <Award className="w-5 h-5" />
                       </div>
                    </div>
                  </div>
               </div>
               
               {/* Chart Annotations Overlay */}
               <div className="absolute inset-0 pointer-events-none p-12">
                  <div className="relative w-full h-full">
                     <div className="absolute top-[35%] right-[15%] border-2 border-[#00FF85] bg-[#00FF85]/10 px-4 py-1.5 rounded-lg text-[11px] font-black text-white flex items-center gap-3 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,133,0.2)]">
                        Bullish Engulfing <div className="w-2.5 h-2.5 bg-[#00FF85] rounded-full animate-ping shadow-[0_0_10px_#00FF85]" />
                     </div>
                     <div className="absolute bottom-[25%] left-[30%] border border-white/20 bg-black/60 px-4 py-1.5 rounded-lg text-[11px] font-black text-white backdrop-blur-md">
                        Hammer
                     </div>
                     <div className="absolute bottom-[20%] right-[35%] border border-white/20 bg-black/60 px-4 py-1.5 rounded-lg text-[11px] font-black text-white backdrop-blur-md">
                        Morning Star
                     </div>
                  </div>
               </div>
            </div>

            {/* Under Video Tabs & Content */}
            <div className="grid lg:grid-cols-12 gap-12 pt-8">
              <div className="lg:col-span-8 space-y-8">
                <div className="flex gap-10 border-b border-white/5">
                   {['About Lesson', 'Notes', 'Resources', 'Discussion'].map(t => (
                     <button key={t} className={cn(
                       "pb-4 text-xs font-bold tracking-tight transition-all relative",
                       t === 'Notes' ? "text-gold" : "text-gray-500 hover:text-white"
                     )}>
                        {t}
                        {t === 'Notes' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />}
                     </button>
                   ))}
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Lesson Notes</h3>
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400 hover:text-white transition-colors border border-white/10 rounded-lg px-4 py-2">
                      Download Notes <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-2xl">
                    Bullish candlestick patterns indicate potential price reversal to the upside. These patterns are critical in identifying high probability entry setups.
                  </p>

                  {/* Diagrams Area */}
                  <div className="grid grid-cols-3 gap-6 bg-white/[0.02] border border-white/5 rounded-3xl p-8">
                    {[
                      { title: '1. Hammer', desc: 'Small body at top\nLong lower shadow\nLittle to no upper shadow\nAppears after a downtrend' },
                      { title: '2. Morning Star', desc: 'Three-candle pattern\nDown candle, small body, then strong up candle\nSignals reversal' },
                      { title: '3. Bullish Engulfing', desc: 'Second candle engulfs the body of the first\nStrong bullish signal\nHigh probability setup' }
                    ].map((diag, i) => (
                      <div key={i} className="space-y-6 text-center">
                        <span className="text-[11px] font-black text-white block uppercase tracking-tight">{diag.title}</span>
                        <div className="h-32 flex items-center justify-center">
                           {/* Refined Candlestick SVG */}
                           <svg viewBox="0 0 60 100" className="h-full">
                              {i === 0 && (
                                <g>
                                  <line x1="30" y1="20" x2="30" y2="90" stroke="#00FF85" strokeWidth="2" />
                                  <rect x="20" y="25" width="20" height="15" fill="#00FF85" rx="1" />
                                </g>
                              )}
                              {i === 1 && (
                                <g>
                                  <rect x="5" y="20" width="12" height="40" fill="#EF4444" rx="1" />
                                  <line x1="11" y1="15" x2="11" y2="65" stroke="#EF4444" strokeWidth="1" />
                                  
                                  <rect x="24" y="65" width="12" height="12" fill="#FFFFFF" rx="1" />
                                  <line x1="30" y1="60" x2="30" y2="80" stroke="#FFFFFF" strokeWidth="1" />
                                  
                                  <rect x="43" y="10" width="12" height="60" fill="#00FF85" rx="1" />
                                  <line x1="49" y1="5" x2="49" y2="75" stroke="#00FF85" strokeWidth="1" />
                                </g>
                              )}
                              {i === 2 && (
                                <g>
                                  <rect x="10" y="45" width="12" height="25" fill="#EF4444" rx="1" />
                                  <line x1="16" y1="40" x2="16" y2="75" stroke="#EF4444" strokeWidth="1" />
                                  
                                  <rect x="35" y="10" width="15" height="75" fill="#00FF85" rx="1" />
                                  <line x1="42.5" y1="5" x2="42.5" y2="90" stroke="#00FF85" strokeWidth="1" />
                                </g>
                              )}
                           </svg>
                        </div>
                        <p className="text-[9px] text-gray-500 leading-relaxed font-medium whitespace-pre-line">
                          {diag.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Downloads & Extras Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                <div className="space-y-6">
                  <h4 className="text-sm font-black uppercase tracking-tight">Downloads</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'Bullish Patterns PDF Notes', size: 'PDF File' },
                      { name: 'Candlestick Cheat Sheet', size: 'PDF File' },
                      { name: 'Chart Examples', size: 'ZIP File' },
                      { name: 'Practice Worksheet', size: 'PDF File' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                            <FileText className="w-4 h-4 text-red-500" />
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-white group-hover:text-[#F4C542] transition-colors">{item.name}</p>
                            <p className="text-[9px] text-gray-500">{item.size}</p>
                          </div>
                        </div>
                        <Download className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black uppercase tracking-tight">Offline Videos</h4>
                    <div className="flex items-center gap-2">
                       <span className="text-[9px] text-gray-500 uppercase font-bold">Download in HD</span>
                       <div className="w-8 h-4 bg-[#00FF85] rounded-full relative">
                          <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full" />
                       </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { id: 7, title: 'Session 7: Advanced Patterns', info: '21:30 • 1080p', size: '245 MB' },
                      { id: 6, title: 'Session 6: Market Structure', info: '15:20 • 720p', size: '160 MB' },
                      { id: 5, title: 'Session 5: Core Concepts', info: '18:40 • 720p', size: '180 MB' }
                    ].map((vid, i) => (
                      <div key={i} className="flex items-center justify-between group">
                         <div className="flex gap-4">
                            <div className="w-16 h-10 rounded-lg overflow-hidden bg-white/5 border border-white/10 shrink-0">
                               <img src={course.img} alt="thumb" className="w-full h-full object-cover opacity-60" />
                            </div>
                            <div className="space-y-1">
                               <h5 className="text-[11px] font-bold text-white leading-tight">{vid.title}</h5>
                               <p className="text-[9px] text-gray-500">{vid.info}</p>
                            </div>
                         </div>
                         <div className="flex flex-col items-end gap-1">
                            <span className="text-[9px] font-bold text-gray-400">{vid.size}</span>
                            <Download className="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition-colors" />
                         </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Watched Lessons */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <h3 className="text-xl font-black uppercase tracking-tight mb-10">Recently Watched Lessons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { id: 6, title: 'Candlestick Basics', time: '15:20', progress: 100 },
              { id: 5, title: 'Support & Resistance Basics', time: '18:40', progress: 100 },
              { id: 4, title: 'Chart Types Explained', time: '14:15', progress: 100 },
              { id: 3, title: 'Timeframes in Trading', time: '10:20', progress: 100 },
              { id: 2, title: 'Price, Volume & Market Data', time: '18:30', progress: 100 }
            ].map((lesson, i) => (
              <div key={i} className="group cursor-pointer space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 bg-black shadow-lg">
                   <img src={course.img} alt="lesson" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                      </div>
                   </div>
                   <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded-md text-[9px] font-bold">
                      {lesson.time}
                   </div>
                </div>
                <div className="space-y-2">
                   <h4 className="text-[12px] font-bold line-clamp-1 group-hover:text-gold transition-colors">{lesson.id}. {lesson.title}</h4>
                   <div className="flex items-center justify-between">
                      <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden mr-4">
                         <div className="h-full bg-[#00FF85] w-full" />
                      </div>
                      <span className="text-[10px] font-black text-[#00FF85]">100%</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

