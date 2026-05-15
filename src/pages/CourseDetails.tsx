import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from './Courses';
import { Button, Badge } from '@/src/components/UI';
import { 
  ArrowLeft, Clock, BookOpen, Star, Users, CheckCircle, Play, 
  ChevronRight, ChevronLeft, Download, Bookmark, ShieldCheck,
  Video, FileText, ChevronDown, Monitor, Layout, Search, Bell,
  Target, Globe, Shield, Award, Check, TrendingUp, Lock, Sparkles, Share2, MessageSquare,
  Instagram, Linkedin, Youtube, Send
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

// Assets
import avatar1 from '../avatar_1.png';

export default function CourseDetails() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = React.useState('Overview');
  const [expandedModule, setExpandedModule] = React.useState<number | null>(2);
  
  const course = courses.find(c => c.id === Number(id)) || courses[0];

  return (
    <div className="bg-[#020617] min-h-screen text-white font-sans selection:bg-gold/30 pt-28">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation Bar */}
        <div className="max-w-[1700px] mx-auto px-6 mb-8 flex items-center justify-between">
          <Link to="/courses" className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all text-xs font-black uppercase tracking-widest bg-white/5 border border-white/5 px-6 py-3 rounded-2xl hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Library
          </Link>
          <div className="flex gap-4">
            <button className="p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white">
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Experience Section */}
        <section className="px-6 pb-12">
          <div className="max-w-[1700px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Visual Hook */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative rounded-[2.5rem] overflow-hidden aspect-video border border-white/10 bg-bg-main shadow-[0_40px_100px_rgba(0,0,0,0.5)] group"
              >
                <img 
                  src={course.img} 
                  alt={course.title} 
                  className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" 
                />
                
                {/* Overlay Elements */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                  <div className="space-y-6 max-w-2xl">
                    <div className="flex gap-3">
                      <Badge className="bg-gold text-black border-none text-[10px] font-black tracking-widest px-5 py-2">
                        INSTITUTIONAL GRADE
                      </Badge>
                      <Badge className="bg-white/10 backdrop-blur-md text-white border-white/10 text-[10px] font-black tracking-widest px-5 py-2">
                        {course.level.toUpperCase()}
                      </Badge>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-display font-black leading-[1.1] uppercase tracking-tighter">
                      {course.title.split(' ').slice(0, -1).join(' ')} <br />
                      <span className="text-gold">{course.title.split(' ').slice(-1)}</span>
                    </h1>
                    <div className="flex items-center gap-8 text-sm font-bold text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-gold" />
                        <span>{course.duration} TOTAL</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-gold" />
                        <span>48 LESSONS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-gold" />
                        <span>2,450+ ENROLLED</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Big Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 rounded-full bg-gold/90 backdrop-blur-xl flex items-center justify-center border-4 border-white/20 shadow-[0_0_50px_rgba(244,197,66,0.4)] pointer-events-auto cursor-pointer"
                  >
                    <Play className="w-10 h-10 fill-black text-black ml-1.5" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Key Benefits & Action */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                    <img src={avatar1} alt={course.mentor} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold flex items-center gap-2">
                      {course.mentor} <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500/10" />
                    </h4>
                    <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Master Institutional Trader</p>
                  </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  {course.desc}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Target className="w-5 h-5" />, title: 'High Probability', sub: 'Setup Identification' },
                  { icon: <ShieldCheck className="w-5 h-5" />, title: 'Risk Control', sub: 'Institutional Methods' },
                  { icon: <Globe className="w-5 h-5" />, title: 'Global Markets', sub: 'Multi-Asset Support' },
                  { icon: <Award className="w-5 h-5" />, title: 'Certification', sub: 'Upon Completion' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-3xl bg-white/3 border border-white/5 hover:bg-white/5 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className="text-[14px] font-black text-white uppercase tracking-tight">{feature.title}</h5>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{feature.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-6 items-center p-8 rounded-[2rem] bg-linear-to-r from-gold/20 to-transparent border border-gold/20">
                <div className="space-y-1">
                  <p className="text-xs font-black text-gold uppercase tracking-[0.2em]">Limited Time Enrollment</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-white">₹4,999</span>
                    <span className="text-gray-500 line-through font-bold">₹12,999</span>
                  </div>
                </div>
                <Link to="/signup" className="flex-1">
                  <Button className="w-full bg-gold hover:bg-gold/90 text-black font-black text-sm h-16 rounded-2xl shadow-[0_20px_40px_rgba(244,197,66,0.2)] hover:scale-105 transition-all">
                    GET LIFETIME ACCESS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tab System Navigation */}
        <section className="px-6 sticky top-24 z-40">
          <div className="max-w-[1700px] mx-auto bg-[#020617]/80 backdrop-blur-2xl border-y border-white/5">
            <div className="flex gap-12 py-2 overflow-x-auto no-scrollbar">
              {['Overview', 'Curriculum', 'Mentor', 'Reviews', 'Resources'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "py-6 text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all relative",
                    activeTab === tab ? "text-gold" : "text-gray-500 hover:text-white"
                  )}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gold rounded-full" 
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Content Grid */}
        <section className="px-6 py-16">
          <div className="max-w-[1700px] mx-auto grid lg:grid-cols-12 gap-16">
            
            {/* Left Content: Detail Panels */}
            <div className="lg:col-span-8 space-y-16">
              {activeTab === 'Overview' && (
                <div className="space-y-12">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                      <Sparkles className="w-8 h-8 text-gold" /> Course Overview
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      This masterclass is meticulously designed to bridge the gap between retail thinking and institutional execution. 
                      You will gain deep insights into how large financial institutions manipulate markets, and more importantly, 
                      how to position yourself on the right side of the smart money.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6 p-8 rounded-[2rem] bg-white/2 border border-white/5">
                      <h4 className="text-lg font-bold flex items-center gap-3 text-[#00FF85]">
                        <CheckCircle className="w-5 h-5" /> What You Will Gain
                      </h4>
                      <ul className="space-y-4">
                        {course.learningPoints.map((item, i) => (
                          <li key={i} className="flex gap-3 text-sm text-gray-400 leading-tight">
                            <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-6 p-8 rounded-[2rem] bg-white/2 border border-white/5">
                      <h4 className="text-lg font-bold flex items-center gap-3 text-blue-400">
                        <Monitor className="w-5 h-5" /> Technical Prerequisites
                      </h4>
                      <ul className="space-y-4">
                        {[
                          'Basic understanding of price charts',
                          'Stable internet connection for live sessions',
                          'TradingView account for practice',
                          'A mindset ready for disciplined growth'
                        ].map((item, i) => (
                          <li key={i} className="flex gap-3 text-sm text-gray-400 leading-tight">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Curriculum' && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-black uppercase tracking-tight">Full Curriculum</h2>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">48 Lessons • 12.5 Hours</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { id: 1, title: 'Introduction to Technical Analysis', lessons: 5, time: '1h 25m', status: 'completed' },
                      { id: 2, title: 'Institutional Market Structure', lessons: 8, time: '2h 10m', status: 'active' },
                      { id: 3, title: 'Advanced Price Action Patterns', lessons: 10, time: '3h 15m', status: 'locked' },
                      { id: 4, title: 'High-Probability Entry Models', lessons: 7, time: '1h 55m', status: 'locked' },
                      { id: 5, title: 'Advanced Risk Management', lessons: 5, time: '1h 20m', status: 'locked' },
                    ].map((mod) => (
                      <div 
                        key={mod.id}
                        className={cn(
                          "rounded-3xl border transition-all duration-500 overflow-hidden",
                          expandedModule === mod.id ? "bg-white/3 border-gold/30 shadow-2xl" : "bg-white/1 border-white/5 hover:border-white/10"
                        )}
                      >
                        <button 
                          onClick={() => setExpandedModule(expandedModule === mod.id ? null : mod.id)}
                          className="w-full flex items-center justify-between p-8 text-left"
                        >
                          <div className="flex items-center gap-6">
                            <div className={cn(
                              "w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-black border transition-all",
                              mod.status === 'completed' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" :
                              mod.status === 'active' ? "bg-gold/10 border-gold/20 text-gold shadow-[0_0_15px_rgba(244,197,66,0.2)]" :
                              "bg-white/5 border-white/10 text-gray-600"
                            )}>
                              {mod.status === 'completed' ? <Check className="w-6 h-6" /> : 
                               mod.status === 'locked' ? <Lock className="w-5 h-5 opacity-50" /> : mod.id}
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-white uppercase tracking-tight">{mod.title}</h4>
                              <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{mod.lessons} Lessons • {mod.time}</p>
                            </div>
                          </div>
                          <ChevronDown className={cn("w-6 h-6 text-gray-500 transition-transform", expandedModule === mod.id && "rotate-180")} />
                        </button>
                        
                        <AnimatePresence>
                          {expandedModule === mod.id && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="px-8 pb-8 space-y-2 border-t border-white/5 pt-6"
                            >
                              {[1, 2, 3, 4, 5].map((l) => (
                                <div key={l} className="group flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-all cursor-pointer">
                                  <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold text-gray-500 group-hover:text-gold transition-colors">
                                      {l}
                                    </div>
                                    <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">Lesson {l}: Identifying Market Manipulations</span>
                                  </div>
                                  <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                                    <span>12:45</span>
                                    {mod.status === 'locked' ? <Lock className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 group-hover:text-gold" />}
                                  </div>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Mentor' && (
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="w-48 h-64 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl shrink-0">
                      <img src={avatar1} alt={course.mentor} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <h2 className="text-4xl font-black uppercase tracking-tighter text-white">{course.mentor}</h2>
                        <p className="text-gold text-sm font-black uppercase tracking-widest">Master Institutional Trader & Strategist</p>
                      </div>
                      <p className="text-gray-400 text-lg leading-relaxed font-medium">
                        With over 12 years of experience in global financial markets, {course.mentor} has trained more than 10,000+ students 
                        worldwide. Specializing in institutional order flow and advanced price action, his methodology focuses on 
                        market psychology and risk-adjusted consistent growth.
                      </p>
                      <div className="flex gap-4">
                        {[Instagram, Linkedin, Youtube, Send].map((Icon, i) => (
                          <button key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-gold hover:bg-gold/10 transition-all">
                            <Icon className="w-5 h-5" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { label: 'Total Students', value: '25,000+' },
                      { label: 'Trading Experience', value: '12+ Years' },
                      { label: 'Course Rating', value: '4.9/5.0' },
                    ].map((stat, i) => (
                      <div key={i} className="p-8 rounded-[2rem] bg-white/2 border border-white/5 text-center">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">{stat.label}</p>
                        <p className="text-3xl font-black text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Reviews' && (
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-black uppercase tracking-tight">Student Testimonials</h2>
                    <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
                      <div className="flex text-gold">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
                      </div>
                      <span className="text-sm font-black text-white">4.9 / 5.0</span>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    {[
                      { name: 'Arjun Mehta', date: '2 days ago', rating: 5, comment: 'This scalping strategy is a game changer. The institutional insights are something I have never seen in retail courses before.' },
                      { name: 'Sarah Wilson', date: '1 week ago', rating: 5, comment: 'The risk management module alone is worth the price. Highly recommend to anyone serious about trading.' },
                      { name: 'Rahul Sharma', date: '2 weeks ago', rating: 4, comment: 'Very detailed and easy to follow. The live sessions help a lot in understanding real market application.' },
                    ].map((review, i) => (
                      <div key={i} className="p-8 rounded-[2rem] bg-white/2 border border-white/5 space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 rounded-full bg-linear-to-br from-gold/20 to-primary/20 border border-white/10 flex items-center justify-center font-black text-gold">
                              {review.name[0]}
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-white">{review.name}</h4>
                              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex text-gold">
                            {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold" />)}
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed italic">"{review.comment}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'Resources' && (
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-black uppercase tracking-tight">Course Resources</h2>
                    <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 px-4 py-2">
                      LIFETIME UPDATES
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: 'Price Action Playbook', type: 'PDF', size: '12.4 MB' },
                      { title: 'Institutional Flow Chart', type: 'IMG', size: '4.2 MB' },
                      { title: 'Trading Checklist', type: 'PDF', size: '1.5 MB' },
                      { title: 'Risk Calculator Tool', type: 'XLS', size: '250 KB' },
                    ].map((res, i) => (
                      <div key={i} className="group p-8 rounded-[2rem] bg-white/2 border border-white/5 hover:bg-white/4 hover:border-gold/30 transition-all flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-gold group-hover:scale-110 transition-all">
                            <FileText className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white">{res.title}</h4>
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{res.type} • {res.size}</p>
                          </div>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold transition-all">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Dynamic Sidebar Stats */}
            <div className="lg:col-span-4 space-y-10">
              <div className="p-10 rounded-[2.5rem] bg-bg-main border border-white/5 shadow-2xl relative overflow-hidden group">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Sparkles className="w-24 h-24 text-gold" />
                </div>
                
                <h4 className="text-xl font-black uppercase tracking-tight mb-10">This Course Includes:</h4>
                <div className="space-y-6">
                  {[
                    { icon: <Monitor className="w-5 h-5" />, text: '48 High-Definition Video Lessons' },
                    { icon: <FileText className="w-5 h-5" />, text: '12 Downloadable Strategy Blueprints' },
                    { icon: <Video className="w-5 h-5" />, text: 'Weekly Live Market Analysis Sessions' },
                    { icon: <ShieldCheck className="w-5 h-5" />, text: 'Lifetime Access to All Future Updates' },
                    { icon: <MessageSquare className="w-5 h-5" />, text: 'Direct Q&A Support with Mentors' },
                    { icon: <Award className="w-5 h-5" />, text: 'Verified Institutional Certificate' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-sm font-medium text-gray-400">
                      <div className="text-gold">{item.icon}</div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 space-y-4">
                  <Link to={`/enroll?course=${encodeURIComponent(course.title)}`}>
                    <Button className="w-full bg-[#00FF85] hover:bg-[#00E075] text-black font-black h-16 rounded-2xl text-base shadow-[0_15px_35px_rgba(0,255,133,0.15)]">
                      ENROLL IN BATCH <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <p className="text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest">30-Day Money Back Guarantee</p>
                </div>
              </div>

              {/* Learning Progress Widget */}
              <div className="p-8 rounded-[2rem] bg-white/3 border border-white/5 space-y-6">
                <div className="flex justify-between items-end">
                   <div>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Your Progress</p>
                      <h5 className="text-2xl font-black text-white">35% COMPLETE</h5>
                   </div>
                   <TrendingUp className="w-8 h-8 text-emerald-500 opacity-30" />
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: '35%' }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                     className="h-full bg-linear-to-r from-[#00FF85] to-emerald-400 shadow-[0_0_15px_rgba(0,255,133,0.3)]" 
                   />
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                   Continue where you left off: <span className="text-white font-bold italic">"Module 2: Identifying Market Traps"</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
