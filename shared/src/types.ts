import { ReactNode } from 'react';

export type Language = 'en' | 'ru';
export type Theme = 'light' | 'dark';
export type User = any;

export type RenderLinkComponent = (props: {
  key?: string;
  className?: string;
  to: string;
  title?: string;
  children: ReactNode;
  onClick?: () => void;
}) => ReactNode;

export type RenderNavLinkComponent = (props: {
  key?: string;
  className: string;
  activeClassName: string;
  to: string;
  children: ReactNode;
  onClick?: () => void;
}) => ReactNode;
