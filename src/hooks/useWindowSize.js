import { useState, useEffect } from "react";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  }
  function Component() {
    const { width, height } = useWindowSize();
  
    return (
      <div>
        <p>Window width: {width}</p>
        <p>Window height: {height}</p>
      </div>
    );
  }
  Component();
  export default useWindowSize;