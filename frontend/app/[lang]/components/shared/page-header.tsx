import React from "react";
import { PaleText } from "./pale-text";

export function PageHeader({
  header,
  subHeader,
}: {
  header: string;
  subHeader?: string;
}) {
  return (
    <div>
      <h2>{header}</h2>
      <PaleText>
        <p>{subHeader}</p>
      </PaleText>
    </div>
  );
}
