import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import heroVideoUrl from "@/assets/Cloud_Technology_1280x720.mp4?url";

type HeroAtmosphereProps = {
  reduced: boolean;
  className?: string;
};

/** Full-bleed cloud technology video with a dark overlay for contrast. */
export function HeroAtmosphere({ reduced, className }: HeroAtmosphereProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (reduced) {
      el.pause();
      return;
    }
    void el.play().catch(() => {
      /* Autoplay may be blocked; muted + playsInline usually succeeds. */
    });
  }, [reduced]);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className,
      )}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full scale-105 object-cover brightness-[0.55] contrast-[1.05]"
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload="auto"
        src={heroVideoUrl}
      />

      {/* Dark vignette + navy wash */}
      <div
        className="absolute inset-0"
        style={{
          background: reduced
            ? "linear-gradient(180deg, #0b1a33 0%, #142848 55%, #0f1f3a 100%)"
            : "linear-gradient(180deg, rgba(4,39,95,0.55) 0%, rgba(4,20,45,0.62) 45%, rgba(4,15,35,0.78) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 60% at 50% 40%, transparent 0%, rgba(0,0,0,0.35) 100%)",
        }}
      />
    </div>
  );
}
