import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Permanent featured glow. @default "none" */
  glow?: 'none' | 'primary' | 'secondary' | 'accent';
  /** Lift + glow on hover. @default true */
  interactive?: boolean;
  /** @default true */
  padded?: boolean;
  /** @default "div" */
  as?: 'div' | 'a' | 'article';
}

/** Standard dark-glass panel with neon hover lift. */
export function Card(props: CardProps): JSX.Element;
