import React from 'react';

export default function DieTable(props) {
  return (
    <div className="inline-flex flex-col w-60 min-w-60 mt-3 mb-8 mx-4 justify-center rounded-md shadow-md dark:bg-lighten-5">
      <div className="flex-none p-4">
        <p className="text-6xl font-bold mb-3">
          {props.die}
        </p>
        <p className="flex-grow">
          {props.description}
        </p>
      </div>

      <table className="flex-auto table-fixed max-w-full text-sm">
        <thead className="text-left font-semibold">
          <tr className="raise-10">
            <th className="w-1/3 py-1 px-4 text-center">Roll</th>
            <th className="w-1/3 py-1 px-4 text-center">Fracture</th>
            <th className="w-1/3 py-1 px-4">Result</th>
          </tr>
        </thead>
        <tbody className="text-left font-normal">
          {props.children}
        </tbody>
      </table>
    </div>
  );
}

export function DieTableRow(props) {
  return (
    <tr className={(props.index) % 2 == 0 ? "raise-5" : ""}>
      <th className="w-1/3 px-4 font-mono font-medium text-base text-center">{props.index}</th>
      <th className="w-1/3 px-4 font-mono font-medium text-base text-center">{props.fracture}</th>
      <th className="w-1/3 px-4 font-normal">{props.result}</th>
    </tr>
  );
}