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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-[#020617]/90 backdrop-blur-md border-b border-white/5 shadow-lg" : "bg-transparent"
      )}>
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-2 lg:px-10">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="TEAMUS 369 Logo" className="h-[4.5rem] w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                to={item.href}
                className={cn(
                  "text-[14px] font-medium transition-all hover:text-gold relative py-1",
                  pathname === item.href ? "text-white" : "text-gray-300"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden sm:block text-[14px] font-medium px-6 py-2.5 border border-white/20 rounded-md hover:bg-white/5 transition-all text-white">
              Login
            </Link>
            <Link 
              to="/signup" 
              className="px-6 py-2.5 bg-gold text-black rounded-md text-[14px] font-medium hover:scale-105 transition-all shadow-[0_0_15px_rgba(244,197,66,0.3)]"
            >
              Join Now
            </Link>
            <button 
              className="xl:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
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
                  <Link to={item.href} className="text-2xl font-display font-medium flex items-center justify-between">
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
      <footer className="bg-[#020617] border-t border-white/5 pt-16 pb-10 px-6 mt-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 px-4 lg:px-10">
          {/* Logo & Description */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logo} alt="TEAMUS 369 Logo" className="h-20 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Empowering traders with knowledge, strategies, and real market experience to achieve financial freedom.
            </p>
            <div className="flex gap-3">
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
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary/20 hover:text-primary transition-all border border-white/5"
                  title={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[15px] mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Courses', 'Live Sessions', 'Strategies', 'Blog'].map(link => (
                <li key={link}>
                  <Link to="#" className="text-gray-500 hover:text-primary transition-colors text-sm">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-[15px] mb-8 text-white">Resources</h4>
            <ul className="space-y-4">
              {['Trading Tools', 'Economic Calendar', 'Risk Management', 'Glossary', 'FAQs'].map(link => (
                <li key={link}>
                  <Link to="#" className="text-gray-500 hover:text-primary transition-colors text-sm">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-[15px] mb-8 text-white">Support</h4>
            <ul className="space-y-4">
              {['Help Center', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map(link => (
                <li key={link}>
                  <Link to="#" className="text-gray-500 hover:text-primary transition-colors text-sm">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-[15px] mb-8 text-white">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-gray-500 group">
                <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">+91 12345 67890</span>
              </li>
              <li className="flex items-start gap-4 text-gray-500 group">
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">support@teamus369.com</span>
              </li>
              <li className="flex items-start gap-4 text-gray-500 group">
                <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">Mumbai, India</span>
              </li>
              <li className="flex items-start gap-4 text-gray-500 group">
                <Clock className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">Mon - Sat: 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[13px]">© 2024 TeamUS 369. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
