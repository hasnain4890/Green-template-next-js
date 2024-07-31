import { ButtonProps } from '@/app/interfaces/Interfaces';
import React, { useMemo, useCallback } from 'react';

const defaultStyles: React.CSSProperties = {
  width: 'auto',
  height: 'auto',
  borderRadius: '5px',
};

const classNames = (classes: string[]) => classes.join(' ');

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'medium',
  type = 'button',
  disabled = false,
  children,
  style = {},
  className = '',
  onClick,
}) => {
  type Size = 'small' | 'large' | 'default';

  type SizeClass = {
    [key in Size]: string;
  };

  const getSizeClass = useCallback((): string => {
    const sizeClasses: SizeClass = {
      small: 'p-1 text-sm md:text-base',
      large: 'p-6 text-lg md:text-xl',
      default: 'p-2 text-base md:text-lg',
    };
    return sizeClasses[size as Size] || sizeClasses.default;
  }, [size]);

  const getVariantClass = useCallback(() => {
    const variantClasses = {
      primary: 'text-white whitespace-nowrap cursor-pointer px-10 py-2',
      secondary: 'text-black whitespace-nowrap cursor-pointer px-10 py-2',
      default: 'text-black whitespace-nowrap cursor-pointer px-10 py-2',
      disabled: 'text-gray-400 bg-disable-button cursor-not-allowed whitespace-nowrap px-10 py-2',
    };
    if (disabled) {
      return variantClasses[variant] || variantClasses.default;
    }

    return variantClasses[variant] || variantClasses.default;
  }, [variant, disabled]);

  const buttonClasses = useMemo(
    () => classNames(['mx-3', getVariantClass(), getSizeClass(), className, disabled ? 'cursor-not-allowed' : '']),
    [getVariantClass, getSizeClass, className, disabled]
  );

  const mergedStyles: React.CSSProperties = useMemo(
    () => ({
      ...defaultStyles,
      ...style,
    }),
    [style]
  );

  return (
    <button style={mergedStyles} disabled={disabled} type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
