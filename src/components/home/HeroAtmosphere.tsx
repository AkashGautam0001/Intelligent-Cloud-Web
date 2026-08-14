import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroAtmosphereProps = {
  reduced: boolean;
  className?: string;
};

/** Soft cloud wash + white arcs that travel along circular paths. */
export function HeroAtmosphere({ reduced, className }: HeroAtmosphereProps) {
  const stroke = 3.5;
  const arcs = Array.from({ length: 18 }, (_, i) => ({
    r: 575 - i * 15,
    duration: 20 + (i % 6) * 2.5,
    reverse: i % 2 === 1,
  }));

  const cx = 500;
  const cy = 540;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f7fafc 45%, #eef4f9 100%)",
        }}
      />

      {reduced ? (
        <>
          <div className="absolute -left-[8%] top-[2%] h-[28rem] w-[28rem] rounded-full bg-azure-500/14 blur-[110px]" />
          <div className="absolute -right-[6%] top-[36%] h-[24rem] w-[24rem] rounded-full bg-orange-500/09 blur-[110px]" />
        </>
      ) : (
        <>
          <motion.div
            className="absolute -left-[10%] top-0 h-[30rem] w-[30rem] rounded-full bg-azure-500/16 blur-[120px]"
            animate={{
              x: [0, 36, 8, 0],
              y: [0, 16, -6, 0],
              opacity: [0.4, 0.65, 0.48, 0.4],
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-[8%] top-[30%] h-[26rem] w-[26rem] rounded-full bg-orange-500/10 blur-[120px]"
            animate={{
              x: [0, -28, -6, 0],
              y: [0, -16, 10, 0],
              opacity: [0.28, 0.5, 0.34, 0.28],
            }}
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="absolute left-1/2 top-[-2%] w-[min(160vw,96rem)] -translate-x-1/2">
        <svg
          className="block h-auto w-full"
          viewBox="0 -30 1000 590"
          preserveAspectRatio="xMidYMin meet"
        >
          <defs>
            <linearGradient id="ic-hero-arc-white" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="18%" stopColor="rgba(255,255,255,0.45)" />
              <stop offset="50%" stopColor="rgba(255,255,255,1)" />
              <stop offset="82%" stopColor="rgba(255,255,255,0.45)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            {/* Show only the upper half of the rings */}
            <clipPath id="ic-hero-arc-clip">
              <rect x="0" y="0" width="1000" height={cy} />
            </clipPath>
          </defs>

          <path
            d={`M ${cx - 350} ${cy} A 350 350 0 0 1 ${cx + 350} ${cy} L ${cx + 350} ${cy + 20} L ${cx - 350} ${cy + 20} Z`}
            fill="rgba(255,255,255,0.28)"
          />

          <g clipPath="url(#ic-hero-arc-clip)">
            {arcs.map((arc, i) => {
              const circumference = 2 * Math.PI * arc.r;
              const dash = circumference * 0.4;
              const gap = circumference - dash;

              return (
                <motion.circle
                  key={arc.r}
                  cx={cx}
                  cy={cy}
                  r={arc.r}
                  fill="none"
                  stroke="url(#ic-hero-arc-white)"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={`${dash} ${gap}`}
                  initial={reduced ? false : { opacity: 0, strokeDashoffset: 0 }}
                  animate={
                    reduced
                      ? { opacity: 0.85 }
                      : {
                          opacity: 0.85,
                          strokeDashoffset: arc.reverse
                            ? [0, circumference]
                            : [0, -circumference],
                        }
                  }
                  transition={{
                    opacity: {
                      duration: 0.9,
                      delay: 0.04 + i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    strokeDashoffset: reduced
                      ? { duration: 0 }
                      : {
                          duration: arc.duration,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 0.25 + i * 0.06,
                        },
                  }}
                />
              );
            })}
          </g>
        </svg>
      </div>

      <div
        className="absolute inset-0 opacity-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(4,39,95,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(4,39,95,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 28%, black 12%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 28%, black 12%, transparent 75%)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-28"
        style={{
          background: "linear-gradient(180deg, transparent, #eef4f9)",
        }}
      />
    </div>
  );
}
