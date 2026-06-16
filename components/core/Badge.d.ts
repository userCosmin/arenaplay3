import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default "primary" */
  tone?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'warning';
  /** Filled instead of tinted. @default false */
  solid?: boolean;
  /** @default "md" */
  size?: 'sm' | 'md';
}

/** Uppercase mono status/category chip. */
export function Badge(props: BadgeProps): JSX.Element;
