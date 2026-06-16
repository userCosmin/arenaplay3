import * as React from 'react';

export interface PriceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price: string | number;
  /** Currency unit. @default "lei" */
  unit?: string;
  /** e.g. "persoană", "sesiune" */
  per?: string;
  /** Small print under the price, e.g. session breakdown. */
  period?: string;
  features?: string[];
  /** @default "Rezervă" */
  cta?: string;
  onCta?: () => void;
  /** Highlighted plan — violet glow + ribbon. @default false */
  featured?: boolean;
  badge?: string;
  icon?: React.ReactNode;
}

/** Pricing tile for sessions and party/event packages. */
export function PriceCard(props: PriceCardProps): JSX.Element;
