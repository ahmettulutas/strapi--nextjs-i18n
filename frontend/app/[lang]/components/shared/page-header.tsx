import React from "react";

export function PageHeader({
  header,
  subHeader,
}: {
  header: string;
  subHeader?: string;
}) {
  return (
    <div className="my-10 width-full text-center">
      <h2 className="text-2xl font-semibold text-primary">{header}</h2>
      <p className="text-md">{subHeader}</p>
    </div>
  );
}
