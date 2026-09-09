import React from 'react';

interface FilmCameraSilhouetteProps {
  className?: string;
  size?: number;
}

export const FilmCameraSilhouette: React.FC<FilmCameraSilhouetteProps> = ({ className = '', size = 320 }) => {
  return (
    <div className={`relative animate-camera-bob flex items-center justify-center ${className}`}>
      {/* Soft radial gold rim glow */}
      <div className="absolute inset-0 bg-[#C6A24D]/15 blur-3xl rounded-full pointer-events-none" />
      
      <svg
        width={size}
        height={size}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[0_0_20px_rgba(198,162,77,0.35)]"
      >
        <defs>
          {/* Gold Rim Gradient */}
          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2CC" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#E8C878" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#C6A24D" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#141416" stopOpacity="0.1" />
          </linearGradient>

          {/* Body Gradient */}
          <linearGradient id="cameraBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#202023" />
            <stop offset="100%" stopColor="#0A0A0B" />
          </linearGradient>

          {/* Reel Glow */}
          <linearGradient id="reelGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C6A24D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8a763c" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Dual Film Magazine Reels */}
        <circle cx="95" cy="55" r="28" fill="url(#cameraBody)" stroke="url(#goldRim)" strokeWidth="2" />
        <circle cx="95" cy="55" r="12" fill="#0A0A0B" stroke="#C6A24D" strokeWidth="1.5" />
        <circle cx="95" cy="55" r="4" fill="#E8C878" />

        {/* Reel spoke cutouts */}
        <line x1="95" y1="33" x2="95" y2="43" stroke="#8a763c" strokeWidth="2" />
        <line x1="95" y1="67" x2="95" y2="77" stroke="#8a763c" strokeWidth="2" />
        <line x1="73" y1="55" x2="83" y2="55" stroke="#8a763c" strokeWidth="2" />
        <line x1="107" y1="55" x2="117" y2="55" stroke="#8a763c" strokeWidth="2" />

        <circle cx="145" cy="58" r="25" fill="url(#cameraBody)" stroke="url(#goldRim)" strokeWidth="2" />
        <circle cx="145" cy="58" r="10" fill="#0A0A0B" stroke="#C6A24D" strokeWidth="1.5" />
        <circle cx="145" cy="58" r="3.5" fill="#E8C878" />

        {/* Reel spoke cutouts 2 */}
        <line x1="145" y1="38" x2="145" y2="48" stroke="#8a763c" strokeWidth="2" />
        <line x1="145" y1="68" x2="145" y2="78" stroke="#8a763c" strokeWidth="2" />
        <line x1="125" y1="58" x2="135" y2="58" stroke="#8a763c" strokeWidth="2" />
        <line x1="155" y1="58" x2="165" y2="58" stroke="#8a763c" strokeWidth="2" />

        {/* Camera Main Housing */}
        <rect x="75" y="80" width="90" height="52" rx="3" fill="url(#cameraBody)" stroke="url(#goldRim)" strokeWidth="2" />

        {/* Matte Box & Large Anamorphic Lens */}
        <polygon points="40,88 75,94 75,118 40,124" fill="url(#cameraBody)" stroke="url(#goldRim)" strokeWidth="1.5" />
        <rect x="28" y="85" width="12" height="42" rx="2" fill="#141416" stroke="#E8C878" strokeWidth="1.5" />
        
        {/* Lens Glass Glow */}
        <ellipse cx="34" cy="106" rx="2" ry="14" fill="#E8C878" opacity="0.6" />

        {/* Viewfinder on Top */}
        <path d="M 125 78 L 155 78 L 165 72 L 175 72 L 175 80 L 165 80 Z" fill="#202023" stroke="url(#goldRim)" strokeWidth="1.5" />
        <circle cx="178" cy="76" r="4" fill="#C6A24D" opacity="0.8" />

        {/* Side Control Knobs & Audio Meter */}
        <circle cx="142" cy="98" r="6" fill="#0A0A0B" stroke="#E8C878" strokeWidth="1.5" />
        <rect x="100" y="93" width="28" height="12" rx="1.5" fill="#0A0A0B" stroke="#302f33" strokeWidth="1" />
        <line x1="104" y1="99" x2="124" y2="99" stroke="#C6A24D" strokeWidth="2" strokeDasharray="3 2" />

        {/* Base Mount Plate */}
        <rect x="105" y="132" width="30" height="8" rx="1.5" fill="#202023" stroke="url(#goldRim)" strokeWidth="1.5" />
        
        {/* Fluid Head Pan Handle */}
        <path d="M 135 136 L 175 142 L 180 152" stroke="#E8C878" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Heavy Duty Tripod Legs */}
        {/* Center Leg */}
        <line x1="120" y1="140" x2="120" y2="225" stroke="url(#goldRim)" strokeWidth="3.5" strokeLinecap="round" />
        {/* Left Leg */}
        <line x1="112" y1="140" x2="55" y2="225" stroke="url(#goldRim)" strokeWidth="3" strokeLinecap="round" />
        {/* Right Leg */}
        <line x1="128" y1="140" x2="185" y2="225" stroke="url(#goldRim)" strokeWidth="3" strokeLinecap="round" />

        {/* Spreader Triangle Brace */}
        <line x1="75" y1="190" x2="120" y2="190" stroke="#8a763c" strokeWidth="1.5" />
        <line x1="120" y1="190" x2="165" y2="190" stroke="#8a763c" strokeWidth="1.5" />

        {/* Locking Knobs on Legs */}
        <circle cx="75" cy="190" r="3" fill="#E8C878" />
        <circle cx="120" cy="190" r="3" fill="#E8C878" />
        <circle cx="165" cy="190" r="3" fill="#E8C878" />
      </svg>
    </div>
  );
};
