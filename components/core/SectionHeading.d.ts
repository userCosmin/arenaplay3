import * as React from 'react';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase mono kicker above the title. */
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** @default "left" */
  align?: 'left' | 'center';
  /** Apply brand cyan→violet gradient to the title. @default false */
  gradient?: boolean;
}

/** Eyebrow + title + lead — the canonical section opener. */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
