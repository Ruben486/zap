import "./interObserver.css";
import {useState, useRef, useEffect} from 'react';

const InterObserver = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px"}
    );
    observer.observe(ref.current);
    return () => observer.disconnect(); 
  },[isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in")
      });
    } else {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in")
      })
    }

},[isIntersecting]);

  return (
    <div className="observer">
      <header>Este es el header</header>
      <main ref={ref}>
        <div className="child-one">Child One</div>
        <div className="child-two">Child Two</div>
        <div className="child-two">Child Three</div>
      </main>
      <footer>Este es el footer</footer>
    </div>
  )
}
export default InterObserver;
