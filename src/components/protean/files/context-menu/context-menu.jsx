import React, { useState } from 'react';
import { useEffect } from 'react';

export function ContextMenu({ itemRef, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const ref = itemRef.current;
    if (!ref) {
      return;
    }

    const showMenu = (event) => {
      event.preventDefault();
      setIsOpen(true);
      setX(event.clientX);
      setY(event.clientY);
    }

    const closeMenu = (event) => {
      if (event.target != ref) {
        setIsOpen(false);
      }
    }

    ref.addEventListener('contextmenu', showMenu);
    window.addEventListener('click', closeMenu);

    return function cleanup() {
      ref.removeEventListener('contextmenu', showMenu);
      window.removeEventListener('click', closeMenu);
    }
  });

  const style = {
    top: y,
    left: x
  }

  if (isOpen) {
    return (
      <div className="fixed flex flex-col min-w-48 -mx-4 py-2 shadow-xl bg-white dark:bg-gray-600" style={style}>
        {children}
      </div>
    );
  }
  else return null;
}