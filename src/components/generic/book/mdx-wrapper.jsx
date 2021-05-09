import React from 'react';
import Spacer from './spacer';

export default function MdxWrapper({ children }) {
  return (
    <div className="">
      {children}
    </div>
  );
}