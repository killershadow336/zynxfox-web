import { NextResponse } from "next/server";

function getDefaultDiscordAvatar(userId: string) {
  try {
    const index = Number((BigInt(userId) >> 22n) % 6n);
    return `https://cdn.discordapp.com/embed/avatars/${index}.png`;
  } catch {
    return "https://cdn.discordapp.com/embed/avatars/0.png";
  }
}

function getFallbackUrl(identity: string) {
  return `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(identity)}`;
}

export async function GET() {
  const ownerId = process.env.NEXT_PUBLIC_OWNER_DISCORD_ID?.trim();
  const ownerUsername = process.env.NEXT_PUBLIC_OWNER_DISCORD_USERNAME?.trim() || "killershadow336";
  const botToken = process.env.DISCORD_BOT_TOKEN?.trim() || process.env.BOT_TOKEN?.trim();
  const fallbackIdentity = ownerId || ownerUsername;

  if (!ownerId) {
    return NextResponse.redirect(getFallbackUrl(fallbackIdentity), 302);
  }

  try {
    const lanyardResponse = await fetch(`https://api.lanyard.rest/v1/users/${ownerId}`, {
      next: {
        revalidate: 300,
      },
    });

    if (lanyardResponse.ok) {
      const payload = (await lanyardResponse.json()) as {
        success?: boolean;
        data?: {
          discord_user?: {
            id?: string;
            avatar?: string | null;
          };
        };
      };

      const avatar = payload.data?.discord_user?.avatar;
      const userId = payload.data?.discord_user?.id || ownerId;

      if (avatar) {
        const extension = avatar.startsWith("a_") ? "gif" : "png";
        return NextResponse.redirect(
          `https://cdn.discordapp.com/avatars/${userId}/${avatar}.${extension}?size=128`,
          302
        );
      }
    }
  } catch {}

  if (!botToken) {
    return NextResponse.redirect(`https://unavatar.io/discord/${encodeURIComponent(ownerId)}`, 302);
  }

  try {
    const response = await fetch(`https://discord.com/api/v10/users/${ownerId}`, {
      headers: {
        Authorization: `Bot ${botToken}`,
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return NextResponse.redirect(`https://unavatar.io/discord/${encodeURIComponent(ownerId)}`, 302);
    }

    const user = (await response.json()) as {
      id: string;
      avatar: string | null;
    };

    if (!user.avatar) {
      return NextResponse.redirect(getDefaultDiscordAvatar(ownerId), 302);
    }

    const extension = user.avatar.startsWith("a_") ? "gif" : "png";
    const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}?size=128`;
    return NextResponse.redirect(avatarUrl, 302);
  } catch {
    return NextResponse.redirect(getFallbackUrl(fallbackIdentity), 302);
  }
}
