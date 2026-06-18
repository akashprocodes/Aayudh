import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  accentColor?: 'navy' | 'purple';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className,
  accentColor = 'navy'
}) => {
  return (
    <div className={cn("mb-6 relative pb-3.5 select-none", className)}>
      <div className="flex flex-col gap-1">
        <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-serif">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs text-slate-500 font-sans tracking-wide">
            {subtitle}
          </p>
        )}
      </div>
      {/* Integrated bottom border design */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-100" />
      <div
        className={cn(
          "absolute bottom-0 left-0 h-[3px] w-16 rounded-full -mb-[1px]",
          accentColor === 'purple' ? "bg-brand-purple" : "bg-brand-navy"
        )}
      />
    </div>
  );
};

export default SectionHeading;

