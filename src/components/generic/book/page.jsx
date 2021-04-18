import React from 'react';

export default function Page(props) {
  return (
    <div className="flex-grow flex justify-center sm:px-12 sm:my-6 md:px-24 md:my-12 xl:px-36 xl:mt-12 xl:mb-24 3xl:px-60 3xl:mt-12 3xl:mb-24 overflow-y-auto scroll">
      {props.children}
    </div>
  );
}