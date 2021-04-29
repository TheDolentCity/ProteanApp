import React from 'react';
import Spacer from './spacer';

export default function MdxWrapper({ children }) {
  return (
    <div className="">
      {children}
      <Spacer space="mt-8"></Spacer>
    </div>
  );
}