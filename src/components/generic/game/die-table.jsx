import React from 'react';

export default function DieTable(props) {
  return (
    <div className="flex flex-col w-full mt-3 mb-8 justify-center rounded shadow-md dark:bg-lighten-5">
      <div className="flex flex-none w-full p-4 items-center">
        <p className="mr-6 text-6xl font-bold mb-3">
          {props.die}
        </p>
        <p className="flex flex-grow">
          {props.description}
        </p>
      </div>

      <table className="flex-auto table-fixed max-w-full text-base font-mono">
        <thead className="text-left font-semibold">
          <tr className="raise-10">
            <th className="w-2/12 py-1 px-4 text-center">Roll</th>
            {/* <th className="w-1/2 py-1 px-4 text-center">Fracture</th> */}
            <th className="w-10/2 py-1 px-4">Result</th>
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
      <th className="w-2/12 px-4 font-mono font-medium text-base text-center">{props.index}</th>
      {/* <th className="w-1/2 px-4 font-mono font-medium text-base text-center">{props.fracture}</th> */}
      <th className="w-10/12 px-4 font-normal">{props.result}</th>
    </tr>
  );
}