import { useEffect, useRef, useState } from "react";

// capture click event
// if a click occurs outside of element which assign to ref from useRef.
// then execute the handler func. Otherwise, do nothing
// const threshold = [];
// for (let i = 0; i <= 1.0; i += 0.1) {
//   threshold.push(i);
// }

const options = {
  rootMargin: "0%",
  threshold: [0.5],
};
const useScroll = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
      });
    }, options);

    if (ref) observer.observe(ref.current);
  }, [ref]);

  return { inView, ref };
};

export default useScroll;
