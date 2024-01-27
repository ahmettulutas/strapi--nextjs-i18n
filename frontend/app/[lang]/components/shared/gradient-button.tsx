import { cn } from "@/app/[lang]/utils/css-utils";
import React, { HTMLProps } from "react";

const GradientText: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-[#00BBB4] via-[#7391F9] to-purple-[#BA6AFD] text-transparent bg-clip-text",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default GradientText;
