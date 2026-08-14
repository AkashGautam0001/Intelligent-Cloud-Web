import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroAtmosphereProps = {
  reduced: boolean;
  className?: string;
};

/**
 * Living Infrastructure atmosphere:
 * calm cloud wash, slow radial light, occasional grid illumination,
 * subtle path particles, and a rare orchestration pulse.
 */
export function HeroAtmosphere({ reduced, className }: HeroAtmosphereProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f7fafc 42%, #eef3f8 100%)",
        }}
      />

      {/* Soft cloud pools */}
      {reduced ? (
        <>
          <div className="absolute -left-[8%] top-[4%] h-[28rem] w-[28rem] rounded-full bg-[#438bd8]/14 blur-[110px]" />
          <div className="absolute -right-[6%] top-[36%] h-[24rem] w-[24rem] rounded-full bg-[#f26a13]/10 blur-[110px]" />
        </>
      ) : (
        <>
          <motion.div
            className="absolute -left-[10%] top-[2%] h-[30rem] w-[30rem] rounded-full bg-[#438bd8]/16 blur-[120px]"
            animate={{ x: [0, 40, 10, 0], y: [0, 18, -8, 0], opacity: [0.45, 0.7, 0.5, 0.45] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-[8%] top-[34%] h-[26rem] w-[26rem] rounded-full bg-[#f26a13]/12 blur-[120px]"
            animate={{ x: [0, -30, -8, 0], y: [0, -20, 10, 0], opacity: [0.35, 0.58, 0.4, 0.35] }}
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Architectural grid — illuminates occasionally */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(4,39,95,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(4,39,95,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 72% 58% at 50% 36%, black 15%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 72% 58% at 50% 36%, black 15%, transparent 78%)",
        }}
        animate={
          reduced
            ? undefined
            : { opacity: [0.28, 0.28, 0.55, 0.28, 0.28] }
        }
        transition={
          reduced
            ? undefined
            : { duration: 7, repeat: Infinity, ease: "easeInOut", times: [0, 0.55, 0.62, 0.72, 1] }
        }
      />

      {/* Extremely slow radial light */}
      {!reduced ? (
        <motion.div
          className="absolute h-[42rem] w-[42rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(67,139,216,0.16) 0%, rgba(242,106,19,0.06) 34%, transparent 68%)",
          }}
          animate={{
            left: ["8%", "58%", "28%", "8%"],
            top: ["6%", "18%", "40%", "6%"],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}

      {/* Invisible infrastructure paths with tiny particles */}
      {!reduced ? (
        <svg
          className="absolute inset-0 h-full w-full opacity-70"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="ic-path" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(67,139,216,0)" />
              <stop offset="50%" stopColor="rgba(67,139,216,0.22)" />
              <stop offset="100%" stopColor="rgba(242,106,19,0)" />
            </linearGradient>
          </defs>
          <path
            d="M220 140 C360 180, 420 260, 600 250 C780 240, 860 170, 980 150"
            fill="none"
            stroke="url(#ic-path)"
            strokeWidth="1"
          />
          <path
            d="M260 420 C400 360, 480 320, 600 330 C760 345, 840 410, 960 390"
            fill="none"
            stroke="url(#ic-path)"
            strokeWidth="1"
          />
          <path
            d="M600 120 C600 220, 600 300, 600 460"
            fill="none"
            stroke="rgba(4,39,95,0.08)"
            strokeWidth="1"
            strokeDasharray="3 8"
          />
        </svg>
      ) : null}

      {/* Path particles (CSS/Framer positions — no WebGL) */}
      {!reduced ? (
        <>
          <motion.span
            className="absolute h-1.5 w-1.5 rounded-full bg-azure-500/80 shadow-[0_0_10px_rgba(67,139,216,0.55)]"
            animate={{
              left: ["18%", "35%", "50%", "68%", "82%"],
              top: ["22%", "28%", "36%", "28%", "24%"],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="absolute h-1.5 w-1.5 rounded-full bg-orange-500/80 shadow-[0_0_10px_rgba(242,106,19,0.55)]"
            animate={{
              left: ["20%", "38%", "50%", "70%", "80%"],
              top: ["62%", "52%", "48%", "55%", "58%"],
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          />
          <motion.span
            className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-navy-900/50"
            animate={{
              top: ["18%", "32%", "45%", "58%", "70%"],
              opacity: [0, 0.9, 0.9, 0.9, 0],
            }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
        </>
      ) : null}

      {/* Orchestration pulse — rare cascade through hierarchy */}
      {!reduced ? (
        <motion.div
          className="absolute left-1/2 top-[12%] h-[72%] w-[min(28rem,70vw)] -translate-x-1/2 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(67,139,216,0.18), rgba(242,106,19,0.1), transparent)",
            filter: "blur(28px)",
          }}
          animate={{
            opacity: [0, 0, 0.55, 0.2, 0],
            y: ["0%", "0%", "18%", "55%", "85%"],
            scaleY: [0.4, 0.4, 1, 1.1, 0.8],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            repeatDelay: 5.5,
            ease: "easeInOut",
            times: [0, 0.12, 0.35, 0.7, 1],
          }}
        />
      ) : null}

      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background: "linear-gradient(180deg, transparent, #eef3f8)",
        }}
      />
    </div>
  );
}
