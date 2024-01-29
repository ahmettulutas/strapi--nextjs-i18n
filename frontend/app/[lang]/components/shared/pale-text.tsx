import React from "react";

export const PaleText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-clip-text bg-paleText text-transparent">{children}</div>
  );
};
