import { Button, ButtonProps } from "@/app/[lang]/components/ui/button";
import React from "react";

const GhostBtn = (props: ButtonProps) => {
  return (
    <Button
      variant="ghost"
      className="rounded-[3rem] py-2 px-6 border-2 border-btnBorder text-white hover:text-white hover:bg-btnGradient hover:scale-110 transition-all duration-200 bg-btnGradient"
      {...props}
    ></Button>
  );
};

export default GhostBtn;
