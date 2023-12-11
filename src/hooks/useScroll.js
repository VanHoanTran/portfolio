import { useEffect, useRef, useState } from "react";

// capture click event
// if a click occurs outside of element which assign to ref from useRef.
// then execute the handler func. Otherwise, do nothing
// const threshold = [];
// for (let i = 0; i <= 1.0; i += 0.1) {
//   threshold.push(i);
// }

const options = {
  rootMargin: "-10% 0%",
  threshold: [0.7],
};
const useScroll = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef();
  //const [ref, setRef] = useState(null);
  // const [observedRef, setObservedRef] = useState(null);

  useEffect(() => {
    console.log(ref);

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        setInView(entry.isIntersecting);
        console.log(entry.intersectionRatio);
      });
    }, options);

    if (ref) observer.observe(ref.current);
  }, [ref]);

  //return { inView, setRef };

  return { inView, ref };
};

export default useScroll;
