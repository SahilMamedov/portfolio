import { useState, useRef, useLayoutEffect, RefObject } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      if (!ref.current) return; 
      const element = ref.current!;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref]);

  return point;
}