// src/components/AnimatedCounter.tsx

import { useEffect, useState } from "react";

type AnimatedCounterProps = {
  target: number;
  start: boolean;
};

const AnimatedCounter = ({ target, start }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const step = target / (duration / 30);

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.ceil(current));
    }, 30);

    return () => clearInterval(timer);
  }, [start, target]);

  return <span className="text-4xl font-bold text-amber-900">{count}+</span>;
};

export default AnimatedCounter;
