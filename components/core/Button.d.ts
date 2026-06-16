import * as React from 'react';

/**
 * Button props.
 * @startingPoint section="Core" subtitle="Neon pill CTA — primary/secondary/accent/outline/ghost" viewport="700x140"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as a different element, e.g. "a" for links. @default "button" */
  as?: 'button' | 'a';
}

/** Pill CTA button with Arena Play neon glow. */
export function Button(props: ButtonProps): JSX.Element;
