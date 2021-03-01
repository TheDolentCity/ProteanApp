import { Header1 } from "../book/header";

export default function ConfiguredDie(props) {
  return (
    <div className="flex w-full border-2 border-gray-600 dark:border-gray-500">
      <div className="flex-none flex flex-col h-full p-4 pr-6 justify-center">
        <p className="text-8xl font-bold">
          {"d" + props.die}
        </p>
        <ul className="ml-4 pt-2 list-disc list-outside text-left">
          {
            props.dieTags.map(tag => (
              <li key={tag} className="">{tag}</li>
            ))
          }
        </ul>
      </div>
      <ol className="flex-grow flex flex-col flex-wrap max-h-40 gap-x-6 gap-y-2 ml-4 p-4 list-decimal list-outside text-left">
        {
          props.dieResults.map(result => (
            <li key={result} className="">{result}</li>
          ))
        }
      </ol>
    </div>
  );
} 