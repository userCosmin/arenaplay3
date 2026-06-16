import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
  hint?: string;
  /** "textarea" renders a multiline field. @default "text" */
  type?: 'text' | 'email' | 'tel' | 'number' | 'date' | 'time' | 'textarea';
}

/** Dark form field with cyan focus ring — used across the booking form. */
export function Input(props: InputProps): JSX.Element;
