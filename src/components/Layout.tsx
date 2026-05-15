import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, Menu, X, ArrowRight, Bell, User, Instagram, Linkedin, Youtube, Send, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import Preloader from './Preloader';
import logo from '../trading_logoproject.png';

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string; info?: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Live', href: '/live-classes' },
  { label: 'Strategies', href: '/strategies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-bg-main relative">
      <Preloader />
      
      {/* Navbar */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-2",
        isScrolled ? "bg-[#020617]/90 backdrop-blur-md border-b border-white/5 shadow-lg" : "bg-transparent"
      )}>
        <div className="max-w-[1700px] mx-auto flex items-center justify-between px-2 lg:px-10 h-18">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="TEAMUS 369 Logo" className="h-14 w-auto object-contain transition-all" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-10">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                to={item.href}
                className={cn(
                  "text-[15px] font-medium transition-all hover:text-gold relative py-1",
                  (pathname === item.href || (item.href === '/courses' && pathname.startsWith('/course/'))) ? "text-white" : "text-gray-300"
                )}
              >
                {item.label}
                {(pathname === item.href || (item.href === '/courses' && pathname.startsWith('/course/'))) && (
                  <motion.span 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-gold rounded-full" 
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="hidden sm:block text-[15px] font-medium px-7 py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all text-white">
              Login
            </Link>
            <Link 
              to="/signup" 
              className="px-8 py-3 bg-gold text-black rounded-full text-[15px] font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(244,197,66,0.3)]"
            >
              Join Now
            </Link>
            <button 
              className="xl:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg-main pt-24 px-6 xl:hidden"
          >
            <div className="grid gap-4">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-white/5 pb-4">
                  <Link 
                    to={item.href} 
                    className={cn(
                      "text-2xl font-black uppercase tracking-tighter transition-colors",
                      (pathname === item.href || (item.href === '/courses' && pathname.startsWith('/course/'))) ? "text-gold" : "text-white/60"
                    )}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#020617] pt-8 pb-3 px-6 mt-4 relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-8 mb-6 px-4">
          {/* Logo & Description */}
          <div className="lg:col-span-3 pr-0 lg:pr-8">
            <Link to="/" className="inline-block mb-4 transition-opacity hover:opacity-80">
              <img src={logo} alt="TEAMUS 369 Logo" className="h-24 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-[13px] leading-relaxed mb-6 font-medium max-w-sm">
              Empowering your trading journey with institutional-grade knowledge, proven strategies, and real-time market insights.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'Facebook', icon: Facebook },
                { name: 'Instagram', icon: Instagram },
                { name: 'Youtube', icon: Youtube },
                { name: 'Linkedin', icon: Linkedin },
                { name: 'Telegram', icon: Send }
              ].map(social => (
                <a 
                  key={social.name} 
                  href="#" 
                  className="w-11 h-11 rounded-xl bg-white/3 flex items-center justify-center text-gray-400 hover:bg-primary/10 hover:text-primary transition-all border border-white/5 hover:border-primary/20"
                  title={social.name}
                >
                  <social.icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>
 
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-[13px] uppercase tracking-widest mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Courses', 'Live Sessions', 'Strategies', 'Blog'].map(link => (
                <li key={link}>
                  <Link to="#" className="text-gray-500 hover:text-primary transition-colors text-[14px] font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-[13px] uppercase tracking-widest mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              {['Trading Tools', 'Economic Calendar', 'Risk Management', 'Glossary', 'FAQs'].map(link => (
                <li key={link}>
                  <Link to="#" className="text-gray-500 hover:text-primary transition-colors text-[14px] font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-[13px] uppercase tracking-widest mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map(link => (
                <li key={link}>
                  <Link to="#" className="text-gray-500 hover:text-primary transition-colors text-[14px] font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-black text-[13px] uppercase tracking-widest mb-4 text-white">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-gray-500 group">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                   <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="space-y-0.5">
                   <p className="text-[11px] font-bold uppercase tracking-tighter text-gray-600">Phone</p>
                   <a href="tel:+911234567890" className="text-[14px] font-bold text-gray-400 group-hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30">+91 12345 67890</a>
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-500 group">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                   <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="space-y-0.5">
                   <p className="text-[11px] font-bold uppercase tracking-tighter text-gray-600">Email</p>
                   <a href="mailto:support@teamus369.com" className="text-[14px] font-bold text-gray-400 group-hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30">support@teamus369.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
 
        <div className="max-w-[1700px] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[13px] font-medium italic">© 2026 TeamUS 369. Precision in Trading.</p>
          <div className="flex gap-8 text-gray-500 text-[12px] font-bold uppercase tracking-widest">
             <Link to="#" className="hover:text-primary transition-colors">Privacy</Link>
             <Link to="#" className="hover:text-primary transition-colors">Terms</Link>
             <Link to="#" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
