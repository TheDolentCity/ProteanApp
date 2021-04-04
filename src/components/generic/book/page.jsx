import React, { useState } from 'react';
import FabricIcon from '../icons/fabric-icon';

export default function Page(props) {
  return (
    <div className="flex-grow flex max-h-full justify-center px-12 my-6 md:px-24 md:my-12 xl:px-36 xl:my-12 overflow-y-auto">
      {props.children}
    </div>
  );
}


// import React, { useState } from 'react';
// import FabricIcon from '../icons/fabric-icon';

// export default function Page(props) {
//   return (
//     <div className="flex flex-col w-full h-full pb-12 rounded-md shadow-md lower-50 font-normal">
//       <div className="flex w-full p-4 text-2xl">
//         <FabricIcon name={props.icon} css="flex-none"></FabricIcon>
//         <div className="flex-grow flex flex-col pl-4">
//           <span className="flex-auto font-semibold text-sm">
//             {props.title}
//           </span>
//           <span className="flex-auto text-xs">
//             {props.subtitle}
//           </span>
//         </div>
//         <button className="acc-focus flex-none hover:raise-10">
//           <FabricIcon name="MoreVertical" css=""></FabricIcon>
//         </button>
//       </div>
//       <div className="flex-grow px-7 xl:px-14 pt-4 overflow-y-auto">
//         {props.children}
//       </div>
//     </div>
//   );
// }