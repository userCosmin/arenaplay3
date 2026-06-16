import * as React from 'react';

export interface StatCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Target number to count up to. */
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  /** @default "primary" */
  tone?: 'primary' | 'secondary' | 'accent' | 'white';
  /** Count-up duration in ms. @default 1400 */
  duration?: number;
}

/** Animated count-up stat, triggers when scrolled into view. */
export function StatCounter(props: StatCounterProps): JSX.Element;
