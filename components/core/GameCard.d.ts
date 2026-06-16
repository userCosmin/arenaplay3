import * as React from 'react';

/**
 * GameCard props.
 * @startingPoint section="Content" subtitle="Game catalog tile with cover, badges, hover zoom" viewport="320x340"
 */
export interface GameCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  /** Platform/category, e.g. "VR static", "VR dinamic", "PlayStation". */
  category: string;
  /** Cover image URL. */
  image: string;
  /** Player count line, e.g. "1-4 jucători". */
  players?: string;
  /** Age rating, e.g. "10+". */
  age?: string;
  multiplayer?: boolean;
  description?: string;
  onClick?: () => void;
}

/** Catalog tile for a game/simulator title. */
export function GameCard(props: GameCardProps): JSX.Element;
