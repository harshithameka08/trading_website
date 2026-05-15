import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Star, Clock, BookOpen, Filter, Search, Users, Check, 
  ChevronRight, Play, Layout, Zap, Shield, FileText, Award, HelpCircle,
  Globe, Briefcase, TrendingUp, BarChart3, PieChart, Layers, 
  ChevronDown, ShoppingCart, TrendingDown, Target, BrainCircuit,
  Settings, Users2, Video, Bitcoin, Book, LineChart, ShieldCheck, Radio
} from 'lucide-react';
import { Button, Card, Badge } from '@/src/components/UI';
import { cn } from '@/src/lib/utils';

import courseTechnical from '../course_technical.png';
import courseScalping from '../course_scalping_v2.png';
import courseOptions from '../course_options_v2.png';
import courseSwing from '../course_swing_v2.png';
import coursePriceAction from '../course_price_action_v2.png';
import coursePsychology from '../course_psychology.png';
import courseForex from '../course_forex_fundamentals_v2_png_1778849269421.png';
import courseInstitutional from '../course_institutional_orderflow_v2_png_1778849291388.png';
import courseCrypto from '../course_crypto_masterclass_v2_png_1778849311128.png';
import heroWorkstation from '../trader_workstation_1778565817961.png';
import bannerBull from '../banner_bull.png';
import editImage from '../editimage.png';

// Avatars for student stacks
import herocourse from '../herocourse.png';
import avatar1 from '../avatar_1.png';
import avatar2 from '../avatar_2.png';
import avatar3 from '../avatar_3.png';
import avatar4 from '../avatar_4.png';

export const courses = [
  {
    id: 1,
    title: 'Price Action Mastery',
    level: 'Advanced',
    duration: '12 Hours',
    lessons: '24 Lessons',
    desc: 'Learn advanced price action concepts and trading strategies.',
    learningPoints: ['Price Action Basics', 'Support & Resistance', 'Market Structure', 'Real Chart Examples'],
    price: '₹4,999',
    students: '2.4K+',
    badge: 'BESTSELLER',
    badgeColor: 'bg-red-500',
    img: coursePriceAction,
    avatars: [avatar1, avatar2, avatar3, avatar4],
    cat: 'Price Action',
    mentor: 'Vikram Singh'
  },
  {
    id: 2,
    title: 'Scalping Strategy',
    level: 'Intermediate',
    duration: '8 Hours',
    lessons: '20 Lessons',
    desc: 'Master the art of scalping and make consistent profits.',
    learningPoints: ['Scalping Techniques', 'Entry & Exit Rules', 'Risk Management', 'Live Scalping Examples'],
    price: '₹3,999',
    students: '1.8K+',
    badge: 'POPULAR',
    badgeColor: 'bg-[#00E5FF]',
    img: courseScalping,
    avatars: [avatar2, avatar3, avatar1, avatar4],
    cat: 'Scalping',
    mentor: 'Michael'
  },
  {
    id: 3,
    title: 'Swing Trading Blueprint',
    level: 'Beginner',
    duration: '10 Hours',
    lessons: '30 Lessons',
    desc: 'Capture big moves in the market with swing trading.',
    learningPoints: ['Trend Analysis', 'Swing Strategies', 'Trade Management', 'Position Sizing'],
    price: '₹5,499',
    students: '3.2K+',
    badge: 'TRENDING',
    badgeColor: 'bg-[#00FF85]',
    img: courseSwing,
    avatars: [avatar3, avatar4, avatar1, avatar2],
    cat: 'Swing Trading',
    mentor: 'Alex Rivers'
  },
  {
    id: 4,
    title: 'Options Trading',
    level: 'Advanced',
    duration: '14 Hours',
    lessons: '28 Lessons',
    desc: 'Learn option strategies and maximize your returns.',
    learningPoints: ['Options Basics', 'Greeks & Strategies', 'Risk Control', 'Live Option Trades'],
    price: '₹6,999',
    students: '1.3K+',
    badge: 'ADVANCED',
    badgeColor: 'bg-[#F4C542]',
    img: courseOptions,
    avatars: [avatar4, avatar1, avatar2, avatar3],
    cat: 'Options',
    mentor: 'Marco V.'
  },
  {
    id: 5,
    title: 'Institutional Order Flow',
    level: 'Advanced',
    duration: '15 Hours',
    lessons: '32 Lessons',
    desc: 'Trade like the big players using SMC and ICT concepts.',
    learningPoints: ['Order Blocks', 'Liquidity Pools', 'Fair Value Gaps', 'Institutional Bias'],
    price: '₹8,999',
    students: '950+',
    badge: 'PREMIUM',
    badgeColor: 'bg-purple-600',
    img: courseInstitutional,
    avatars: [avatar1, avatar2, avatar3, avatar4],
    cat: 'Institutional',
    mentor: 'Rahul Verma'
  },
  {
    id: 6,
    title: 'Trading Psychology',
    level: 'Beginner',
    duration: '6 Hours',
    lessons: '12 Lessons',
    desc: 'Master your emotions and build a professional trading mindset.',
    learningPoints: ['Fear & Greed', 'Discipline Rules', 'Patience Mastery', 'Trading Journaling'],
    price: '₹2,999',
    students: '4.5K+',
    badge: 'ESSENTIAL',
    badgeColor: 'bg-blue-500',
    img: coursePsychology,
    avatars: [avatar2, avatar3, avatar4, avatar1],
    cat: 'Psychology',
    mentor: 'Michael'
  },
  {
    id: 7,
    title: 'Forex Fundamentals',
    level: 'Beginner',
    duration: '10 Hours',
    lessons: '22 Lessons',
    desc: 'Complete guide to understanding the global currency markets.',
    learningPoints: ['Currency Pairs', 'Economic Indicators', 'Central Banks', 'Market Sessions'],
    price: '₹4,499',
    students: '2.1K+',
    badge: 'FOUNDATION',
    badgeColor: 'bg-emerald-500',
    img: courseForex,
    avatars: [avatar3, avatar4, avatar1, avatar2],
    cat: 'Forex',
    mentor: 'Alex Rivers'
  },
  {
    id: 8,
    title: 'Crypto Trading Masterclass',
    level: 'Intermediate',
    duration: '12 Hours',
    lessons: '25 Lessons',
    desc: 'Master the volatile crypto markets with proven techniques.',
    learningPoints: ['Bitcoin Analysis', 'DeFi Trading', 'Altcoin Selection', 'Crypto Risk Control'],
    price: '₹5,999',
    students: '1.5K+',
    badge: 'TRENDING',
    badgeColor: 'bg-orange-500',
    img: courseCrypto,
    avatars: [avatar4, avatar1, avatar2, avatar3],
    cat: 'Crypto',
    mentor: 'Elena K.'
  }
];

export const featuredCourses = courses;

const categories = [
  { name: 'Forex Trading', count: '25 Courses', icon: <Globe className="w-5 h-5 text-[#00FF85]" /> },
  { name: 'Crypto Trading', count: '20 Courses', icon: <TrendingUp className="w-5 h-5 text-[#F4C542]" /> },
  { name: 'Stock Market', count: '18 Courses', icon: <BarChart3 className="w-5 h-5 text-[#00E5FF]" /> },
  { name: 'Options Trading', count: '15 Courses', icon: <PieChart className="w-5 h-5 text-[#B6FF3B]" /> },
  { name: 'Scalping', count: '12 Courses', icon: <Zap className="w-5 h-5 text-[#FF5B5B]" /> },
  { name: 'Swing Trading', count: '10 Courses', icon: <Layers className="w-5 h-5 text-[#A855F7]" /> },
  { name: 'Price Action', count: '14 Courses', icon: <Target className="w-5 h-5 text-[#FF8A00]" /> },
  { name: 'SMC / ICT', count: '8 Courses', icon: <BrainCircuit className="w-5 h-5 text-[#EC4899]" /> },
];

const features = [
  { title: 'Expert Mentorship', desc: 'Learn from experienced traders with real results.', icon: <Users2 className="w-6 h-6 text-[#F4C542]" /> },
  { title: 'Real Market Examples', desc: 'Practical examples from live markets.', icon: <BarChart3 className="w-6 h-6 text-[#F4C542]" /> },
  { title: 'Lifetime Access', desc: 'Access all courses forever, anytime.', icon: <Shield className="w-6 h-6 text-[#F4C542]" /> },
  { title: 'Community Support', desc: 'Join our active trading community.', icon: <Users className="w-6 h-6 text-[#F4C542]" /> },
  { title: 'Strategy PDFs', desc: 'Download strategy guides & PDFs.', icon: <FileText className="w-6 h-6 text-[#F4C542]" /> },
  { title: 'Certificate', desc: 'Get completion certificate.', icon: <Award className="w-6 h-6 text-[#F4C542]" /> },
];



export default function Courses() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('All Courses');
  
  // New Filter States
  const [selectedLevel, setSelectedLevel] = React.useState('All Levels');
  const [selectedCategory, setSelectedCategory] = React.useState('All Categories');
  const [selectedMarket, setSelectedMarket] = React.useState('All Markets');
  const [sortBy, setSortBy] = React.useState('Sort By');

  const filteredCourses = featuredCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Tab Filter (Original)
    const matchesTab = activeTab === 'All Courses' || 
                       course.level === activeTab || 
                       course.cat === activeTab;
                       
    // New Dropdown Filters
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
    const matchesCategory = selectedCategory === 'All Categories' || course.cat === selectedCategory;
    const matchesMarket = selectedMarket === 'All Markets' || course.cat === selectedMarket;
    
    return matchesSearch && matchesTab && matchesLevel && matchesCategory && matchesMarket;
  });

  // Sorting Logic
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'Price: Low to High') {
      return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
    }
    if (sortBy === 'Price: High to Low') {
      return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
    }
    if (sortBy === 'Popularity') {
      return parseInt(b.students.replace(/[^\d]/g, '')) - parseInt(a.students.replace(/[^\d]/g, ''));
    }
    return 0;
  });

  const filterTabs = ['All Courses', 'Beginner', 'Intermediate', 'Advanced', 'Forex', 'Crypto', 'Stocks', 'Options', 'Scalping', 'Swing Trading'];

  return (
    <div className="bg-[#020617] min-h-screen text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden max-md:pt-48 max-md:pb-24">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src={herocourse} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center lg:object-right opacity-80 max-md:opacity-60 max-md:object-[70%_center]" 
          />
          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80 md:hidden" />
          <div className="absolute inset-0 bg-linear-to-r from-[#020617] via-[#020617]/80 to-transparent lg:w-2/3" />
          <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent" />
        </div>

        <div className="max-w-[1700px] mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            <h1 className="text-5xl md:text-7xl font-sans font-extrabold tracking-tight leading-tight">
              Master Trading With <br />
              <span className="text-[#F4C542]">Expert-Led Courses</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              From basics to advanced strategies - our courses are designed to help you trade confidently and profitably in any market condition.
            </p>
            <div className="flex flex-wrap max-md:flex-col gap-4 pt-4">
              <Button 
                onClick={() => document.getElementById('featured-courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#F4C542] hover:bg-[#D4AF37] text-black font-bold px-8 py-4 rounded-xl flex items-center gap-2 text-base max-md:w-full max-md:justify-center"
              >
                Explore Courses <ArrowRight className="w-5 h-5" />
              </Button>
              <Link to="/live-classes" className="max-md:w-full">
                <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 text-base max-md:w-full max-md:justify-center">
                  Join Live Session <span className="flex h-2 w-2 rounded-full bg-[#F4C542] animate-pulse"></span>
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[500px]"
          >
            <div className="relative h-full w-full">
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="relative z-20 -mt-10 px-6">
        <div className="max-w-[1700px] mx-auto">
          <div className="bg-white/2 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col gap-8">
              {/* Top Row: Search & Dropdowns */}
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="relative flex-1 w-full">
                  <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                    <Search className="w-5 h-5 text-gray-500" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search for courses, strategies, or mentors..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/3 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm text-white focus:outline-none focus:border-gold/30 focus:bg-white/5 transition-all placeholder:text-gray-600 shadow-inner"
                  />
                </div>
                
                <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full lg:w-auto">
                  {/* Levels Filter */}
                  <div className="relative min-w-[150px] flex-1 lg:flex-none">
                    <select 
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="w-full appearance-none bg-white/3 border border-white/10 rounded-2xl px-5 py-4 text-xs font-bold text-gray-400 hover:border-white/20 transition-all outline-none cursor-pointer pr-10 uppercase tracking-widest"
                    >
                      <option className="bg-[#020617] text-white">All Levels</option>
                      <option className="bg-[#020617] text-white">Beginner</option>
                      <option className="bg-[#020617] text-white">Intermediate</option>
                      <option className="bg-[#020617] text-white">Advanced</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                  </div>

                  {/* Categories Filter */}
                  <div className="relative min-w-[180px] flex-1 lg:flex-none">
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full appearance-none bg-white/3 border border-white/10 rounded-2xl px-5 py-4 text-xs font-bold text-gray-400 hover:border-white/20 transition-all outline-none cursor-pointer pr-10 uppercase tracking-widest"
                    >
                      <option className="bg-[#020617] text-white">All Categories</option>
                      <option className="bg-[#020617] text-white">Price Action</option>
                      <option className="bg-[#020617] text-white">Scalping</option>
                      <option className="bg-[#020617] text-white">Swing Trading</option>
                      <option className="bg-[#020617] text-white">Options</option>
                      <option className="bg-[#020617] text-white">Institutional</option>
                      <option className="bg-[#020617] text-white">Psychology</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                  </div>

                  {/* Sort By Filter */}
                  <div className="relative min-w-[150px] flex-1 lg:flex-none">
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full appearance-none bg-white/3 border border-white/10 rounded-2xl px-5 py-4 text-xs font-bold text-gold hover:border-gold/30 transition-all outline-none cursor-pointer pr-10 uppercase tracking-widest"
                    >
                      <option className="bg-[#020617] text-white">Sort By</option>
                      <option className="bg-[#020617] text-white">Price: Low to High</option>
                      <option className="bg-[#020617] text-white">Price: High to Low</option>
                      <option className="bg-[#020617] text-white">Popularity</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Bottom Row: Filter Chips */}
              <div className="flex flex-wrap gap-3 items-center pt-2 border-t border-white/5">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mr-4">Quick Filters:</span>
                {[
                  { name: 'All Courses', icon: <Layout className="w-3.5 h-3.5" /> },
                  { name: 'Beginner', icon: <BookOpen className="w-3.5 h-3.5" /> },
                  { name: 'Intermediate', icon: <FileText className="w-3.5 h-3.5" /> },
                  { name: 'Advanced', icon: <Target className="w-3.5 h-3.5" /> },
                  { name: 'Forex', icon: <Globe className="w-3.5 h-3.5" /> },
                  { name: 'Crypto', icon: <Bitcoin className="w-3.5 h-3.5" /> },
                  { name: 'Stocks', icon: <BarChart3 className="w-3.5 h-3.5" /> },
                  { name: 'Options', icon: <PieChart className="w-3.5 h-3.5" /> },
                  { name: 'Scalping', icon: <Layers className="w-3.5 h-3.5" /> },
                  { name: 'Swing Trading', icon: <TrendingUp className="w-3.5 h-3.5" /> }
                ].map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={cn(
                      "px-5 py-2.5 rounded-xl text-[10px] font-black transition-all border flex items-center gap-2.5 uppercase tracking-wider",
                      activeTab === tab.name 
                        ? "bg-gold/10 border-gold/50 text-gold shadow-[0_0_20px_rgba(244,197,66,0.15)]" 
                        : "bg-white/2 border-white/10 text-gray-500 hover:text-white hover:border-white/20"
                    )}
                  >
                    {tab.icon}
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="featured-courses" className="px-6 py-20">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="w-6 h-1 bg-[#F4C542] rounded-full" />
                <div className="w-4 h-1 bg-[#F4C542] rounded-full" />
                <div className="w-6 h-1 bg-[#F4C542] rounded-full" />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight">Featured Courses</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-bg-main rounded-xl border border-white/5 overflow-hidden flex flex-col hover:border-white/10 transition-all duration-500 shadow-2xl"
              >
                {/* Course Image */}
                <div className="relative aspect-video overflow-hidden bg-bg-secondary">
                  <img 
                    src={course.img} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  {/* Badge */}
                  <div className={cn(
                    "absolute top-4 left-4 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-black shadow-lg", 
                    course.badgeColor
                  )}>
                    {course.badge}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold leading-tight text-white mb-2">{course.title}</h3>
                    <div className="flex items-center gap-2 text-[12px] text-gray-400 font-medium">
                      <Clock className="w-4 h-4 text-[#F4C542]" /> {course.duration}
                    </div>
                  </div>
                  
                  <p className="text-[12px] text-gray-500 mb-6 leading-relaxed line-clamp-2">{course.desc}</p>

                  <div className="space-y-4 mb-8 flex-1">
                    <p className="text-[14px] font-bold text-white">What you'll learn:</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {course.learningPoints.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-gray-400">
                          <Check className="w-3.5 h-3.5 text-[#F4C542]" /> 
                          <span className="truncate">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-6 border-t border-white/5">
                    <Link to={`/enroll?course=${encodeURIComponent(course.title)}`} className="flex-1">
                      <Button className="w-full bg-[#F4C542] hover:bg-[#D4AF37] text-black font-bold text-xs py-3.5 rounded-lg">
                        Enroll Now
                      </Button>
                    </Link>
                    <Link to={`/course/${course.id}`} className="flex-1">
                      <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-white font-bold text-xs py-3.5 rounded-lg">
                        View Course
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Why Our Courses Different */}
      <section className="px-6 py-16 bg-[#020617] relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1700px] mx-auto relative z-10">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">
              Why Our Courses Are <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white to-primary">Different?</span>
            </h2>
            <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto font-medium leading-relaxed">
              We don't just teach trading; we build profitable mindsets through institutional-grade strategies and real-world experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Expert Mentorship', 
                desc: 'Direct access to institutional traders who have navigated every market condition imaginable.', 
                icon: <Users2 className="w-6 h-6 text-[#F4C542]" />, 
                glow: 'shadow-[0_0_25px_rgba(244,197,66,0.12)]',
                border: 'border-[#F4C542]/20' 
              },
              { 
                title: 'Real Market Examples', 
                desc: 'No theoretical fluff. We break down actual winning and losing trades from our live trading desk.', 
                icon: <BarChart3 className="w-6 h-6 text-orange-400" />, 
                glow: 'shadow-[0_0_25px_rgba(251,146,60,0.12)]',
                border: 'border-orange-400/20' 
              },
              { 
                title: 'Lifetime Access', 
                desc: 'Markets evolve, and so do our courses. Get lifetime access to all future updates and strategy revisions.', 
                icon: <Shield className="w-6 h-6 text-[#00FF85]" />, 
                glow: 'shadow-[0_0_25px_rgba(0,255,133,0.12)]',
                border: 'border-[#00FF85]/20' 
              },
              { 
                title: 'Community Support', 
                desc: 'Join an elite network of 10,000+ traders. Share setups, discuss news, and grow together.', 
                icon: <Users className="w-6 h-6 text-[#00E5FF]" />, 
                glow: 'shadow-[0_0_25px_rgba(0,229,255,0.12)]',
                border: 'border-[#00E5FF]/20' 
              },
              { 
                title: 'Strategy PDFs', 
                desc: 'Downloadable high-density strategy playbooks and risk management calculators for offline study.', 
                icon: <FileText className="w-6 h-6 text-purple-400" />, 
                glow: 'shadow-[0_0_25px_rgba(168,85,247,0.12)]',
                border: 'border-purple-400/20' 
              },
              { 
                title: 'Certification', 
                desc: 'Receive an institutional-grade certificate of completion after passing our advanced proficiency exams.', 
                icon: <Award className="w-6 h-6 text-blue-400" />, 
                glow: 'shadow-[0_0_25px_rgba(96,165,250,0.12)]',
                border: 'border-blue-400/20' 
              },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative group p-8 rounded-[2rem] bg-white/2 backdrop-blur-2xl border transition-all duration-500 hover:bg-white/4 hover:-translate-y-1.5",
                  feature.border,
                  feature.glow
                )}
              >
                <div className="space-y-5">
                  <div className={cn(
                    "w-14 h-14 rounded-xl border flex items-center justify-center transition-all duration-500 group-hover:rotate-[8deg] group-hover:scale-105",
                    feature.border
                  )}>
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed font-medium">{feature.desc}</p>
                  </div>
                </div>
                
                {/* Decorative Accent */}
                <div className="absolute top-6 right-8 text-white/5 font-black text-4xl select-none group-hover:text-white/10 transition-colors">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Learning Path */}
      <section className="px-6 py-24 bg-[#020617]/50 relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">
              Your Professional <span className="text-gold">Learning Path</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
              Follow our battle-tested roadmap designed to take you from market basics to institutional-level trading proficiency.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
              {[
                { 
                  id: '01', 
                  title: 'Foundation', 
                  desc: 'Master the core mechanics of markets and charting.', 
                  icon: <Book className="w-6 h-6" />, 
                  color: 'text-white', 
                  glow: 'rgba(255,255,255,0.1)' 
                },
                { 
                  id: '02', 
                  title: 'Analysis', 
                  desc: 'Learn advanced technical and fundamental frameworks.', 
                  icon: <BarChart3 className="w-6 h-6" />, 
                  color: 'text-cyan-400', 
                  glow: 'rgba(34,211,238,0.1)' 
                },
                { 
                  id: '03', 
                  title: 'Price Action', 
                  desc: 'Decode market psychology through price movement.', 
                  icon: <Target className="w-6 h-6" />, 
                  color: 'text-gold', 
                  glow: 'rgba(244,197,66,0.1)' 
                },
                { 
                  id: '04', 
                  title: 'Risk Guard', 
                  desc: 'Build a bulletproof capital preservation system.', 
                  icon: <ShieldCheck className="w-6 h-6" />, 
                  color: 'text-emerald-400', 
                  glow: 'rgba(52,211,153,0.1)' 
                },
                { 
                  id: '05', 
                  title: 'Execution', 
                  desc: 'Live trading, consistency, and institutional setups.', 
                  icon: <Award className="w-6 h-6" />, 
                  color: 'text-primary', 
                  glow: 'rgba(244,197,66,0.1)' 
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  {/* Step Node */}
                  <div className="relative mb-10">
                    <div className={cn(
                      "w-28 h-28 rounded-full bg-[#050b1a] border border-white/5 flex items-center justify-center relative z-20 transition-all duration-500 group-hover:border-gold/50 group-hover:scale-110 shadow-2xl",
                    )}>
                      <div className={cn("transition-transform duration-500 group-hover:scale-110", step.color)}>
                        {step.icon}
                      </div>
                    </div>
                    {/* Step Number Tag */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-bg-secondary border border-white/10 text-[10px] font-black text-white/50 z-30 tracking-[0.2em]">
                      STAGE_{step.id}
                    </div>
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full bg-white/5 animate-pulse z-10" />
                  </div>

                  {/* Info Card */}
                  <div className="bg-white/2 border border-white/5 p-6 rounded-3xl w-full text-center transition-all duration-500 group-hover:bg-white/4 group-hover:border-white/10">
                    <h3 className="text-[14px] font-black text-white uppercase tracking-tight mb-2">{step.title}</h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium line-clamp-2">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Course Preview Section */}
      <section className="px-6 pt-20 pb-4">
        <div className="max-w-[1700px] mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Video Preview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 bg-bg-secondary group cursor-pointer shadow-2xl">
                <img src={coursePriceAction} alt="Course Preview" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-all">
                    <Play className="w-8 h-8 fill-white text-white ml-1" />
                  </div>
                </div>

                {/* Hover Overlay Stats Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute bottom-4 right-4 w-60 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl z-30 opacity-0 group-hover:opacity-100 hidden md:block"
                >
                  <div className="space-y-3">
                    {[
                      { label: 'Level', value: 'Advanced', icon: <Target className="w-3.5 h-3.5 text-[#F4C542]" /> },
                      { label: 'Duration', value: '12 Hours', icon: <Clock className="w-3.5 h-3.5 text-[#F4C542]" /> },
                      { label: 'Lessons', value: '48 Lessons', icon: <BookOpen className="w-3.5 h-3.5 text-[#F4C542]" /> },
                      { label: 'Students', value: '2,400+', icon: <Users className="w-3.5 h-3.5 text-[#F4C542]" /> },
                      { label: 'Language', value: 'English', icon: <Globe className="w-3.5 h-3.5 text-[#F4C542]" /> },
                      { label: 'Access', value: 'Lifetime Access', icon: <Shield className="w-3.5 h-3.5 text-[#F4C542]" /> },
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2 text-gray-400">
                          {stat.icon}
                          <span>{stat.label}</span>
                        </div>
                        <span className="font-bold text-white">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <Link to="/enroll?course=Advanced%20Price%20Action">
                      <Button className="w-full bg-[#34D399] hover:bg-[#10B981] text-black font-black py-2.5 rounded-lg text-[11px] h-auto">
                        Enroll Now - ₹4,999
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[coursePriceAction, courseScalping, courseSwing, courseOptions].map((img, i) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-white/10 aspect-video bg-bg-secondary cursor-pointer hover:border-white/30 transition-all">
                    <img src={img} alt="Thumb" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Info & Checklist */}
            <div className="lg:col-span-6 space-y-8 pt-4">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-[#00FF85] uppercase tracking-widest">Live Preview</span>
                <h2 className="text-4xl font-black leading-tight text-white">Advanced Price Action Course Preview</h2>
                <p className="text-gray-500 text-base leading-relaxed max-w-xl">
                  Watch this preview and see how our courses are structured to give you practical knowledge and real trading skills. Master the art of Price Action with our expert-led video series.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Understand Trading Framework',
                  'Live Market Examples',
                  'Trade Breakdown',
                  'Q&A with Mentor',
                  'Lifetime Community Access',
                  'Downloadable Resources'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300 bg-white/2 p-3 rounded-lg border border-white/5">
                    <div className="w-5 h-5 rounded-full border border-[#00FF85]/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#00FF85]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/enroll?course=Advanced%20Price%20Action">
                  <Button className="bg-[#F4C542] hover:bg-[#D4AF37] text-black font-black px-8 py-4 rounded-xl flex items-center gap-2">
                    Enroll Now - ₹4,999 <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <button className="flex items-center justify-between px-6 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-sm font-bold text-white group">
                  Watch Full Preview
                  <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="relative overflow-hidden min-h-[500px] max-md:min-h-auto flex items-center group">
        {/* Full-width Background Image */}
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
              className="pt-4"
            >
              <Button to="/contact" size="lg" className="bg-gold hover:bg-gold/90 text-black font-black px-12 rounded-xl h-16 shadow-[0_10px_40px_rgba(244,197,66,0.3)] hover:scale-105 transition-all flex items-center gap-3 text-[13px] uppercase tracking-widest">
                Start My Journey Now <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
