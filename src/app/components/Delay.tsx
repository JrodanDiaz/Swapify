"use client";

import { useState } from "react";

interface DelayProps {
  delay: number;
  placeholder: React.ReactNode;
  children: React.ReactNode;
}
export default function Delay({ delay, placeholder, children }: DelayProps) {
  const [isDelayed, setDelayed] = useState<boolean>(true);
  setTimeout(() => {
    setDelayed(false);
  }, delay);

  if (isDelayed) {
    return <>{placeholder};</>;
  }

  return <>{children}</>;
}
