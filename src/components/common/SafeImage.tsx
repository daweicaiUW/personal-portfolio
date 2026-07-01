"use client";

import { useEffect, useState } from "react";

export function SafeImage({
  src,
  alt,
  className,
  label
}: {
  src?: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  const [failed, setFailed] = useState(!src);

  useEffect(() => {
    if (!src) {
      setFailed(true);
      return;
    }

    setFailed(false);
    const probe = new window.Image();
    probe.onload = () => setFailed(false);
    probe.onerror = () => setFailed(true);
    probe.src = src;
  }, [src]);

  if (failed || !src) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-husky-purple/12 to-husky-gold/18 text-center text-sm font-semibold text-husky-purple ${className}`}>
        {label || alt}
      </div>
    );
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />;
}
