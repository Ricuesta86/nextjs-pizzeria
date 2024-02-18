"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
    
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return <>{children}</>;

  return (
    <ThemeProvider attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  );
}
