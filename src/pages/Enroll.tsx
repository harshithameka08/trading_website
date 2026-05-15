import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { 
  ArrowLeft, User, Mail, Phone, BookOpen, Send, 
  CheckCircle2, Sparkles, ShieldCheck, Globe, Zap,
  MessageSquare, ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/src/components/UI";
import { cn } from "@/src/lib/utils";

// Assets
import logo from "../trading_logoproject.png";

export default function Enroll() {
  const [searchParams] = useSearchParams();
  const initialCourse = searchParams.get("course") || "";
  
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    course: initialCourse,
    experience: "Beginner",
    message: ""
  });

  const [isFocused, setIsFocused] = React.useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API call
  };

  const courses = [
    "Institutional Scalping Masterclass",
    "Swing Trading Strategy Pro",
    "Advanced Price Action Mastery",
    "Options Trading Blueprint",
    "Crypto Market Intelligence"
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white/5 backdrop-blur-3xl border border-gold/20 rounded-[2.5rem] p-12 text-center space-y-8 shadow-[0_40px_100px_rgba(244,197,66,0.1)]"
        >
          <div className="w-24 h-24 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-12 h-12 text-gold animate-bounce" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-black uppercase tracking-tight">Enrollment <br /><span className="text-gold">Received</span></h2>
            <p className="text-gray-400 font-medium leading-relaxed">
              Our institutional advisors will review your application and contact you within the next 12-24 hours to finalize your seat.
            </p>
          </div>
          <Link to="/">
            <Button className="w-full bg-gold text-black font-black h-14 rounded-2xl hover:scale-105 transition-all mt-4">
              RETURN TO HUB
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-gold/30 relative overflow-hidden pt-28 pb-20">
      
      {/* Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
        />
      </div>

      <div className="max-w-[1700px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Information & Trust */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
               <Link to="/courses" className="inline-flex items-center gap-2 text-[10px] font-black text-gold uppercase tracking-[0.4em] hover:text-white transition-colors group">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to courses
               </Link>
               <h1 className="text-5xl xl:text-7xl font-sans font-black leading-[1.05] tracking-tight">
                  Secure Your <br />
                  <span className="text-gold italic">Seat</span> in the Batch
               </h1>
               <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-lg">
                  Join our elite circle of traders. Provide your details below to start your journey into institutional-grade market mastery.
               </p>
            </div>

            <div className="space-y-8">
               {[
                 { icon: ShieldCheck, title: "Identity Protection", desc: "Your data is encrypted with enterprise-level security protocols." },
                 { icon: Zap, title: "Instant Activation", desc: "Get immediate access to pre-recorded modules upon verification." },
                 { icon: Globe, title: "Global Community", desc: "Connect with traders from 40+ countries in our private hubs." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/3 border border-white/5 flex items-center justify-center text-gold group-hover:bg-gold/10 group-hover:border-gold/20 transition-all shrink-0">
                       <item.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                       <h4 className="text-lg font-black uppercase tracking-tight">{item.title}</h4>
                       <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="p-8 rounded-[2.5rem] bg-linear-to-r from-gold/10 to-transparent border border-gold/10 flex items-center gap-6">
               <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-gray-800" />
                  ))}
               </div>
               <p className="text-xs font-black text-white uppercase tracking-widest">
                  <span className="text-gold">1,240+</span> Students Joined this month
               </p>
            </div>
          </motion.div>

          {/* Right Side: Enrollment Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/2 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-8 lg:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative overflow-hidden group">
               
               {/* Decorative Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
               
               <div className="flex justify-center mb-12 relative z-10 lg:hidden">
                  <img src={logo} alt="TEAMUS 369" className="h-10 w-auto" />
               </div>

               <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
                  <div className="grid md:grid-cols-2 gap-8">
                     {/* Full Name */}
                     <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 px-1">
                           <User className="w-4 h-4 text-gold" /> Full Name
                        </label>
                        <div className="relative group/input">
                           <input 
                             required
                             type="text" 
                             className={cn(
                               "w-full h-16 bg-black/40 border rounded-2xl px-6 text-base font-bold transition-all outline-none text-white placeholder:text-gray-700",
                               isFocused === 'name' ? "border-gold/50 ring-4 ring-gold/5" : "border-white/5 hover:border-white/10"
                             )}
                             placeholder="Enter your name"
                             onFocus={() => setIsFocused('name')}
                             onBlur={() => setIsFocused(null)}
                             value={formData.name}
                             onChange={(e) => setFormData({...formData, name: e.target.value})}
                           />
                        </div>
                     </div>

                     {/* Email Address */}
                     <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 px-1">
                           <Mail className="w-4 h-4 text-gold" /> Email Address
                        </label>
                        <div className="relative group/input">
                           <input 
                             required
                             type="email" 
                             className={cn(
                               "w-full h-16 bg-black/40 border rounded-2xl px-6 text-base font-bold transition-all outline-none text-white placeholder:text-gray-700",
                               isFocused === 'email' ? "border-gold/50 ring-4 ring-gold/5" : "border-white/5 hover:border-white/10"
                             )}
                             placeholder="name@example.com"
                             onFocus={() => setIsFocused('email')}
                             onBlur={() => setIsFocused(null)}
                             value={formData.email}
                             onChange={(e) => setFormData({...formData, email: e.target.value})}
                           />
                        </div>
                     </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     {/* Phone Number */}
                     <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 px-1">
                           <Phone className="w-4 h-4 text-gold" /> Phone Number
                        </label>
                        <div className="relative group/input">
                           <input 
                             required
                             type="tel" 
                             className={cn(
                               "w-full h-16 bg-black/40 border rounded-2xl px-6 text-base font-bold transition-all outline-none text-white placeholder:text-gray-700",
                               isFocused === 'phone' ? "border-gold/50 ring-4 ring-gold/5" : "border-white/5 hover:border-white/10"
                             )}
                             placeholder="+91 00000 00000"
                             onFocus={() => setIsFocused('phone')}
                             onBlur={() => setIsFocused(null)}
                             value={formData.phone}
                             onChange={(e) => setFormData({...formData, phone: e.target.value})}
                           />
                        </div>
                     </div>

                     {/* Selected Course */}
                     <div className="space-y-3">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 px-1">
                           <BookOpen className="w-4 h-4 text-gold" /> Preferred Course
                        </label>
                        <div className="relative">
                           <select 
                             required
                             className={cn(
                               "w-full h-16 bg-black/40 border rounded-2xl px-6 text-base font-bold transition-all outline-none text-white appearance-none",
                               isFocused === 'course' ? "border-gold/50 ring-4 ring-gold/5" : "border-white/5 hover:border-white/10"
                             )}
                             onFocus={() => setIsFocused('course')}
                             onBlur={() => setIsFocused(null)}
                             value={formData.course}
                             onChange={(e) => setFormData({...formData, course: e.target.value})}
                           >
                             <option value="" disabled className="bg-[#020617]">Select a course</option>
                             {courses.map(c => (
                               <option key={c} value={c} className="bg-[#020617]">{c}</option>
                             ))}
                           </select>
                           <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                        </div>
                     </div>
                  </div>

                  {/* Experience Level */}
                  <div className="space-y-6">
                     <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 px-1">
                        <Zap className="w-4 h-4 text-gold" /> Experience Level
                     </label>
                     <div className="grid grid-cols-3 gap-4">
                        {["Beginner", "Intermediate", "Advanced"].map((level) => (
                           <button
                             key={level}
                             type="button"
                             onClick={() => setFormData({...formData, experience: level})}
                             className={cn(
                               "h-16 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all",
                               formData.experience === level 
                                 ? "bg-gold/10 border-gold text-gold shadow-[0_0_20px_rgba(244,197,66,0.1)]" 
                                 : "bg-white/2 border-white/5 text-gray-500 hover:border-white/20"
                             )}
                           >
                              {level}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* Message / Goals */}
                  <div className="space-y-3">
                     <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 px-1">
                        <MessageSquare className="w-4 h-4 text-gold" /> Your Trading Goals
                     </label>
                     <textarea 
                        rows={4}
                        className={cn(
                          "w-full bg-black/40 border rounded-[2rem] p-6 text-base font-bold transition-all outline-none text-white placeholder:text-gray-700 resize-none",
                          isFocused === 'message' ? "border-gold/50 ring-4 ring-gold/5" : "border-white/5 hover:border-white/10"
                        )}
                        placeholder="Tell us about your trading journey..."
                        onFocus={() => setIsFocused('message')}
                        onBlur={() => setIsFocused(null)}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                     />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                     <Button 
                       type="submit"
                       className="w-full h-20 bg-gold hover:bg-gold/90 text-black font-black text-lg rounded-2xl shadow-[0_20px_50px_rgba(244,197,66,0.2)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4"
                     >
                        INITIALIZE ENROLLMENT
                        <Send className="w-6 h-6" />
                     </Button>
                     <p className="text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-6">
                        By enrolling, you agree to our Terms & Privacy Policy.
                     </p>
                  </div>
               </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
