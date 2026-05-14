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
import courseIntraday from '../course_intraday.png';
import courseOptions from '../course_options.png';
import courseSwing from '../course_swing.png';
import coursePriceAction from '../course_price_action.png';
import coursePsychology from '../course_psychology.png';
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
    img: courseIntraday,
    avatars: [avatar2, avatar3, avatar1, avatar4],
    cat: 'Scalping',
    mentor: 'Sarah Chen'
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
    img: courseTechnical,
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
    img: courseTechnical,
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
    mentor: 'Sarah Chen'
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
    img: courseSwing,
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
    img: courseIntraday,
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

const learningPath = [
  { id: '01', title: 'Beginner', desc: 'Learn the basics of trading', icon: <HelpCircle className="w-6 h-6 text-[#00FF85]" /> },
  { id: '02', title: 'Technical Analysis', desc: 'Understand charts, patterns & tools', icon: <BarChart3 className="w-6 h-6 text-[#00FF85]" /> },
  { id: '03', title: 'Price Action', desc: 'Master price movement & market behavior', icon: <TrendingUp className="w-6 h-6 text-[#00FF85]" /> },
  { id: '04', title: 'Risk Management', desc: 'Protect your capital & manage risk', icon: <Shield className="w-6 h-6 text-[#00FF85]" /> },
  { id: '05', title: 'Advanced Strategies', desc: 'Learn advanced high-probability setups', icon: <Layers className="w-6 h-6 text-[#00FF85]" /> },
  { id: '06', title: 'Professional Trader', desc: 'Develop mindset and consistency', icon: <Award className="w-6 h-6 text-[#00FF85]" /> },
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
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src={herocourse} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center lg:object-right opacity-80" 
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#020617] via-[#020617]/80 to-transparent lg:w-2/3" />
          <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#00FF85]">Learn. Trade. Succeed.</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-sans font-extrabold tracking-tight leading-tight">
              Master Trading With <br />
              <span className="text-[#F4C542]">Expert-Led Courses</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              From basics to advanced strategies - our courses are designed to help you trade confidently and profitably in any market condition.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-[#F4C542] hover:bg-[#D4AF37] text-black font-bold px-8 py-4 rounded-xl flex items-center gap-2 text-base">
                Explore Courses <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 text-base">
                Join Live Session <span className="flex h-2 w-2 rounded-full bg-[#F4C542] animate-pulse"></span>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[500px]"
          >
            <div className="relative h-full w-full">
              {/* Stats Overlay Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 glass-card p-4 flex items-center gap-4 border border-white/10 bg-black/40"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00FF85]/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#00FF85]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Students Enrolled</p>
                  <p className="text-xl font-bold">10K+</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-8 right-8 glass-card p-4 flex flex-col gap-2 border border-white/10 bg-black/40 min-w-[140px]"
              >
                <div className="flex justify-between items-center">
                   <div>
                     <p className="text-xs text-gray-400">Success Rate</p>
                     <p className="text-xl font-bold">85%</p>
                   </div>
                   <div className="relative w-10 h-10">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path className="text-white/10" strokeDasharray="100, 100" strokeWidth="3" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <path className="text-[#00FF85]" strokeDasharray="85, 100" strokeWidth="3" strokeLinecap="round" fill="none" stroke="currentColor" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      </svg>
                   </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ x: [0, -10, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-8 left-8 glass-card p-4 flex items-center gap-4 border border-white/10 bg-black/40"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Live Sessions</p>
                  <p className="text-xl font-bold">500+</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ x: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-8 right-8 glass-card p-4 flex flex-col gap-2 border border-white/10 bg-black/40 min-w-[140px]"
              >
                <p className="text-xs text-gray-400">Average Profit</p>
                <div className="flex items-end justify-between gap-4">
                  <p className="text-xl font-bold text-[#00FF85]">+32.68%</p>
                  <div className="flex items-end gap-1 pb-1">
                    <div className="w-1.5 h-3 bg-[#00FF85]/30 rounded-t-sm" />
                    <div className="w-1.5 h-5 bg-[#00FF85]/50 rounded-t-sm" />
                    <div className="w-1.5 h-4 bg-[#00FF85]/70 rounded-t-sm" />
                    <div className="w-1.5 h-6 bg-[#00FF85] rounded-t-sm" />
                  </div>
                </div>
                <p className="text-[10px] text-gray-500">This Month</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="px-6 py-4 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#0B1020]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col gap-8 shadow-2xl">
            {/* Top Row: Search and Dropdowns */}
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full lg:w-auto">
                <input 
                  type="text" 
                  placeholder="Search for courses..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-3.5 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-gold/50 transition-all placeholder:text-gray-600"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
                {/* Levels Filter */}
                <div className="relative min-w-[140px]">
                  <select 
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full appearance-none bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-xs font-medium text-gray-400 hover:border-white/20 transition-all outline-none cursor-pointer"
                  >
                    <option className="bg-[#020617] text-white">All Levels</option>
                    <option className="bg-[#020617] text-white">Beginner</option>
                    <option className="bg-[#020617] text-white">Intermediate</option>
                    <option className="bg-[#020617] text-white">Advanced</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-600 pointer-events-none" />
                </div>

                {/* Categories Filter */}
                <div className="relative min-w-[140px]">
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full appearance-none bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-xs font-medium text-gray-400 hover:border-white/20 transition-all outline-none cursor-pointer"
                  >
                    <option className="bg-[#020617] text-white">All Categories</option>
                    <option className="bg-[#020617] text-white">Price Action</option>
                    <option className="bg-[#020617] text-white">Scalping</option>
                    <option className="bg-[#020617] text-white">Swing Trading</option>
                    <option className="bg-[#020617] text-white">Options</option>
                    <option className="bg-[#020617] text-white">Institutional</option>
                    <option className="bg-[#020617] text-white">Psychology</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-600 pointer-events-none" />
                </div>

                {/* Markets Filter */}
                <div className="relative min-w-[140px]">
                  <select 
                    value={selectedMarket}
                    onChange={(e) => setSelectedMarket(e.target.value)}
                    className="w-full appearance-none bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-xs font-medium text-gray-400 hover:border-white/20 transition-all outline-none cursor-pointer"
                  >
                    <option className="bg-[#020617] text-white">All Markets</option>
                    <option className="bg-[#020617] text-white">Forex</option>
                    <option className="bg-[#020617] text-white">Crypto</option>
                    <option className="bg-[#020617] text-white">Stocks</option>
                    <option className="bg-[#020617] text-white">Options</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-600 pointer-events-none" />
                </div>

                {/* Sort By Filter */}
                <div className="relative min-w-[140px]">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full appearance-none bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-xs font-medium text-gray-400 hover:border-white/20 transition-all outline-none cursor-pointer"
                  >
                    <option className="bg-[#020617] text-white">Sort By</option>
                    <option className="bg-[#020617] text-white">Price: Low to High</option>
                    <option className="bg-[#020617] text-white">Price: High to Low</option>
                    <option className="bg-[#020617] text-white">Popularity</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-600 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Bottom Row: Filter Chips */}
            <div className="flex flex-wrap gap-3">
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
                    "px-4 py-2.5 rounded-xl text-[11px] font-bold transition-all border flex items-center gap-2.5",
                    activeTab === tab.name 
                      ? "bg-gold/5 border-gold text-gold" 
                      : "bg-white/[0.02] border-white/10 text-gray-500 hover:text-white hover:border-white/20"
                  )}
                >
                  <span className={cn(activeTab === tab.name ? "text-gold" : "text-gray-600")}>
                    {tab.icon}
                  </span>
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="featured-courses" className="px-6 py-20">
        <div className="max-w-[1400px] mx-auto">
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
                className="group relative bg-[#050816] rounded-[1rem] border border-white/5 overflow-hidden flex flex-col hover:border-white/10 transition-all duration-500 shadow-2xl"
              >
                {/* Course Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img 
                    src={course.img} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
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
                    <Link to={`/course/${course.id}`} className="flex-1">
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
      <section className="px-6 pt-8 pb-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Why Our Courses Are Different?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { title: 'Expert Mentorship', desc: 'Learn from experienced traders with real results.', icon: <Users2 className="w-5 h-5 text-[#F4C542]" />, color: 'border-[#F4C542]/30' },
              { title: 'Real Market Examples', desc: 'Practical examples from live markets.', icon: <BarChart3 className="w-5 h-5 text-orange-400" />, color: 'border-orange-400/30' },
              { title: 'Lifetime Access', desc: 'Access all courses forever, anytime.', icon: <Shield className="w-5 h-5 text-[#00FF85]" />, color: 'border-[#00FF85]/30' },
              { title: 'Community Support', desc: 'Join our active trading community.', icon: <Users className="w-5 h-5 text-[#00E5FF]" />, color: 'border-[#00E5FF]/30' },
              { title: 'Strategy PDFs', desc: 'Download strategy guides & PDFs.', icon: <FileText className="w-5 h-5 text-purple-400" />, color: 'border-purple-400/30' },
              { title: 'Certificate', desc: 'Get completion certificate.', icon: <Award className="w-5 h-5 text-blue-400" />, color: 'border-blue-400/30' },
            ].map((feature, i) => (
              <div key={i} className="bg-[#0B1020]/50 border border-white/5 rounded-2xl p-5 flex items-start gap-4 hover:border-white/10 transition-all group">
                <div className={cn("w-12 h-12 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform", feature.color)}>
                  {feature.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-[13px] font-black text-white uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Learning Path */}
      <section className="px-6 pt-10 pb-20 bg-black/20">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight">Your Learning Path</h2>
            <p className="text-gray-500 text-sm mt-2">Step-by-step journey to become a profitable trader.</p>
          </div>

          <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-4">
            {[
              { id: '01', title: 'Beginner', desc: 'Learn the basics of trading', color: 'text-[#00FF85]', border: 'border-[#00FF85]', icon: <Book className="w-5 h-5" />, line: 'from-[#00FF85]' },
              { id: '02', title: 'Technical Analysis', desc: 'Understand charts, patterns & tools', color: 'text-[#00E5FF]', border: 'border-[#00E5FF]', icon: <LineChart className="w-5 h-5" />, line: 'from-[#00E5FF]' },
              { id: '03', title: 'Price Action', desc: 'Master price movement & market behavior', color: 'text-[#00FFD1]', border: 'border-[#00FFD1]', icon: <BarChart3 className="w-5 h-5" />, line: 'from-[#00FFD1]' },
              { id: '04', title: 'Risk Management', desc: 'Protect your capital & manage risk', color: 'text-[#F4C542]', border: 'border-[#F4C542]', icon: <ShieldCheck className="w-5 h-5" />, line: 'from-[#F4C542]' },
              { id: '05', title: 'Advanced Strategies', desc: 'Learn advanced high-probability setups', color: 'text-orange-400', border: 'border-orange-400', icon: <Zap className="w-5 h-5" />, line: 'from-orange-400' },
              { id: '06', title: 'Professional Trader', desc: 'Develop mindset and consistency', color: 'text-blue-400', border: 'border-blue-400', icon: <Award className="w-5 h-5" />, line: 'from-blue-400' },
            ].map((step, i, arr) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center group relative w-full">
                {/* Connecting Line with Dots */}
                {i < arr.length - 1 && (
                  <div className="hidden md:flex absolute top-8 left-[60%] w-[80%] items-center justify-center">
                    <div className={cn("h-[1px] w-full border-t border-dashed border-white/20", step.line)} />
                    <div className={cn("w-1.5 h-1.5 rounded-full shrink-0 ml-2", step.color.replace('text-', 'bg-'))} />
                  </div>
                )}
                
                <div className={cn(
                  "w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.02)] bg-[#0B1020] relative z-10",
                  step.border
                )}>
                  <div className={step.color}>
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-black text-gray-500 block">{step.id}</span>
                  <h3 className="text-[14px] font-bold text-white whitespace-nowrap">{step.title}</h3>
                  <p className="text-[11px] text-gray-500 leading-tight max-w-[130px] mx-auto">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="px-6 pt-20 pb-4">
        <div className="max-w-[1400px] mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Video Preview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 bg-[#0B1020] group cursor-pointer shadow-2xl">
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
                    <Button className="w-full bg-[#34D399] hover:bg-[#10B981] text-black font-black py-2.5 rounded-lg text-[11px] h-auto">
                      Enroll Now - ₹4,999
                    </Button>
                  </div>
                </motion.div>
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[courseTechnical, courseIntraday, courseOptions, coursePriceAction].map((img, i) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-white/10 aspect-video bg-[#0B1020] cursor-pointer hover:border-white/30 transition-all">
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
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-300 bg-white/[0.02] p-3 rounded-lg border border-white/5">
                    <div className="w-5 h-5 rounded-full border border-[#00FF85]/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#00FF85]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-[#F4C542] hover:bg-[#D4AF37] text-black font-black px-8 py-4 rounded-xl flex items-center gap-2">
                  Enroll Now - ₹4,999 <ArrowRight className="w-4 h-4" />
                </Button>
                <button className="flex items-center justify-between px-6 py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-sm font-bold text-white group">
                  Watch Full Preview
                  <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Learning Path */}
      <section className="px-6 py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Your Learning Path</h2>
            <p className="text-gray-500 text-sm">Step-by-step journey to become a profitable trader.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 right-0 h-[2px] bg-white/5 hidden lg:block">
               <div className="absolute top-0 left-0 h-full bg-linear-to-r from-[#00FF85] via-primary to-[#F4C542] w-[80%] opacity-30" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 relative z-10">
              {learningPath.map((step, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-[#0B1020] border border-white/5 flex items-center justify-center relative z-20 group hover:border-primary/50 transition-colors cursor-default">
                      {step.icon}
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0B1020] border border-white/10 text-[10px] font-black text-gray-500 z-30">
                      {step.id}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white uppercase">{step.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-4">
        <div className="max-w-[1400px] mx-auto relative rounded-2xl overflow-hidden bg-[#020617] border border-white/10 shadow-2xl">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
             <img src={editImage} alt="Background" className="w-full h-full object-cover opacity-100" />
             <div className="absolute inset-0 bg-linear-to-r from-[#020617]/40 via-[#020617]/10 to-transparent" />
          </div>

          <div className="relative z-10 p-10 flex flex-col items-center justify-center gap-10 h-full">
            {/* Main Content Stack */}
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-sans font-black text-white leading-tight">
                Ready to Start Your <span className="text-[#F4C542]">Trading Journey?</span>
              </h2>
              <p className="text-white text-sm md:text-lg font-medium opacity-80 max-w-2xl">
                Join thousands of successful traders and take the first step today!
              </p>
              <div className="pt-2">
                <Button 
                  to="/contact"
                  size="lg" 
                  className="bg-[#F4C542] hover:bg-[#D4AF37] text-black font-bold px-12 rounded-lg h-14 shadow-[0_4px_25px_rgba(244,197,66,0.25)] hover:scale-105 transition-all"
                >
                  Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
