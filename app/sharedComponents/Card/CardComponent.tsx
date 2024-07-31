import { CardProps } from '@/app/interfaces/Interfaces';
import React, { ReactNode, ReactElement, cloneElement } from 'react';

const isReactElement = (element: ReactNode): element is ReactElement => {
  return React.isValidElement(element);
};

const Card: React.FC<CardProps> = ({ children, className, backGround }) => {
  const cardStyles = `${
    backGround ? backGround : ''
  } rounded-lg mb-4 text-white px-4 border border-[#00C4F4] w-content`;

  const applyDefaultStyles = (element: ReactNode, index: number): ReactNode => {
    if (isReactElement(element)) {
      const clonedElement: ReactElement = cloneElement(element, {
        className: `${element.props.className || ''}`,
        key: index,
      });
      return clonedElement;
    }
    return element;
  };

  return <div className={`${cardStyles} ${className || ''}`}>{React.Children.map(children, applyDefaultStyles)}</div>;
};

export default Card;
