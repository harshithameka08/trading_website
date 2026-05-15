import React from 'react';
import { 
  Search, Filter, ChevronDown, Calendar, Clock, 
  Eye, Bookmark, TrendingUp, ArrowRight, Mail, 
  LayoutGrid, List, MessageSquare, Share2,
  ChevronLeft, ChevronRight, Download, Globe,
  Shield, Brain, Target, Info, AppWindow, RotateCcw
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

  const pageSize = 6;
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
    <div className="min-h-screen bg-bg-main text-white pt-24 pb-20 overflow-visible">
      {/* Full-Width Hero Section */}
      <section className="relative h-[420px] max-md:h-auto max-md:min-h-[380px] w-full overflow-hidden mb-12">
        <div className="absolute inset-0">
           <img src={heroBg} className="w-full h-full object-cover max-md:object-center" alt="Blog Hero" />
           {/* Mobile Readability Overlay */}
           <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80 md:hidden" />
           <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-10 max-w-[1400px] h-full relative z-10 flex flex-col justify-center space-y-7 pb-12 max-md:pt-32">

           <h1 className="text-5xl md:text-6xl font-sans font-black tracking-tight leading-tight text-white">
              Master the Markets<br />
              Trade with <span className="text-[#F4C542]">Precision</span>
           </h1>
           <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed max-w-xl">
              Expert insights, trading strategies, and market analysis to help you trade smarter and grow consistently.
           </p>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-10 max-w-[1200px] overflow-visible">

        {/* Discovery Bar */}
        <div className="space-y-6 mb-12 overflow-visible">
          {/* Top Search Row */}
          <div className="flex gap-4 items-stretch justify-between">
             <div className="relative w-full max-w-2xl flex">
                <input 
                  type="text" 
                  placeholder="Search articles, topics or keywords..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 h-14 bg-bg-secondary/80 rounded-l-xl border border-white/5 pl-6 pr-4 text-sm font-medium focus:outline-none focus:border-[#00E5FF]/20 transition-all placeholder:text-gray-600"
                />
                <button className="w-14 h-14 bg-[#00E5FF] rounded-r-xl flex items-center justify-center text-black hover:bg-[#00E5FF]/90 transition-all shadow-lg shadow-[#00E5FF]/20">
                   <Search className="w-5 h-5" />
                </button>
             </div>
             <button className="h-14 px-8 bg-bg-secondary/80 rounded-xl border border-white/10 hover:bg-white/5 flex items-center gap-3 transition-all">
                <Filter className="w-4 h-4 text-gray-400" /> 
                <span className="text-[11px] font-black uppercase tracking-widest">Filters</span>
             </button>
          </div>

          {/* Filter Details Card */}
          <div className="bg-bg-secondary/40 border border-white/5 rounded-2xl p-6 overflow-visible">
            <div className="flex flex-wrap items-end gap-x-8 gap-y-6">
               {[
                 { label: 'Categories', value: activeCategory, options: ['All Articles', ...categories.slice(1)], setter: setActiveCategory },
                 { label: 'Difficulty Level', value: activeDifficulty, options: ['All Levels', 'Beginner', 'Intermediate', 'Advanced'], setter: setActiveDifficulty },
                 { label: 'Article Type', value: activeType, options: ['All Types', 'Technical', 'Strategy', 'Educational'], setter: setActiveType },
                 { label: 'Sort By', value: activeSort, options: ['Latest', 'Popular'], setter: setActiveSort }
               ].map((f) => (
                 <div key={f.label} className="space-y-3 relative min-w-[200px]">
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
                          className="absolute top-full left-0 right-0 mt-2 bg-bg-secondary border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
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

              <div 
                onClick={() => {
                  setActiveCategory('All Articles');
                  setActiveDifficulty('All Levels');
                  setActiveType('All Types');
                  setActiveSort('Latest');
                  setSearchQuery('');
                }}
                className="ml-auto mb-1 flex items-center gap-3 cursor-pointer group pb-1"
              >
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-[#F4C542] transition-colors">Clear All</span>
                 <div className="w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-[#F4C542] transition-all">
                    <RotateCcw className="w-3.5 h-3.5" />
                 </div>
              </div>
            </div>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-3 pt-2">
             {categories.map((cat) => (
               <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all",
                  activeCategory === cat ? "bg-[#00E5FF] text-black" : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                )}
               >
                 {cat}
               </button>
             ))}
          </div>
        </div>

        {/* Main Content Grid - blog-container logic */}
        <div className="grid grid-cols-1 gap-12 items-start overflow-visible">
          
          {/* Left Column: Articles - articles-column logic */}
          <div className="min-w-0 w-full space-y-8">
             <div className="flex justify-between items-center px-1">
                <h2 className="text-xl font-black tracking-tight flex items-center gap-3">
                   {activeCategory === 'All Articles' ? 'All Articles' : activeCategory} <span className="text-gray-500 font-bold text-sm">({filteredArticles.length})</span>
                </h2>

             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 border-t border-white/5 pt-8">
                {paginatedArticles.length > 0 ? (
                  paginatedArticles.map((art) => (
                    <div key={art.id} className="group flex flex-col bg-bg-secondary/40 rounded-2xl border border-white/5 overflow-hidden hover:border-[#00E5FF]/30 transition-all">
                       <div className="h-48 overflow-hidden shrink-0 bg-bg-secondary">
                          <img src={art.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={art.title} />
                       </div>
                       <div className="p-5 flex-1 flex flex-col justify-between">
                          <div className="space-y-4">
                             <span className="text-[9px] font-black tracking-[0.15em] text-[#00E5FF] uppercase block">{art.category}</span>
                             <h3 className="text-xl font-black leading-tight text-white group-hover:text-[#00E5FF] transition-colors line-clamp-2">{art.title}</h3>
                             <p className="text-gray-500 text-sm font-medium line-clamp-2 leading-relaxed">{art.excerpt}</p>
                          </div>
                          <div className="flex items-center justify-between pt-6 mt-auto">
                             <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2.5">
                                   <div className="w-6 h-6 rounded-full border border-white/10 overflow-hidden">
                                      <img src={avatarPlaceholder} alt={art.author} />
                                   </div>
                                   <span className="text-[11px] font-black text-white">{art.author}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                   <span className="text-[10px] text-gray-600 font-bold uppercase tracking-tight">{art.date}</span>
                                   <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-bold uppercase">
                                      <Clock className="w-3.5 h-3.5" />
                                      <span>{art.readTime}</span>
                                   </div>
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
             {totalPages > 1 && (
               <div className="flex justify-center items-center gap-2 pt-8">
                  <button 
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className={cn(
                      "w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all",
                      currentPage === 1 ? "opacity-30 cursor-not-allowed" : "text-gray-400 hover:text-white"
                    )}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button 
                      key={p}
                      onClick={() => setCurrentPage(p)}
                      className={cn(
                        "w-10 h-10 rounded-xl border transition-all text-xs font-black",
                        p === currentPage ? "bg-[#00E5FF] border-[#00E5FF] text-black shadow-lg shadow-[#00E5FF]/20" : "bg-white/5 border-white/10 text-gray-500 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {p}
                    </button>
                  ))}

                  <button 
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className={cn(
                      "w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all",
                      currentPage === totalPages ? "opacity-30 cursor-not-allowed" : "text-gray-400 hover:text-white"
                    )}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
               </div>
             )}
          </div>
        </div>

        {/* Institutional Footer (Mini) */}
      </div>
    </div>
  );
}
