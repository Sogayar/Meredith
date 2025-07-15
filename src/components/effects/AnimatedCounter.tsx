import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, animate } from "framer-motion";

interface AnimatedCounterProps {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const count = useMotionValue(from);
  const [displayValue, setDisplayValue] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
  duration,
  ease: [0.33, 1, 0.68, 1],
  onUpdate: (latest) => {
    setDisplayValue(Math.floor(latest));
  },
});

      return () => controls.stop();
    }
  }, [inView, to, duration, count]);

  return (
    <div ref={ref} className={className}>
      <motion.span>
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </motion.span>
    </div>
  );
}