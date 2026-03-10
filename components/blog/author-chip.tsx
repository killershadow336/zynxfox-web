"use client";

import { useMemo, useState } from "react";

type AuthorChipProps = {
  author: string;
  avatarUrl: string;
  size?: "sm" | "md";
};

function getFallbackAvatar(author: string) {
  return `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(author)}`;
}

export function AuthorChip({ author, avatarUrl, size = "sm" }: AuthorChipProps) {
  const avatarSize = size === "md" ? 40 : 28;
  const fallbackAvatar = useMemo(() => getFallbackAvatar(author), [author]);
  const [currentSrc, setCurrentSrc] = useState(avatarUrl || fallbackAvatar);

  return (
    <div className="inline-flex min-w-0 items-center gap-3">
      <img
        src={currentSrc}
        alt={`Avatar de ${author}`}
        width={avatarSize}
        height={avatarSize}
        className="shrink-0 rounded-full border border-border-subtle bg-surface-elevated object-cover"
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => {
          if (currentSrc !== fallbackAvatar) {
            setCurrentSrc(fallbackAvatar);
          }
        }}
      />
      <div className="min-w-0 text-left">
        <span className="block truncate text-sm text-text-primary">{author}</span>
      </div>
    </div>
  );
}
