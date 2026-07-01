"use client";

import { useState } from "react";

export function VideoPlayer({ src, title }: { src?: string; title: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return null;
  }

  return (
    <video
      className="w-full rounded-lg border border-husky-purple/10 bg-black shadow-sm"
      controls
      preload="metadata"
      aria-label={title}
      onError={() => setFailed(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
