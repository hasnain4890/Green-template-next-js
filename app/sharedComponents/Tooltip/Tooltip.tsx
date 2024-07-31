import React, { useState, useRef, useEffect } from "react";
import { createPopper, Instance, Placement } from "@popperjs/core";
import { CustomTooltipPropTypes } from "@/app/interfaces/Interfaces";

const CustomTooltip: React.FC<CustomTooltipPropTypes> = ({
  content,
  children,
  placement,
  customStyle,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const referenceElement = useRef<HTMLDivElement | null>(null);
  const popperElement = useRef<HTMLDivElement | null>(null);
  const [popper, setPopper] = useState<Instance | null>(null);

  const showOrHideTooltip = (status: boolean) => {
    setIsVisible(status);
  };

  useEffect(() => {
    if (referenceElement.current && popperElement.current) {
      setPopper(
        createPopper(referenceElement.current, popperElement.current, {
          placement: placement as Placement,
        })
      );
    }
    return () => {
      if (popper) {
        popper.destroy();
      }
    };
  }, [isVisible]);

  return (
    <div className="relative inline-block">
      <div
        ref={referenceElement}
        onMouseEnter={() => showOrHideTooltip(true)}
        onMouseLeave={() => showOrHideTooltip(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={popperElement}
          className={`tooltip tooltip-${placement} absolute z-50 -translate-x-1/2 rounded-lg`}
        >
          <div
            className={`tooltip-content w-max rounded-lg border border-gray-600 px-2 py-1 font-medium ${customStyle}`}
          >
            {content}
          </div>
        </div>
      )}
    </div>
  );
};
export default CustomTooltip;
