import React from 'react';

export default function ConfiguredDie(props) {
  return (
    <div className={"inline-flex w-72 min-w-72 mx-4 border-2 border-gray-600 dark:border-gray-500 " + props.css}>
      <div className="flex-none flex flex-col h-full p-4 justify-center">
        <p className="text-6xl font-bold">
          {"d" + props.die}
        </p>
        <ul className="ml-4 pt-2 list-disc list-outside text-left">
          <li className="">
            <span className="px-1 bg-accent-400 font-medium">
              {props.dieTags[0]}
            </span>
          </li>
          <li className="">
            <span className="px-1 bg-accent-400 font-medium">
              {props.dieTags[1]}
            </span>
          </li>
          <li className="">
            <span className="px-1 bg-accent-400 font-medium">
              {props.dieTags[2]}
            </span>
          </li>
        </ul>
      </div>
      <div className="flex-shrink my-auto items-center">
        <ol className="p-4 list-decimal list-inside text-left">
          <DiceResults dieResults={props.dieResults}></DiceResults>
        </ol>
      </div>
    </div>
  );
}

function DiceResults({dieResults}) {
  return (
    dieResults?.map((result, i) => (
      <li key={i} className="font-semibold font-mono text-right">
        <code className="font-normal whitespace-nowrap text-left">
          {result}
        </code>
      </li>
    ))
  );
}