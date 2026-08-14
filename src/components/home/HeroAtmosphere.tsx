import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroAtmosphereProps = {
  reduced: boolean;
  className?: string;
};

/**
 * Clean orbital hero motion: soft washes + slowly rotating rings.
 * Distinct from mesh-grid / light-sweep treatments.
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
            "linear-gradient(165deg, #ffffff 0%, #f5f8fc 45%, #eaf0f7 100%)",
        }}
      />

      {/* Soft color pools */}
      {reduced ? (
        <>
          <div className="absolute left-[8%] top-[8%] h-72 w-72 rounded-full bg-[#438bd8]/12 blur-[90px]" />
          <div className="absolute right-[6%] top-[28%] h-64 w-64 rounded-full bg-[#f26a13]/10 blur-[90px]" />
        </>
      ) : (
        <>
          <motion.div
            className="absolute left-[6%] top-[6%] h-80 w-80 rounded-full bg-[#438bd8]/14 blur-[100px]"
            animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[4%] top-[30%] h-72 w-72 rounded-full bg-[#f26a13]/11 blur-[100px]"
            animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      {/* Orbital rings centered behind headline */}
      <div className="absolute left-1/2 top-[42%] h-[min(78vw,42rem)] w-[min(78vw,42rem)] -translate-x-1/2 -translate-y-1/2">
        {[1, 0.72, 0.48].map((scale, i) => (
          <motion.div
            key={scale}
            className="absolute inset-0 rounded-full border"
            style={{
              scale,
              borderColor:
                i === 1
                  ? "rgba(242, 106, 19, 0.14)"
                  : "rgba(4, 39, 95, 0.08)",
              borderStyle: i === 0 ? "dashed" : "solid",
            }}
            animate={
              reduced
                ? undefined
                : { rotate: i % 2 === 0 ? 360 : -360 }
            }
            transition={
              reduced
                ? undefined
                : {
                    duration: 48 + i * 18,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
          />
        ))}

        {/* Accent nodes on the middle ring */}
        {!reduced
          ? [0, 120, 240].map((deg) => (
              <div
                key={deg}
                className="absolute left-1/2 top-1/2"
                style={{ transform: `rotate(${deg}deg)` }}
              >
                <div
                  className="absolute left-1/2"
                  style={{
                    transform: "translate(-50%, calc(min(78vw, 42rem) * -0.36))",
                  }}
                >
                  <motion.span
                    className="block h-2 w-2 rounded-full bg-orange-500/70 shadow-[0_0_12px_rgba(242,106,19,0.45)]"
                    animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.15, 0.85] }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: deg / 240,
                    }}
                  />
                </div>
              </div>
            ))
          : null}

        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-azure-500/50" />
      </div>

      {/* Gentle rising signal lines */}
      {!reduced ? (
        <div className="absolute inset-x-0 bottom-0 top-[55%] overflow-hidden opacity-40">
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-px bg-gradient-to-t from-transparent via-[#438bd8]/35 to-transparent"
              style={{
                left: `${12 + i * 12}%`,
                height: "55%",
              }}
              animate={{ y: [40, -30, 40], opacity: [0.15, 0.55, 0.15] }}
              transition={{
                duration: 7 + i * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.35,
              }}
            />
          ))}
        </div>
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
