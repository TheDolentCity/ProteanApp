import React from 'react';

export default function DieTable(props) {
  return (
    <div className="inline-flex flex-col w-72 min-w-72 mt-3 mb-8 mx-auto justify-center rounded-md shadow-md dark:bg-lighten-5">
      <div className="flex-none p-4">
        <p className="text-6xl font-bold mb-3">
          {props.die}
        </p>
        <p className="flex-grow">
          {props.description}
        </p>
      </div>

      <table className="flex-auto table-fixed">
        <thead className="text-left font-semibold">
          <tr className="raise-10">
            <th className="w-1/3 py-1 px-4">Rolled</th>
            <th className="w-1/3 py-1 px-4">Fracture</th>
            <th className="w-1/3 py-1 px-4">Result</th>
          </tr>
        </thead>
        <tbody className="text-left font-normal">
          {
            props.dieData.map((data, i) => (
              <tr key={i} className={(i+1) % 2 == 0 ? "raise-5" : ""}>
                <th className="w-1/3 px-4 font-mono font-medium text-lg">{i+1}</th>
                <th className="w-1/3 px-4 font-mono font-medium text-lg">{data.fracture}</th>
                <th className="w-1/3 px-4 font-normal">{data.result}</th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}