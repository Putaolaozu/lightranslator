"use client";
import React, { ReactNode, useEffect, useRef } from "react";

const Popup = ({ children, setOpenWin }: { children: string | ReactNode; setOpenWin: (value: boolean) => void }) => {
  const ref = useRef<HTMLDivElement>(null);

  const closeWin = (e: MouseEvent) => {
    const dimensions = ref?.current?.getBoundingClientRect();
    if (
      dimensions &&
      (e.clientX < dimensions.left ||
        e.clientX > dimensions.right ||
        e.clientY < dimensions.top ||
        e.clientY > dimensions.bottom)
    ) {
      ref.current?.classList.add("animate-pullUp");
      setTimeout(() => {
        setOpenWin(false);
      }, 300);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", closeWin);
    }, 200);

    return () => {
      window.removeEventListener("click", closeWin);
    };
  }, []);
  return (
    <div
      className="flex justify-center flex-col items-center absolute top-5 max-w-50 z-50 mx-4 animate-dropDown"
      ref={ref}>
      <svg
        width="25"
        height="9"
        viewBox="0 0 175 91"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-100 dark:fill-slate-950">
        <path d="M87.5 0.953583L174.873 90.2732H0.126999L87.5 0.953583Z" />
      </svg>

      <div className="p-4 rounded bg-slate-100 text-black dark:bg-slate-950 dark:text-slate-300">{children}</div>
    </div>
  );
};

export default Popup;
