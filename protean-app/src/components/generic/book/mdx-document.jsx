import React from 'react';
import { MDXProvider } from "@mdx-js/react";
import MDX from '@mdx-js/runtime';

const TEST_MDX = 
  // "import ProteanAppHeader from './components/protean-framework/protean-header'\n\n" +

  // "<ProteanAppHeader></ProteanAppHeader>\n\n" +

  "# Example MDX page\n\n" +

  "This is a test to see if MDX is rendered";

const baseComponents = {
  h1: (props) => <h1 style={{ color: "red" }}>{props.children}</h1>,
  p: (props) => <p style={{ color: "green" }}>{props.children}</p>,
  // ProteanAppHeader: (props) => <ProteanAppHeader>{props.children}</ProteanAppHeader>,
};

export default function MdxDocument(props) {
  const adjustedComponents = {
    ...baseComponents,
    // SomeComplicatedInteractiveGraph: () => {
    //   return <div>{JSON.stringify(props.customGraphData)}</div>;
    // },
  };
  return (
    <MDXProvider components={adjustedComponents}>
      <MDX>{TEST_MDX}</MDX>
    </MDXProvider>
  );
};