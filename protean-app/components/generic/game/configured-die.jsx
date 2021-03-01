import { Header1 } from "../book/header";

export default function ConfiguredDie(props) {
  return (
    <div className="flex w-full mt-4 mb-8 border-2 border-gray-600 dark:border-gray-500">
      <div className="flex-none flex flex-col h-full p-4 pr-6 justify-center">
        <p className="text-6xl font-bold">
          {"d" + props.die}
        </p>
        <ul className="ml-4 pt-2 list-disc list-outside text-left">
          <li className="">
            <code className="px-1 bg-cyan-400 font-medium">
              {props.dieTags[0]}
            </code>
          </li>
          <li className="">
            <code className="px-1 bg-magenta-400 font-medium">
              {props.dieTags[1]}
            </code>
          </li>
          <li className="">
            <code className="px-1 bg-yellow-400 font-medium">
              {props.dieTags[2]}
            </code>
          </li>
        </ul>
      </div>
      <div className="flex-grow my-auto items-center">
        <ol className="flex flex-col flex-wrap max-h-40 gap-x-8 gap-y-2 ml-4 p-4 list-decimal list-outside text-left">
          {
            props.dieResults.map(result => (
              <li key={result} className="font-semibold">
                <code className="px-1 font-normal">
                  {result}
                </code>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  );
} 