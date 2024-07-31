import { TextProps } from "@/app/interfaces/Interfaces";
import React from "react";

const variantMapping = {
  h1: "font-bold tracking-normal text-2xl sm:text-5xl md:text-6xl",
  h2: "font-bold text-2xl sm:text-4xl md:text-5xl",
  h3: "text-2xl sm:text-3xl md:text-4xl",
  h4: "text-xl sm:text-2xl md:text-3xl",
  h5: "text-lg sm:text-xl md:text-2xl",
  h6: "text-base sm:text-lg md:text-xl",
  p: "font-light text-center leading-4 tracking-normal text-base sm:text-lg md:text-xl",
  subheading1: "text-lg",
  subheading2: "text-base",
  subheading3: "text-center text-base",
  body1: "text-sm",
  body2: "text-lg",
  body3: "text-xs",
  span: "text-base",
  defualt: "",
};

const Text: React.FC<TextProps> = ({
  variant = "p",
  className,
  children,
  ...props
}): React.ReactElement => {
  const Tag = variant as keyof JSX.IntrinsicElements;
  const classes = `${className} ${variantMapping[variant]}`;
  return React.createElement(Tag, { className: classes, ...props }, children);
};

export default Text;
