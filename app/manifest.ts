import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#07080D",
    theme_color: "#07080D",
    icons: [
      {
        src: "/zynxfox.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
