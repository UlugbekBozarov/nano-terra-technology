import { useCallback, useEffect, useState } from "react";

interface ISize {
  clientWidth: number;
  clientHeight: number;
}

const useResize = (contentId: string = "resizable-content") => {
  const [size, setSize] = useState<ISize>({
    clientWidth: 0,
    clientHeight: 0,
  });

  const handleChangeResize = useCallback(() => {
    try {
      const content = document.getElementById(contentId);
      if (content) {
        setSize({
          clientWidth: content?.clientWidth || 0,
          clientHeight: content?.clientHeight || 0,
        });
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

export default useResize;
