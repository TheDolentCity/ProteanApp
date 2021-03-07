import React, { useState } from 'react';

export default function ProteanViewController(props) {
  const [views, setViews] = useState(0);

  return (
    <div className="w-full h-full">
      {
        views.map((view, i) => (
          <ProteanViewer key={i}>
            {view}
          </ProteanViewer>
        ))
      }
    </div>
  );
}

function ProteanViewer(props) {
  return (
    <div className="w-full h-full border-r border-gray-300 dark:border-gray-700">
      {props.children}
    </div>
  );
}