import React from 'react';
import { 
  Search, Filter, ChevronDown, Calendar, Clock, 
  Eye, Bookmark, TrendingUp, ArrowRight, Mail, 
  LayoutGrid, List, MessageSquare, Share2,
  ChevronLeft, ChevronRight, Download, Globe,
  Shield, Brain, Target, Info, AppWindow
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button, Badge, Card } from '@/src/components/UI';
import { cn } from '@/src/lib/utils';

// Assets
import heroBg from '../aboutimage.png';
import blogNifty from '../blog_nifty.png';
import blogBrain from '../blog_brain.png';
import blogRisk from '../blog_risk.png';
import logoMain from '../logo_teamus.png';
import instructorImg from '../instructor_avatar.png';
import avatarPlaceholder from '../avatar_1.png';

export default function Blog() {
  const [activeCategory, setActiveCategory] = React.useState('All Articles');
  const [activeDifficulty, setActiveDifficulty] = React.useState('All Levels');
  const [activeType, setActiveType] = React.useState('All Types');
  const [activeSort, setActiveSort] = React.useState('Latest');
  const [viewMode, setViewMode] = React.useState('List');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [showAllPopular, setShowAllPopular] = React.useState(false);
  const [showAllTrending, setShowAllTrending] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  const categories = [
    'All Articles', 'Market Analysis', 'Trading Strategies', 
    'Risk Management', 'Technical Analysis', 'Psychology', 
    'Beginner Guide', 'News & Updates'
  ];

  const articles = [
    {
      id: 1,
      category: 'MARKET ANALYSIS',
      title: 'NIFTY 50 Technical Outlook: Key Levels to Watch This Week',
      excerpt: 'A detailed technical analysis of NIFTY 50 with key support, resistance and trading opportunities.',
      author: 'Arjun Mehta',
      date: 'May 19, 2024',
      readTime: '6 min read',
      views: '1.2K',
      image: blogNifty,
      difficulty: 'Intermediate',
      type: 'Technical'
    },
    {
      id: 2,
      category: 'TRADING STRATEGIES',
      title: 'Swing Trading Strategy That Works in Any Market Condition',
      excerpt: 'Learn a proven swing trading strategy with high probability setups and clear rules.',
      author: 'Vivek Singh',
      date: 'May 17, 2024',
      readTime: '8 min read',
      views: '1.6K',
      image: heroBg,
      difficulty: 'Beginner',
      type: 'Strategy'
    },
    {
      id: 3,
      category: 'TRADING PSYCHOLOGY',
      title: 'Master Your Mind: 7 Habits of Highly Profitable Traders',
      excerpt: 'Discover the mindset and daily habits that separate successful traders from the rest.',
      author: 'Neha Patel',
      date: 'May 15, 2024',
      readTime: '7 min read',
      views: '1.1K',
      image: blogBrain,
      difficulty: 'Advanced',
      type: 'Educational'
    },
    {
      id: 4,
      category: 'MARKET ANALYSIS',
      title: 'Bank Nifty Analysis: Breakout or Fakeout?',
      excerpt: 'We analyze Bank Nifty\'s chart structure, key levels, and what traders should watch for in the coming sessions.',
      author: 'Arjun Mehta',
      date: 'May 14, 2024',
      readTime: '5 min read',
      views: '842',
      image: blogNifty,
      difficulty: 'Intermediate',
      type: 'Technical'
    },
    {
      id: 5,
      category: 'RISK MANAGEMENT',
      title: 'Position Sizing Secrets: How to Risk Like a Pro',
      excerpt: 'Learn the right way to calculate position size and manage risk like professional traders.',
      author: 'Aditya Raj',
      date: 'May 13, 2024',
      readTime: '6 min read',
      views: '923',
      image: blogRisk,
      difficulty: 'Advanced',
      type: 'Educational'
    },
    {
      id: 6,
      category: 'TECHNICAL ANALYSIS',
      title: 'Moving Averages Explained: Simple Yet Powerful',
      excerpt: 'A complete guide to using moving averages for trend identification and high probability entries.',
      author: 'Vivek Singh',
      date: 'May 12, 2024',
      readTime: '7 min read',
      views: '1.1K',
      image: blogNifty,
      difficulty: 'Beginner',
      type: 'Technical'
    },
    {
      id: 7,
      category: 'BEGINNER GUIDE',
      title: 'Complete Guide to Candlestick Patterns',
      excerpt: 'Learn all the important candlestick patterns with real chart examples and how to trade them.',
      author: 'Karan Mehta',
      date: 'May 10, 2024',
      readTime: '5 min read',
      views: '1.3K',
      image: blogBrain,
      difficulty: 'Beginner',
      type: 'Educational'
    },
    {
      id: 8,
      category: 'NEWS & UPDATES',
      title: 'RBI Policy Impact on Stock Market: Key Takeaways',
      excerpt: 'Key highlights from RBI policy and how it can impact the Indian stock market and your trades.',
      author: 'Teamus 369',
      date: 'May 09, 2024',
      readTime: '4 min read',
      views: '684',
      image: blogRisk,
      difficulty: 'Beginner',
      type: 'Educational'
    },
    {
      id: 9,
      category: 'MARKET ANALYSIS',
      title: 'Global Markets Outlook: Impact of Fed Policy',
      excerpt: 'How the US Federal Reserve decisions are rippling through global markets and what it means for Indian investors.',
      author: 'Arjun Mehta',
      date: 'May 08, 2024',
      readTime: '8 min read',
      views: '1.4K',
      image: blogNifty,
      difficulty: 'Advanced',
      type: 'Educational'
    },
    {
      id: 10,
      category: 'TRADING STRATEGIES',
      title: 'Advanced Scalping for Fast-Paced Markets',
      excerpt: 'Master the art of quick entries and exits in high volatility environments with these proven scalping techniques.',
      author: 'Vivek Singh',
      date: 'May 07, 2024',
      readTime: '6 min read',
      views: '2.1K',
      image: blogBrain,
      difficulty: 'Advanced',
      type: 'Strategy'
    },
    {
      id: 11,
      category: 'RISK MANAGEMENT',
      title: 'The Math Behind Trading: Why Risk-to-Reward is King',
      excerpt: 'Understanding the probability and mathematics that ensure long-term profitability even with a 50% win rate.',
      author: 'Neha Patel',
      date: 'May 06, 2024',
      readTime: '10 min read',
      views: '1.8K',
      image: blogRisk,
      difficulty: 'Intermediate',
      type: 'Educational'
    },
    {
      id: 12,
      category: 'TECHNICAL ANALYSIS',
      title: 'Volume Profile: Seeing Where the Big Money is Trading',
      excerpt: 'Go beyond price and learn how to identify institutional levels using volume profile analysis.',
      author: 'Arjun Mehta',
      date: 'May 05, 2024',
      readTime: '9 min read',
      views: '2.4K',
      image: blogNifty,
      difficulty: 'Advanced',
      type: 'Technical'
    },
    {
      id: 13,
      category: 'TRADING PSYCHOLOGY',
      title: 'Overcoming the Fear of Pulling the Trigger',
      excerpt: 'Practical exercises to build confidence and eliminate hesitation when your trading setup appears.',
      author: 'Neha Patel',
      date: 'May 04, 2024',
      readTime: '5 min read',
      views: '1.2K',
      image: blogBrain,
      difficulty: 'Beginner',
      type: 'Educational'
    },
    {
      id: 14,
      category: 'MARKET ANALYSIS',
      title: 'Commodity Trading: Gold and Silver Outlook',
      excerpt: 'A comprehensive look at precious metals and the factors driving their current price action.',
      author: 'Vivek Singh',
      date: 'May 03, 2024',
      readTime: '7 min read',
      views: '950',
      image: blogRisk,
      difficulty: 'Intermediate',
      type: 'Technical'
    }
  ];

  const pageSize = 5;
  const filteredArticles = articles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All Articles' || art.category === activeCategory.toUpperCase();
    const matchesDifficulty = activeDifficulty === 'All Levels' || art.difficulty === activeDifficulty;
    const matchesType = activeType === 'All Types' || art.type === activeType;
    return matchesSearch && matchesCategory && matchesDifficulty && matchesType;
  }).sort((a, b) => {
    if (activeSort === 'Latest') return 0;
    if (activeSort === 'Popular') return parseInt(b.views) - parseInt(a.views);
    return 0;
  });

  const paginatedArticles = filteredArticles.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.ceil(filteredArticles.length / pageSize);

  return (
    <div className="min-h-screen bg-[#050816] text-white pt-24 pb-20">
      {/* Full-Width Hero Section */}
      <section className="relative h-[420px] w-full overflow-hidden mb-12">
        <div className="absolute inset-0">
           <img src={heroBg} className="w-full h-full object-cover" alt="Blog Hero" />
           <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-10 max-w-[1500px] h-full relative z-10 flex flex-col justify-center space-y-7">
           <p className="text-white/80 font-black text-sm uppercase tracking-[0.3em]">TEAMUS 369 BLOG</p>
           <h1 className="text-7xl font-sans font-black tracking-tight leading-[1.1] text-white">
              Insights. Strategies.<br />
              <span className="text-[#00E5FF]">Success.</span>
           </h1>
           <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-xl">
              Expert insights, trading strategies, and market analysis to help you trade smarter and grow consistently.
           </p>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-10 max-w-[1500px]">

        {/* Discovery Bar */}
        <div className="space-y-6 mb-12">
          {/* Top Search Row */}
          <div className="flex gap-4 items-stretch">
             <div className="relative flex-1 flex">
                <input 
                  type="text" 
                  placeholder="Search articles, topics or keywords..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 h-14 bg-[#0B1225]/80 rounded-l-xl border border-white/5 pl-6 pr-4 text-sm font-medium focus:outline-none focus:border-[#00E5FF]/20 transition-all placeholder:text-gray-600"
                />
                <button className="w-14 h-14 bg-[#00E5FF] rounded-r-xl flex items-center justify-center text-black hover:bg-[#00E5FF]/90 transition-all shadow-lg shadow-[#00E5FF]/20">
                   <Search className="w-5 h-5" />
                </button>
             </div>
             <button className="h-14 px-8 bg-[#0B1225]/80 rounded-xl border border-white/10 hover:bg-white/5 flex items-center gap-3 transition-all">
                <Filter className="w-4 h-4 text-gray-400" /> 
                <span className="text-[11px] font-black uppercase tracking-widest">Filters</span>
             </button>
          </div>

          {/* Filter Details Card */}
          <div className="bg-[#0B1225]/40 border border-white/5 rounded-2xl p-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
               {[
                 { label: 'Categories', value: activeCategory, options: ['All Articles', ...categories.slice(1)], setter: setActiveCategory },
                 { label: 'Difficulty Level', value: activeDifficulty, options: ['All Levels', 'Beginner', 'Intermediate', 'Advanced'], setter: setActiveDifficulty },
                 { label: 'Article Type', value: activeType, options: ['All Types', 'Technical', 'Strategy', 'Educational'], setter: setActiveType },
                 { label: 'Sort By', value: activeSort, options: ['Latest', 'Popular'], setter: setActiveSort }
               ].map((f) => (
                 <div key={f.label} className="space-y-3 relative">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">{f.label}</label>
                    <div 
                      onClick={() => setOpenDropdown(openDropdown === f.label ? null : f.label)}
                      className={cn(
                        "h-12 bg-black/40 rounded-xl border px-4 flex items-center justify-between cursor-pointer transition-all group",
                        openDropdown === f.label ? "border-[#00E5FF] ring-1 ring-[#00E5FF]/20" : "border-white/10 hover:border-[#00E5FF]/30"
                      )}
                    >
                       <span className="text-[11px] font-bold text-gray-400 group-hover:text-white transition-colors">
                          {f.value}
                       </span>
                       <ChevronDown className={cn("w-4 h-4 text-gray-600 transition-transform", openDropdown === f.label && "rotate-180 text-[#00E5FF]")} />
                    </div>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {openDropdown === f.label && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-[#0B1225] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
                        >
                           {f.options.map((opt) => (
                             <button 
                              key={opt}
                              onClick={() => {
                                f.setter(opt);
                                setOpenDropdown(null);
                              }}
                              className={cn(
                                "w-full px-4 py-3 text-left text-[11px] font-bold transition-colors",
                                f.value === opt ? "bg-[#00E5FF] text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"
                              )}
                             >
                               {opt}
                             </button>
                           ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
               ))}
            </div>
            
            <div 
              onClick={() => {
                setActiveCategory('All Articles');
                setActiveDifficulty('All Levels');
                setActiveType('All Types');
                setActiveSort('Latest');
                setSearchQuery('');
              }}
              className="absolute bottom-6 right-6 flex items-center gap-3 cursor-pointer group"
            >
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-[#F4C542] transition-colors">Clear All</span>
               <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:border-[#F4C542] group-hover:text-[#F4C542] transition-all">
                  <TrendingUp className="w-3 h-3 rotate-180" />
               </div>
            </div>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
             {categories.map((cat) => (
               <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all",
                  activeCategory === cat ? "bg-[#00E5FF] text-black shadow-lg shadow-[#00E5FF]/20" : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                )}
               >
                 {cat}
               </button>
             ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Articles */}
          <div className="lg:col-span-2 space-y-8">
             <div className="flex justify-between items-center px-1">
                <h2 className="text-xl font-black tracking-tight flex items-center gap-3">
                   All Articles <span className="text-gray-500 font-bold text-sm">(250+)</span>
                </h2>
                <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
                   <button onClick={() => setViewMode('Grid')} className={cn("p-2 rounded-md transition-all", viewMode === 'Grid' ? "bg-white/10 text-white shadow-sm" : "text-gray-500 hover:text-gray-300")}>
                      <LayoutGrid className="w-4 h-4" />
                   </button>
                   <button onClick={() => setViewMode('List')} className={cn("p-2 rounded-md transition-all", viewMode === 'List' ? "bg-white/10 text-white shadow-sm" : "text-gray-500 hover:text-gray-300")}>
                      <List className="w-4 h-4" />
                   </button>
                </div>
             </div>

             <div className="space-y-0 border-t border-white/5">
                {paginatedArticles.length > 0 ? (
                  paginatedArticles.map((art) => (
                    <div key={art.id} className="group py-8 border-b border-white/5 hover:bg-white/[0.01] transition-all px-2">
                       <div className="flex flex-col md:flex-row gap-8">
                          <div className="md:w-80 h-48 rounded-xl overflow-hidden shrink-0 border border-white/5 bg-[#0B1225]">
                             <img src={art.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={art.title} />
                          </div>
                          <div className="flex-1 flex flex-col justify-between py-0.5">
                             <div className="space-y-3">
                                <span className="text-[9px] font-black tracking-[0.15em] text-[#00E5FF] uppercase block">{art.category}</span>
                                <h3 className="text-2xl font-black leading-tight text-white group-hover:text-[#00E5FF] transition-colors line-clamp-2">{art.title}</h3>
                                <p className="text-gray-500 text-sm font-medium line-clamp-2 leading-relaxed max-w-2xl">{art.excerpt}</p>
                             </div>
                             <div className="flex items-center justify-between pt-6 mt-auto">
                                <div className="flex items-center gap-4">
                                   <div className="flex items-center gap-2.5">
                                      <div className="w-6 h-6 rounded-full border border-white/10 overflow-hidden">
                                         <img src={avatarPlaceholder} alt={art.author} />
                                      </div>
                                      <span className="text-[11px] font-black text-white">{art.author}</span>
                                   </div>
                                   <span className="text-[10px] text-gray-600 font-bold uppercase tracking-tight">{art.date}</span>
                                   <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-bold uppercase">
                                      <Clock className="w-3.5 h-3.5" />
                                      <span>{art.readTime}</span>
                                   </div>
                                </div>
                                <div className="flex items-center gap-6">
                                   <div className="flex items-center gap-2 text-[11px] text-gray-500 font-black uppercase">
                                      <Eye className="w-4 h-4" />
                                      <span>{art.views}</span>
                                   </div>
                                   <button className="text-gray-500 hover:text-white transition-colors">
                                      <Bookmark className="w-4.5 h-4.5" />
                                   </button>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                  ))
                ) : (
                  <div className="py-20 text-center space-y-4 bg-white/5 rounded-2xl border border-dashed border-white/10 mt-8">
                     <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto text-gray-500">
                        <Search className="w-8 h-8" />
                     </div>
                     <div>
                        <p className="text-xl font-black">No articles found</p>
                        <p className="text-gray-500 text-sm">Try adjusting your search or filters to find what you're looking for.</p>
                     </div>
                     <Button 
                      variant="outline" 
                      className="border-white/10"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('All Articles');
                        setActiveDifficulty('All Levels');
                        setActiveType('All Types');
                      }}
                     >
                       Reset All Filters
                     </Button>
                  </div>
                )}
             </div>

             {/* Pagination */}
             <div className="flex justify-center items-center gap-2 pt-8">
                <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"><ChevronLeft className="w-5 h-5" /></button>
                {[1, 2, 3, 4, 5, '...', 21].map((p, i) => (
                  <button key={i} className={cn(
                    "w-10 h-10 rounded-xl border transition-all text-xs font-black",
                    p === 1 ? "bg-[#00E5FF] border-[#00E5FF] text-black shadow-lg shadow-[#00E5FF]/20" : "bg-white/5 border-white/10 text-gray-500 hover:text-white hover:bg-white/10"
                  )}>{p}</button>
                ))}
                <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"><ChevronRight className="w-5 h-5" /></button>
             </div>
          </div>

          {/* Right Column: Sidebar */}
          <aside className="space-y-8">
             {/* Stay Updated */}
             <Card className="bg-[#0B1225] border-white/5 p-6 rounded-2xl shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-700" />
                <div className="relative z-10 space-y-5">
                   <div className="flex items-center gap-3">
                      <div className="text-[#00E5FF]">
                         <Mail className="w-8 h-8 fill-[#00E5FF]/20" />
                      </div>
                      <h4 className="text-lg font-black text-white leading-tight">Stay Updated</h4>
                   </div>
                   
                   <p className="text-gray-400 text-xs font-medium leading-relaxed">
                      Get the latest trading insights, strategies and market updates straight to your inbox.
                   </p>

                   <div className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full h-11 bg-black/40 border border-white/10 rounded-xl px-4 text-xs font-medium text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00E5FF]/30 transition-all" 
                      />
                      <Button className="w-full h-11 bg-[#0081FB] hover:bg-[#0070E0] text-white border-none font-black text-[11px] uppercase tracking-widest shadow-lg shadow-blue-500/20">
                         Subscribe Now
                      </Button>
                   </div>
                </div>
             </Card>

             {/* Popular Articles */}
             <div className="space-y-6">
                <div className="flex items-center justify-between">
                   <h5 className="text-[11px] font-black uppercase tracking-widest text-white">Popular Articles</h5>
                   <button 
                    onClick={() => setShowAllPopular(!showAllPopular)}
                    className="text-[10px] font-black uppercase tracking-widest text-[#00E5FF] hover:underline flex items-center gap-1"
                   >
                      {showAllPopular ? 'Show Less' : 'View All'} <ChevronRight className="w-3 h-3" />
                   </button>
                </div>
                <div className="space-y-5">
                   {[
                      { id: 1, title: 'Support and Resistance Trading Strategy That...', views: '2.4K', image: blogNifty },
                      { id: 2, title: 'RSI Indicator: The Complete Guide', views: '2.1K', image: blogBrain },
                      { id: 3, title: 'Volume Analysis: How Smart Money Trade', views: '1.9K', image: blogRisk },
                      { id: 4, title: 'How to Build a Winning Trading Plan', views: '1.6K', image: blogNifty },
                      { id: 5, title: 'Fibonacci Retracement: Best Trading Guide', views: '1.4K', image: blogRisk },
                      { id: 6, title: 'Moving Averages Mastery', views: '1.2K', image: blogBrain },
                      { id: 7, title: 'Option Greeks Explained', views: '1.1K', image: blogNifty }
                   ].slice(0, showAllPopular ? 7 : 5).map((art, i) => (
                      <div key={art.id} className="flex gap-4 group cursor-pointer">
                         <div className="relative w-5 h-5 flex items-center justify-center shrink-0">
                            <span className="text-[11px] font-black text-gray-700 group-hover:text-[#00E5FF] transition-colors">{i + 1}</span>
                         </div>
                         <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 border border-white/5 bg-[#0B1225]">
                            <img src={art.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={art.title} />
                         </div>
                         <div className="space-y-1">
                            <h6 className="text-[11px] font-black text-gray-300 group-hover:text-white transition-colors line-clamp-2 leading-tight">{art.title}</h6>
                            <p className="text-[9px] text-gray-600 font-bold uppercase flex items-center gap-1.5">
                               <Eye className="w-3 h-3" /> {art.views} views
                            </p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             {/* Browse by Topic */}
             <div className="space-y-4">
                <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest px-1">Browse by Topic</h4>
                <div className="space-y-1">
                   {[
                     { icon: <TrendingUp />, name: 'Market Analysis', count: 45 },
                     { icon: <Target />, name: 'Trading Strategies', count: 68 },
                     { icon: <LayoutGrid />, name: 'Technical Analysis', count: 52 },
                     { icon: <Shield />, name: 'Risk Management', count: 32 },
                     { icon: <Brain />, name: 'Trading Psychology', count: 28 },
                     { icon: <Bookmark />, name: 'Beginner Guide', count: 15 },
                     { icon: <Globe />, name: 'News & Updates', count: 10 }
                   ].map((t, i) => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group cursor-pointer">
                        <div className="flex items-center gap-3">
                           <div className="text-gray-500 group-hover:text-[#F4C542] transition-colors">
                              {React.cloneElement(t.icon as React.ReactElement, { className: 'w-4 h-4' })}
                           </div>
                           <span className="text-[11px] font-bold text-gray-400 group-hover:text-white transition-colors">{t.name}</span>
                        </div>
                        <span className="text-[10px] font-black text-gray-600 group-hover:text-[#F4C542]">{t.count}</span>
                     </div>
                   ))}
                </div>
             </div>

             {/* Trending This Week */}
             <div className="space-y-6">
                <div className="flex items-center justify-between">
                   <h5 className="text-[11px] font-black uppercase tracking-widest text-white">Trending This Week</h5>
                   <button 
                    onClick={() => setShowAllTrending(!showAllTrending)}
                    className="text-[10px] font-black uppercase tracking-widest text-[#00E5FF] hover:underline flex items-center gap-1"
                   >
                      {showAllTrending ? 'Show Less' : 'View All'} <ChevronRight className="w-3 h-3" />
                   </button>
                </div>
                <div className="space-y-5">
                   {[
                      { id: 1, title: 'How to Use Trendlines Effectively in Trading', views: '1.8K views', image: blogNifty },
                      { id: 2, title: 'Breakout Trading Strategy: Step-by-Step Guide', views: '1.5K views', image: blogBrain },
                      { id: 3, title: 'Ichimoku Cloud: Complete Trading Guide', views: '1.2K views', image: blogRisk },
                      { id: 4, title: 'Bollinger Bands Secrets', views: '1.1K views', image: blogNifty },
                      { id: 5, title: 'Advanced Scalping Techniques', views: '900 views', image: blogBrain }
                   ].slice(0, showAllTrending ? 5 : 3).map((art) => (
                      <div key={art.id} className="flex gap-4 group cursor-pointer">
                         <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 border border-white/5 bg-[#0B1225]">
                            <img src={art.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={art.title} />
                         </div>
                         <div className="space-y-1">
                            <h6 className="text-[11px] font-black text-gray-300 group-hover:text-white transition-colors line-clamp-2 leading-tight">{art.title}</h6>
                            <p className="text-[9px] text-gray-600 font-bold uppercase">{art.views}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             {/* Live Strategy Sessions CTA */}
             <Card className="bg-[#0B1020] border-white/5 p-0 rounded-2xl relative overflow-hidden group shadow-2xl h-[240px]">
                {/* Background Chart Overlay */}
                <div className="absolute inset-0 opacity-20">
                   <TrendingUp className="absolute right-10 top-10 w-48 h-48 text-[#00E5FF] -rotate-12" />
                </div>
                
                {/* Content Layer */}
                <div className="relative z-10 h-full flex">
                   {/* Left Content */}
                   <div className="flex-1 p-7 flex flex-col justify-center space-y-6">
                      <div className="space-y-3">
                         <h4 className="text-xl font-black text-white leading-tight">Join Live Strategy Sessions</h4>
                         <p className="text-gray-400 text-[11px] font-medium leading-relaxed max-w-[200px]">Learn directly from market experts in our live strategy sessions.</p>
                      </div>
                      <Button className="w-fit bg-[#F4C542] hover:bg-[#F4C542]/90 text-black border-none font-black text-[10px] px-5 py-3 rounded-xl flex items-center gap-2">
                         View Live Classes <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                   </div>
                   
                   {/* Right Mentor Area */}
                   <div className="w-[180px] relative">
                      <div className="absolute top-4 right-4 z-20">
                         <Badge className="bg-red-600 text-white border-none text-[8px] font-black px-2.5 py-1 flex items-center gap-1.5 rounded-full shadow-lg shadow-red-600/20">
                            <div className="w-1 h-1 bg-white rounded-full animate-pulse" /> LIVE
                         </Badge>
                      </div>
                      <img 
                        src={instructorImg} 
                        className="absolute bottom-0 right-0 h-[110%] w-auto object-contain object-bottom transition-all duration-700 group-hover:scale-105" 
                        alt="Rahul Mehta" 
                      />
                   </div>
                </div>
             </Card>
          </aside>
        </div>

        {/* Institutional Footer (Mini) */}
      </div>
    </div>
  );
}
