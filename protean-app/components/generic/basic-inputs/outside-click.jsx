import React, { useRef, useEffect } from "react";

// Hook that alerts clicks outside of the passed ref
function useOutsideAlerter(ref, onClick) {
  useEffect(() => {
    // Trigger outside click event
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

// Component that wraps around HTML that you want to trigger event on outside click
export default function OutsideClick(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.onClick);

  return <span ref={wrapperRef}>{props.children}</span>;
}