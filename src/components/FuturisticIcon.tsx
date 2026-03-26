import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FuturisticIconProps {
  icon: LucideIcon;
  size?: number;
  color?: 'cyan' | 'purple' | 'white';
  glow?: boolean;
  className?: string;
}

export const FuturisticIcon: React.FC<FuturisticIconProps> = ({ 
  icon: Icon, 
  size = 24, 
  color = 'cyan', 
  glow = true,
  className = ""
}) => {
  const colorMap = {
    cyan: {
      text: 'text-[#00e5ff]',
      bg: 'bg-[#00e5ff]/10',
      border: 'border-[#00e5ff]/20',
      shadow: 'shadow-[0_0_15px_rgba(0,229,255,0.3)]',
      glowColor: 'rgba(0,229,255,0.4)'
    },
    purple: {
      text: 'text-[#9d4edd]',
      bg: 'bg-[#9d4edd]/10',
      border: 'border-[#9d4edd]/20',
      shadow: 'shadow-[0_0_15px_rgba(157,78,221,0.3)]',
      glowColor: 'rgba(157,78,221,0.4)'
    },
    white: {
      text: 'text-white',
      bg: 'bg-white/5',
      border: 'border-white/10',
      shadow: 'shadow-[0_0_15px_rgba(255,255,255,0.1)]',
      glowColor: 'rgba(255,255,255,0.2)'
    }
  };

  const theme = colorMap[color];

  return (
    <div className={`relative inline-flex items-center justify-center p-3 rounded-2xl border ${theme.bg} ${theme.border} ${glow ? theme.shadow : ''} ${className}`}>
      {glow && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-50"
          animate={{
            boxShadow: [
              `0 0 10px ${theme.glowColor}`,
              `0 0 20px ${theme.glowColor}`,
              `0 0 10px ${theme.glowColor}`
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      <Icon size={size} className={`${theme.text} relative z-10`} />
      
      {/* Decorative Corner Accents */}
      <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-current opacity-40" />
      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-current opacity-40" />
    </div>
  );
};
