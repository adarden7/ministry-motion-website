'use client';

import { cn } from '@/lib/utils';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface NumberTickerProps {
  value: number;
  direction?: 'up' | 'down';
  delay?: number;
  className?: string;
  decimalPlaces?: number;
}

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useSpring(direction === 'down' ? value : 0, {
    damping: 60,
    stiffness: 100,
  });
  const rounded = useTransform(motionValue, (latest) =>
    Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(Number(latest.toFixed(decimalPlaces)))
  );

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === 'down' ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  return (
    <motion.span
      ref={ref}
      className={cn(
        'inline-block tabular-nums text-black dark:text-white',
        className
      )}
    >
      {rounded}
    </motion.span>
  );
}
