import { Badge, Button, Card } from "@/src/components/UI";
import { Star, TrendingUp, Users, Award, Shield, ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Mentors() {
  const mentors = [
    {
      name: "Alexander Rivers",
      style: "High-Frequency Scalping",
      roi: "142%",
      followers: "12.4K",
      exp: "9+ Years",
      rating: 4.9,
      tags: ["Forex", "Gold", "Nasdaq"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah ‘Alpha’ Chen",
      style: "Smart Money Concepts",
      roi: "89%",
      followers: "45.2K",
      exp: "6+ Years",
      rating: 5.0,
      tags: ["Crypto", "Altcoins", "DeFi"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Marcus Vancini",
      style: "Institutional Flow",
      roi: "210%",
      followers: "8.1K",
      exp: "12+ Years",
      rating: 4.8,
      tags: ["Stocks", "ETFs", "Macro"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David ‘The Wheel’ Hoffman",
      style: "Options Strategies",
      roi: "65%",
      followers: "15.9K",
      exp: "15+ Years",
      rating: 4.9,
      tags: ["Options", "Hedging", "SPY"],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-6">
          <Badge>World Class Faculty</Badge>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight italic">Elite <span className="text-primary">Trading Mentors</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Learn from verified professional traders who have collectively managed over $500M in institutional and personal assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {mentors.map((mentor, i) => (
            <motion.div 
              key={mentor.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col md:flex-row h-full"
            >
              <div className="w-full md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                <img src={mentor.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={mentor.name} />
                <div className="absolute inset-0 bg-linear-to-t from-bg-main via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1 bg-primary text-bg-main font-bold text-[10px] rounded-sm">ROI: {mentor.roi}</div>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{mentor.name}</h3>
                    <div className="flex items-center gap-1 text-gold text-sm font-bold">
                      <Star className="w-4 h-4 fill-gold" /> {mentor.rating}
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-widest">{mentor.style}</div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="glass-card bg-white/5 p-3 px-4 border-white/5">
                      <div className="text-[10px] text-gray-500 uppercase mb-1">Followers</div>
                      <div className="font-bold text-lg">{mentor.followers}</div>
                    </div>
                    <div className="glass-card bg-white/5 p-3 px-4 border-white/5">
                      <div className="text-[10px] text-gray-500 uppercase mb-1">Experience</div>
                      <div className="font-bold text-lg">{mentor.exp}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {mentor.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded-sm text-[10px] text-gray-400 font-bold uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="sm" to="/signup" className="flex-1">Book 1:1 Call</Button>
                  <Button variant="secondary" to="/signup" size="sm" className="w-12 h-10 p-0 rounded-xl"><MessageCircle className="w-5 h-5" /></Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="py-20 border-t border-white/5 relative">
          <div className="grid lg:grid-cols-4 gap-12 text-center">
             {[
               { icon: <TrendingUp />, title: 'Real ROI Tracking', desc: 'All mentor statistics are verified via account audits.' },
               { icon: <Users />, title: 'Live Mentorship', desc: 'Interactive chat and voice during market hours.' },
               { icon: <Award />, title: 'Elite Community', desc: 'Private discord and internal forum access.' },
               { icon: <Shield />, title: 'Proven Methods', desc: 'Strategies tested over multiple market cycles.' },
             ].map((f, i) => (
               <div key={i} className="space-y-4 group">
                 <div className="w-16 h-16 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform">
                    {f.icon}
                 </div>
                 <h4 className="font-bold text-xl">{f.title}</h4>
                 <p className="text-gray-500 text-sm">{f.desc}</p>
               </div>
             ))}
          </div>
        </section>
      </div>
    </div>
  );
}
