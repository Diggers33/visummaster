import { ImageWithFallback } from './figma/ImageWithFallback';
import visumMasterLogo from 'figma:asset/cdb43182cb144d4675600df51482a2a0beff7076.png';

export function EnhancedLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Modern cloud icon with gradient */}
      <defs>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      
      {/* Cloud shape */}
      <path
        d="M28.5 17.5C28.5 14.4624 26.0376 12 23 12C21.7348 12 20.5684 12.4692 19.6716 13.2512C18.8192 11.9064 17.3144 11 15.5 11C12.7386 11 10.5 13.2386 10.5 16C10.5 16.1688 10.5076 16.3356 10.5224 16.5C8.5336 17.0304 7 18.8216 7 21C7 23.4852 9.0148 25.5 11.5 25.5H27C29.4852 25.5 31.5 23.4852 31.5 21C31.5 18.8216 29.9664 17.0304 27.9776 16.5C28.154 16.1864 28.2836 15.8488 28.3608 15.4968C28.4572 15.8272 28.5 16.1756 28.5 16.5344V17.5Z"
        fill="url(#cloudGradient)"
      />
      
      {/* Data visualization dots - representing precision */}
      <circle cx="15" cy="30" r="1.5" fill="#0891b2" opacity="0.6" />
      <circle cx="20" cy="28" r="1.5" fill="#06b6d4" opacity="0.8" />
      <circle cx="25" cy="30" r="1.5" fill="#0891b2" opacity="0.6" />
    </svg>
  );
}

export function VisumLogo({ variant = "default" }: { variant?: "default" | "compact" }) {
  if (variant === "compact") {
    return (
      <div className="flex items-center">
        <ImageWithFallback 
          src={visumMasterLogo} 
          alt="VisumMaster"
          className="h-20 w-auto object-contain"
        />
      </div>
    );
  }
  
  return (
    <div className="flex items-center">
      <ImageWithFallback 
        src={visumMasterLogo} 
        alt="VisumMaster"
        className="h-32 w-auto object-contain"
      />
    </div>
  );
}
