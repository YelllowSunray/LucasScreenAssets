'use client';

import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';

interface AnimatedNumberProps {
  value: number;
  format?: 'currency' | 'number' | 'percentage';
  currency?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  format = 'number',
  currency = 'EUR',
  decimals = 0,
  duration = 2,
  className = ''
}) => {
  const countUpRef = useRef<HTMLSpanElement>(null);
  const countUpInstance = useRef<CountUp | null>(null);

  useEffect(() => {
    if (countUpRef.current) {
      const options = {
        startVal: 0,
        endVal: value,
        duration: duration,
        decimal: '.',
        separator: ',',
        prefix: '',
        suffix: '',
        enableScrollSpy: false,
        scrollSpyDelay: 200,
      };

      // Format options based on type
      if (format === 'currency') {
        options.prefix = currency === 'EUR' ? '€' : '$';
        options.separator = '.';
        options.decimal = ',';
      } else if (format === 'percentage') {
        options.suffix = '%';
      }

      countUpInstance.current = new CountUp(countUpRef.current, value, options);
      countUpInstance.current.start();
    }

    return () => {
      if (countUpInstance.current) {
        countUpInstance.current.reset();
      }
    };
  }, [value, format, currency, decimals, duration]);

  return (
    <span ref={countUpRef} className={className}>
      0
    </span>
  );
};

export default AnimatedNumber; 