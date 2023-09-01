import { useCallback, useEffect, useState } from "react";

interface ISize {
  windowWidth: number;
  windowHeight: number;
  clientWidth: number;
  clientHeight: number;
}

const useResizeWindow = (contentId: string = "resizable-content") => {
  const [size, setSize] = useState<ISize>({
    windowWidth: 0,
    windowHeight: 0,
    clientWidth: 0,
    clientHeight: 0,
  });

  const handleChangeResize = useCallback(() => {
    try {
      const content = document.getElementById(contentId);
      if (content) {
        setSize({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          clientWidth: content?.clientWidth || 0,
          clientHeight: content?.clientHeight || 0,
        });
      } else {
        setSize((prev) => ({
          ...prev,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
        }));
      }
    } catch (error) {
      console.error("useResize - handleChangeResize function error: ", error);
    }
  }, [contentId]);

  useEffect(() => {
    handleChangeResize();
    window.addEventListener("resize", handleChangeResize);
    return () => {
      window.removeEventListener("resize", handleChangeResize);
    };
  }, [handleChangeResize]);

  return size;
};

export default useResizeWindow;
