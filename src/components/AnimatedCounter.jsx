import { useEffect, useState } from "react";

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let duration = 1500;
    let incrementTime = 20;
    let step = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <h3 className="text-4xl font-bold text-cyan-400">
      {count}{suffix}
    </h3>
  );
}

export default AnimatedCounter;