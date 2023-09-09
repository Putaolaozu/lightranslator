import { useEffect, useRef } from "react";

export const useResize = () => {
  const targetRef = useRef<HTMLElement>(null);
  const targetWrapperRef = useRef<HTMLElement>(null);

  const resizeTextarea = () => {
    if (targetRef.current) {
      targetRef.current.style.height = "auto";
      let scrollHeight = targetRef.current.scrollHeight;
      targetRef.current.style.height = `${scrollHeight}px`;

      const textareaHeight = targetRef?.current?.style?.height as string;
      if (targetWrapperRef.current) {
        targetWrapperRef.current.style.height = textareaHeight;
      }
    }
  };
  if (targetRef) {
    useEffect(() => {
      targetRef.current?.addEventListener("input", resizeTextarea);
      targetRef.current?.addEventListener("click", resizeTextarea);

      return () => {
        targetRef.current?.removeEventListener("input", resizeTextarea);
        targetRef.current?.removeEventListener("click", resizeTextarea);
      };
    }, []);
  }

  return [targetRef, targetWrapperRef];
};
