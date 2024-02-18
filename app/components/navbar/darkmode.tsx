"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Darkmode() {

  const { theme, setTheme, systemTheme } = useTheme();
  const [mount, setMount] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return <></>;
const changerTheme = ()=>{
  theme === 'dark'?setTheme('light'):setTheme('dark')
}
  return (
    <>
      <Image
        src={
          currentTheme === "dark" ? "/dark-mode-button.png" : "/light-mode-button.png"
        }
        alt="dark"
        width={100}
        height={100}
        onClick={() => changerTheme() }
        className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300 "
      />
    </>
  );
}
