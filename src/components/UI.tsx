import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'neon-border' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ variant = 'primary', size = 'md', className, children, to, ...props }: ButtonProps) => {
  const variants = {
    primary: 'bg-primary text-bg-main font-bold neon-glow hover:scale-105 active:scale-95',
    secondary: 'bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/20',
    ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5',
    'neon-border': 'bg-transparent text-primary border border-primary/30 hover:border-primary/60 hover:bg-primary/5',
    outline: 'bg-transparent text-white border border-white/20 hover:bg-white/5'
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  const content = (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-center",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} className="block no-underline">
        {content}
      </Link>
    );
  }

  return (
    <button
      className="bg-transparent border-none p-0 focus:outline-none"
      {...props}
    >
      {content}
    </button>
  );
};

export const Card = ({ children, className, glow = false, ...props }: { children: React.ReactNode, className?: string, glow?: boolean } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 relative group overflow-hidden",
        glow && "hover:shadow-[0_0_30px_rgba(182,255,59,0.1)] transition-shadow duration-500",
        className
      )}
      {...props}
    >
      {children}
    </div >
  );
};

export const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <span className={cn(
      "px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full",
      className
    )}>
      {children}
    </span>
  );
};
