import React from 'react';
import { 
  MessageSquare, Phone, Mail, MapPin, 
  Clock, Send, 
  HelpCircle, Settings, CreditCard, Users, 
  Star, ChevronRight, Globe, Share2,
  TrendingUp, ArrowRight, AppWindow, Download
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button, Badge, Card } from '@/src/components/UI';
import { cn } from '@/src/lib/utils';

// Asset imports
import heroBg from '../contact_hero_bg.png';
import mapImg from '../map_location.png';

export default function Contact() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const features = [
    { icon: Clock, title: 'Quick Response', desc: 'We reply within 24 hours' },
    { icon: Users, title: 'Expert Support', desc: 'Get help from professionals' },
    { icon: MessageSquare, title: 'Multiple Channels', desc: 'Connect your way' },
    { icon: Star, title: 'Dedicated to You', desc: 'Your success is our priority' }
  ];

  const helpTopics = [
    { 
      icon: MessageSquare, 
      title: 'General Inquiries', 
      items: ['Course Information', 'Pricing & Plans', 'Account Help'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    { 
      icon: Settings, 
      title: 'Technical Support', 
      items: ['Login Issues', 'Website Problems', 'Platform Assistance'],
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10'
    },
    { 
      icon: CreditCard, 
      title: 'Billing & Payments', 
      items: ['Payment Issues', 'Refund Requests', 'Invoice Support'],
      color: 'text-[#F4C542]',
      bgColor: 'bg-[#F4C542]/10'
    },
    { 
      icon: Share2, 
      title: 'Partnerships', 
      items: ['Business Inquiries', 'Affiliate Program', 'Collaboration'],
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    { 
      icon: Star, 
      title: 'Feedback & Suggestions', 
      items: ['Share Your Feedback', 'Feature Requests', 'Improve Our Services'],
      color: 'text-[#00E5FF]',
      bgColor: 'bg-[#00E5FF]/10'
    }
  ];

  const contactCards = [
    {
      icon: Mail,
      title: 'Email Support',
      action: 'support@teamus369.com',
      detail: 'Response within 24h',
      color: 'bg-emerald-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      action: '+91 12345 67890',
      detail: 'Mon - Sat (10AM - 7PM IST)',
      color: 'bg-orange-500'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Support',
      action: '+91 12345 67890',
      detail: 'Available 24/7',
      color: 'bg-purple-500'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      action: 'Teamus 369 Trading Academy',
      detail: '123, Market Street, Financial District, Mumbai, Maharashtra - 400001, India',
      color: 'bg-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-bg-main text-white pt-0 pb-20">
      {/* Hero Section */}
      <section className="relative h-[550px] max-md:h-auto max-md:min-h-[720px] w-full overflow-hidden mb-12 flex items-center pt-24 max-md:pt-[140px] max-md:pb-20">
        <div className="absolute inset-0">
           <img src={heroBg} className="w-full h-full object-cover max-md:object-[70%_center] max-md:opacity-60" alt="Contact Hero" />
           {/* Mobile Readability Overlay */}
           <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80 md:hidden" />
           <div className="absolute inset-0 bg-linear-to-r from-bg-main via-bg-main/60 to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-10 max-w-[1500px] relative z-10 flex flex-col space-y-12">
           <div className="space-y-6">
              <h1 className="text-5xl md:text-[52px] font-black tracking-tight leading-tight max-w-3xl">
                 We're Here to Help You<br />
                 On Your <span className="text-[#F4C542]">Trading</span> <span className="text-[#F4C542]">Journey</span>
              </h1>
              <p className="text-gray-400 text-base font-medium leading-relaxed max-w-xl">
                 Have questions or need assistance? Our team is ready to<br className="hidden md:block" />
                 help you succeed in the markets.
              </p>
           </div>
           
           {/* Feature Badges Row */}
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl max-md:grid-cols-1">
              {features.map((f, i) => (
                <div key={i} className="bg-white/3 border border-white/5 rounded-xl p-4 flex items-center gap-4 group hover:bg-white/5 transition-all">
                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#00E5FF] group-hover:bg-[#00E5FF]/10 transition-all">
                      <f.icon className="w-5 h-5" />
                   </div>
                   <div className="space-y-0.5">
                      <p className="text-[10px] font-black uppercase text-white tracking-wider">{f.title}</p>
                      <p className="text-[9px] font-medium text-gray-500 uppercase tracking-tighter">{f.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-10 max-w-[1500px] space-y-20">
         {/* Main Content: Form & Get in Touch */}
         <div className="relative">
            {/* Vertical Divider (Desktop Only) */}
            <div className="hidden lg:block absolute left-[65%] top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
            
            <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-20 lg:gap-32">
               {/* Left: Send Us a Message */}
               <div className="space-y-10 text-center">
                  <div className="space-y-3">
                     <h2 className="text-2xl font-black">Send Us a Message</h2>
                     <p className="text-gray-500 text-[13px] font-medium leading-relaxed">Fill out the form below and we'll get back to you as soon as possible.</p>
                  </div>
                  <form className="space-y-8 max-w-xl mx-auto">
                     <div className="space-y-3">
                        <label className="text-[13px] font-bold text-white block text-left">Full Name</label>
                        <input 
                           type="text" 
                           placeholder="Enter your full name" 
                           value={formData.fullName}
                           onChange={(e) => {
                               const value = e.target.value.replace(/[0-9]/g, '');
                               setFormData({ ...formData, fullName: value });
                           }}
                           className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-4 text-sm focus:outline-none focus:border-[#00E5FF]/20 transition-all placeholder:text-gray-500" 
                        />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[13px] font-bold text-white block text-left">Email Address</label>
                        <input 
                           type="email" 
                           placeholder="Enter your email address" 
                           value={formData.email}
                           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                           className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-4 text-sm focus:outline-none focus:border-[#00E5FF]/20 transition-all placeholder:text-gray-500" 
                        />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[13px] font-bold text-white block text-left">Subject</label>
                        <div className="relative">
                           <select 
                              value={formData.subject}
                              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                              className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-4 text-sm focus:outline-none focus:border-[#00E5FF]/20 transition-all appearance-none text-gray-400"
                           >
                              <option value="">Select a subject</option>
                              <option value="Course Inquiry">Course Inquiry</option>
                              <option value="Technical Support">Technical Support</option>
                              <option value="Billing Question">Billing Question</option>
                           </select>
                           <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 rotate-90" />
                        </div>
                     </div>
                     <div className="space-y-3">
                        <label className="text-[13px] font-bold text-white block text-left">Message</label>
                        <textarea 
                           rows={6} 
                           placeholder="Type your message here..." 
                           value={formData.message}
                           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                           className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-[#00E5FF]/20 transition-all resize-none placeholder:text-gray-500"
                        ></textarea>
                     </div>

                     <div className="flex justify-center">
                        <Button className="w-full md:w-fit h-14 px-12 bg-[#00E5FF] text-black font-black text-base rounded-xl shadow-xl shadow-[#00E5FF]/20 hover:scale-[1.05] transition-all flex items-center justify-center gap-3 border-none">
                           Send Message <Send className="w-5 h-5 opacity-90" />
                        </Button>
                     </div>
                  </form>
               </div>

               {/* Right: Get in Touch */}
               <div className="space-y-10">
                  <div className="space-y-3">
                     <h2 className="text-2xl font-black">Get in Touch</h2>
                     <p className="text-gray-500 text-[13px] font-medium leading-relaxed">Choose the best way to reach us. We're here for you!</p>
                  </div>
                  <div className="space-y-5">
                     {contactCards.map((card, idx) => (
                       <Card key={idx} className="bg-white/2 border-white/5 p-6 rounded-2xl group hover:bg-white/3 transition-all max-w-[420px]">
                          <div className="flex items-center gap-6">
                             <div className={cn("w-14 h-14 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg", card.color)}>
                                <card.icon className="w-7 h-7" />
                             </div>
                             <div className="flex-1 space-y-2">
                                <h4 className="text-lg font-black text-white">{card.title}</h4>
                                <div className="space-y-1">
                                   {idx === 0 && (
                                     <>
                                        <p className="text-[13px] font-black text-emerald-500">support@teamus369.com</p>
                                        <p className="text-[11px] font-bold text-gray-600 uppercase tracking-tight">Response within 24h</p>
                                     </>
                                   )}
                                   {idx === 1 && (
                                     <>
                                        <p className="text-[14px] font-black text-orange-500">+91 12345 67890</p>
                                        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-tight">Mon - Sat (10AM - 7PM IST)</p>
                                     </>
                                   )}
                                   {idx === 2 && (
                                     <>
                                        <p className="text-[14px] font-black text-purple-500">+91 12345 67890</p>
                                        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-tight">Available 24/7</p>
                                     </>
                                   )}
                                   {idx === 3 && (
                                     <div className="space-y-1">
                                        <p className="text-[12px] font-black text-white">Teamus 369 Trading Academy</p>
                                        <p className="text-[11px] font-medium text-gray-500 leading-tight">123, Market Street, Financial District, Mumbai, Maharashtra - 400001, India</p>
                                     </div>
                                   )}
                                </div>
                             </div>
                          </div>
                       </Card>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Secondary Section: Help Topics */}
         <div className="space-y-16">
            <div className="flex items-center gap-8">
               <div className="flex-1 h-px bg-white/5" />
               <h3 className="text-xl font-black text-center whitespace-nowrap">We're Here <span className="text-[#00E5FF]">to Help</span> With</h3>
               <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
               {helpTopics.map((topic, i) => (
                 <Card key={i} className="bg-white/1 border-white/5 p-6 rounded-2xl hover:bg-white/3 transition-all group">
                    <div className="flex items-start gap-4">
                       <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform", topic.bgColor, topic.color)}>
                          <topic.icon className="w-6 h-6" />
                       </div>
                       <div className="space-y-4">
                          <h4 className="text-[13px] font-black uppercase text-white leading-tight">{topic.title}</h4>
                          <ul className="space-y-2.5">
                             {topic.items.map((item, j) => (
                               <li key={j} className="text-[11px] font-medium text-gray-500 flex items-center gap-2">
                                  <div className={cn("w-1 h-1 rounded-full", topic.color.replace('text-', 'bg-'))} /> {item}
                                </li>
                             ))}
                          </ul>
                       </div>
                    </div>
                 </Card>
               ))}
            </div>
         </div>

         {/* Bottom Section: Map & Hours */}
         <div className="grid lg:grid-cols-[0.6fr_0.4fr] gap-8 pb-0">
            {/* Left: Map Card */}
            <Card className="bg-bg-secondary/20 border-white/5 p-8 rounded-3xl space-y-8">
               <h3 className="text-xl font-black">Our Location</h3>
               <div className="relative h-[320px] rounded-2xl overflow-hidden border border-white/5 group shadow-2xl">
                  <img src={mapImg} className="w-full h-full object-cover" alt="Office Location" />
                  
                  {/* Map Pin Card Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                     <div className="bg-bg-main/95 backdrop-blur-md border border-white/5 p-5 rounded-xl shadow-3xl w-[320px] flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#F4C542] flex items-center justify-center text-black shrink-0 mt-0.5">
                           <MapPin className="w-5 h-5" />
                        </div>
                        <div className="space-y-3">
                           <div>
                              <p className="text-[13px] font-black text-white">Teamus 369 Trading Academy</p>
                              <p className="text-[11px] text-gray-400 font-medium leading-relaxed mt-1">
                                 123, Market Street, Financial District,<br />
                                 Mumbai, Maharashtra - 400001, India
                              </p>
                           </div>
                           <a 
                             href="https://maps.google.com" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-[11px] font-black text-[#00E5FF] hover:underline flex items-center gap-2"
                           >
                              View on Google Maps <ArrowRight className="w-3.5 h-3.5" />
                           </a>
                        </div>
                     </div>
                  </div>

                  {/* Google Logo Bottom Left */}
                  <div className="absolute bottom-4 left-4 bg-black/20 px-2 py-1 rounded backdrop-blur-sm">
                     <p className="text-[10px] font-black text-white/40 tracking-widest uppercase">Google</p>
                  </div>
               </div>
            </Card>

            {/* Right: Office Hours Card */}
            <Card className="bg-bg-secondary/20 border-white/5 p-8 rounded-3xl flex flex-col justify-between">
               <div className="space-y-8">
                  <h3 className="text-xl font-black">Office Hours</h3>
                  <div className="space-y-4">
                     {[
                        { day: 'Monday - Friday', time: '10:00 AM - 07:00 PM' },
                        { day: 'Saturday', time: '10:00 AM - 05:00 PM' },
                        { day: 'Sunday', time: 'Closed' },
                        { day: 'Public Holidays', time: 'Closed' }
                     ].map((h, i) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                           <span className="text-[13px] font-bold text-gray-300">{h.day}</span>
                           <span className="text-[13px] font-black text-white">{h.time}</span>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="mt-8 border border-[#F4C542]/40 rounded-xl p-5 flex items-center justify-center gap-4 bg-[#F4C542]/5">
                  <Clock className="w-5 h-5 text-[#F4C542]" />
                  <p className="text-[13px] font-bold text-[#F4C542]">Live chat is available 24/7 for all members</p>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
}
