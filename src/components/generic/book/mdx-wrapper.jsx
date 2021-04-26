import React from 'react';

export default function MdxWrapper({ children }) {
  return (
    <div className="h-full mt-8 mb-8">
      {children}
    </div>
  );
}