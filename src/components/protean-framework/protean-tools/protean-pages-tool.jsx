import React, { useState } from 'react';
import { useGlobalStore } from "../../stores/global-store";
import ProteanTool, { ProteanToolButton } from "./protean-tool";
import FabricIcon from "../../generic/basic-inputs/fabric-icon";

export default function ProteanPagesTool(props) {
  const { globalState, dispatch } = useGlobalStore();

  function activePageDispatch(index) {
    return {
      type: "setActivePage",
      payload: {
        activePage: index
      }
    }
  }

  if (globalState?.activeFile?.metadata?.type === "BOOK") {
    return (
      <ProteanTool toolName="Pages">
        {
          globalState?.activeFile?.content.map((page, i) => (
            <ProteanToolButton
              key={page.uuid}
              icon={globalState.fileIcons[page.metadata.type]}
              onClick={() => dispatch(activePageDispatch(i))}
              active={globalState?.activeFile?.metadata.activePage === i}>
              {page.metadata.title}
            </ProteanToolButton>
          ))
        }
      </ProteanTool>
    );
  }
  else return (
    <ProteanTool toolName="Pages">
    </ProteanTool>
  );

  // return (
  //   <ProteanTool toolName="Pages">
  //     <ProteanPagesContainer>
  //       {
  //         globalState?.activeFile?.type == "BOOK"
  //           ?
  //           globalState?.activeFile?.content.map((page, i) => (
  //             <ProteanPageButton
  //               key={page.uuid}
  //               icon="TextDocument"
  //               number={i}
  //               onClick={() => dispatch(activePageDispatch(page))}
  //               activePage={globalState?.activePage?.uuid === page.uuid}>
  //               {page.title}
  //             </ProteanPageButton>
  //           ))
  //           :
  //           <span></span>
  //       }
  //     </ProteanPagesContainer>
  //   </ProteanTool>
  // );
}

function ProteanPagesContainer(props) {
  return (
    <div className="grid grid-cols-2 grid-flow-row px-2">
      {props.children}
    </div>
  );
}

function ProteanPageButton(props) {
  if (props.activePage) {
    return (
      <button onClick={props.onClick} className="acc-focus flex flex-col col-span-2 px-4 pt-2 pb-4 rounded text-base hover:raise-10">
        <p className="max-w-full pb-2 text-sm truncate">{props.children}</p>
        <div className="flex w-full h-36 justify-center items-center rounded shadow-md bg-cyan-500 dark:bg-cyan-600 text-white font-semibold">
          <span className="text-7xl font-semibold">
            {props.number}
          </span>
        </div>
      </button>
    );
  }
  else return (
    <button onClick={props.onClick} className="acc-focus flex flex-col col-span-2 px-4 pt-2 pb-4 rounded text-base hover:raise-10">
      <p className="max-w-full pb-2 text-sm truncate">{props.children}</p>
      <div className="flex w-full h-36 justify-center items-center rounded shadow-md lower-50">
        <span className="text-7xl font-semibold">
          {props.number}
        </span>
      </div>
    </button>
  );
}