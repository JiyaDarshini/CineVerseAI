import React, { useEffect, useState } from 'react';
import { fetchActorWikiData, WikiActorData } from '../services/wikiService';
import { User, Sparkles } from 'lucide-react';

interface WikiActorImageProps {
  actorName: string;
  wikiQueryName?: string;
  size?: number;
  className?: string;
  onDataLoaded?: (data: WikiActorData) => void;
}

export const WikiActorImage: React.FC<WikiActorImageProps> = ({
  actorName,
  wikiQueryName,
  size = 80,
  className = '',
  onDataLoaded,
}) => {
  const [data, setData] = useState<WikiActorData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [imageError, setImageError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setImageError(false);

    fetchActorWikiData(actorName, wikiQueryName)
      .then((wikiData) => {
        if (isMounted) {
          setData(wikiData);
          setLoading(false);
          if (onDataLoaded) {
            onDataLoaded(wikiData);
          }
        }
      })
      .catch(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [actorName, wikiQueryName]);

  const initials = actorName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');

  return (
    <div
      className={`relative rounded-full overflow-hidden shrink-0 border border-[#C6A24D]/40 bg-[#1B1B1E] flex items-center justify-center transition-all duration-300 group-hover:border-[#E8C878] group-hover:shadow-[0_0_15px_rgba(198,162,77,0.35)] ${className}`}
      style={{ width: size, height: size }}
    >
      {loading ? (
        // Shimmering skeleton loader
        <div className="absolute inset-0 bg-[#202023] animate-pulse flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#C6A24D]/15 to-transparent animate-shimmer" />
          <Sparkles className="w-4 h-4 text-[#C6A24D]/60 animate-spin" />
        </div>
      ) : data?.thumbnailUrl && !imageError ? (
        <img
          src={data.thumbnailUrl}
          alt={actorName}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      ) : (
        // Initials Avatar Fallback
        <div className="w-full h-full bg-gradient-to-br from-[#202023] to-[#141416] flex flex-col items-center justify-center text-[#E8C878]">
          <span className="font-serif font-bold text-sm tracking-wider">{initials || 'ACT'}</span>
          <User className="w-3.5 h-3.5 text-[#8a763c] mt-0.5 opacity-60" />
        </div>
      )}
    </div>
  );
};
