import { ChangeEvent, MouseEvent, ReactEventHandler, ReactNode } from "react";
import { TextVariant } from "./Type";
import { StaticImageData } from "next/image";

export interface TooltipVisibility {
  [key: string]: boolean;
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "default" | "disabled";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  style?: React.CSSProperties;
  className: string;
  disabled: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  style?: React.CSSProperties;
}

export interface InputProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  name: string;
}

export interface CrossProps {
  className?: string;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  backGround?: string;
}

export interface CustomTooltipPropTypes {
  content: string;
  children: ReactNode;
  placement: string;
  customStyle?: string;
}

export interface HamburgerProps {
  onClick: ReactEventHandler;
  className?: string;
}
export interface CloseIconProps {
  onClick: ReactEventHandler;
  className?: string;
}

export interface CARD_DATA {
  id: number;
  heading: string;
  description: string;
  Icon: React.FC;
}
export interface FooterProps {
  className?: string;
}

export interface CardsProps {
  cardData: CARD_DATA[];
  cardType: string;
}

export interface NavbarProps {
  setIsContentVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isContentVisible: boolean;
}
