import { Button, ButtonProps } from "@/app/components/ui/button";
import React from "react";

export const BrandButton = (props: ButtonProps) => {
  return (
    <Button
      style={{
        background:
          "radial-gradient(92.5% 92.5% at 50% 100%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.20) 0.01%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.06) 100%), #4D3BB3",
      }}
      className="my-4 p-2 text-white font-light rounded-3xl border-2 border-solid border-[#38269E] bg-[#4D3BB3] from-transparent via-opacity-10 from-opacity-4 to-opacity-4 bg-radial-gradient shadow-inner"
      {...props}
    ></Button>
  );
};
