import React, { ReactNode } from "react";

interface LogProps {
  value: any;
}

export const Log = ({ value }: LogProps) => {
  return (
    <pre>
      <code>{JSON.stringify(value, null, 1)}</code>
    </pre>
  );
};
