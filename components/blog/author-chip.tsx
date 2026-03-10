type AuthorChipProps = {
  author: string;
  avatarUrl: string;
  size?: "sm" | "md";
};

export function AuthorChip({ author, avatarUrl, size = "sm" }: AuthorChipProps) {
  const avatarSize = size === "md" ? 40 : 28;

  return (
    <div className="inline-flex min-w-0 items-center gap-3">
      <img
        src={avatarUrl}
        alt={`Avatar de ${author}`}
        width={avatarSize}
        height={avatarSize}
        className="shrink-0 rounded-full border border-border-subtle bg-surface-elevated object-cover"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <div className="min-w-0 text-left">
        <span className="block truncate text-sm text-text-primary">{author}</span>
      </div>
    </div>
  );
}
