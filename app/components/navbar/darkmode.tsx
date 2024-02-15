"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Darkmode() {
  const { systemTheme, theme, setTheme } = useTheme();

  const changerTheme = ()=>{
    if( theme === 'dark')
        setTheme('light')
    else
        setTheme('dark')
  }

  return (
    <>
            {/* <Image
          // src={theme === "dark" ? darkPng : lightPng}
          src={"/light-mode-button.png"}
          alt="dark"
          width={100}
          height={100}
          onClick={() => changerTheme() }
          className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10  ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          } `} 
        />*/}
        <Image
          src={theme === 'dark'?"/dark-mode-button.png":"/light-mode-button.png"}
          alt="dark"
          width={100}
          height={100}
          onClick={() => changerTheme() }
          className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300 "
        />
      {/* <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        // className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'>
      >
        Toggle Mode
      </button> */}
    </>
  );
}
