import { useEffect, useRef } from "react";

// capture click event
// if a click occurs outside of element which assign to ref from useRef.
// then execute the handler func. Otherwise, do nothing
const useOutsideClick = (handler, listenCapturing = true) => {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick, listenCapturing);
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);
  return { ref };
};

export default useOutsideClick;
