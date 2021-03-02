import MDX from '@mdx-js/runtime';
import { useGlobalStore } from '../../stores/global-store';
import ProteanCommandBar from '../../protean-framework/protean-command-bar';
import ProteanPanel from '../../protean-framework/protean-panel';
import Button from '../basic-inputs/button';
import { Header1, Header2, Header3, Header4, Header5, Header6 } from './header';
import { Paragraph } from './paragraph';
import ConfiguredDie from '../game/configured-die';

const TEST_PAGE_1 = {
  uuid: "01",
  type: "PAGE",
  title: "PAGE 1 - Health System",
  props: {

  },
  content:
`
<Button></Button>
# Paragraph

That is a paragraph. A paragraph (from the [Ancient Greek](https://en.wikipedia.org/wiki/Ancient_Greek) παράγραφος, parágraphos, "to write beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,paragraphs are usually an expected part of formal writing, used to organize longer prose.
`
}

const mdxComponents = {
  // Base Components
  a: (props) => <a className="">{props.children}</a>,
  blockquote: (props) => <blockquote className="">{props.children}</blockquote>,
  code: (props) => <code className="">{props.children}</code>,
  del: (props) => <del className="">{props.children}</del>,
  em: (props) => <em className="">{props.children}</em>,
  h1: Header1, 
  h2: Header2,
  h3: Header3,
  h4: Header4,
  h5: Header5,
  h6: Header6,
  hr: (props) => <hr className="">{props.children}</hr>,
  img: (props) => <img className="">{props.children}</img>,
  li: (props) => <li className="">{props.children}</li>,
  ol: (props) => <ol className="">{props.children}</ol>,
  p: Paragraph,
  pre: (props) => <pre className="">{props.children}</pre>,
  strong: (props) => <strong className="">{props.children}</strong>,
  sup: (props) => <sup className="">{props.children}</sup>,
  table: (props) => <table className="">{props.children}</table>,
  td: (props) => <td className="">{props.children}</td>,
  thematicBreak: (props) => <thematicBreak className="">{props.children}</thematicBreak>,
  tr: (props) => <tr className="">{props.children}</tr>,
  ul: (props) => <ul className="">{props.children}</ul>,

  // Customizable Base Components
  H1: (props) => <Header1 css={props.css}>{props.children}</Header1>,
  H2: (props) => <Header2 css={props.css}>{props.children}</Header2>,
  H3: (props) => <Header3 css={props.css}>{props.children}</Header3>,
  H4: (props) => <Header4 css={props.css}>{props.children}</Header4>,
  H5: (props) => <Header5 css={props.css}>{props.children}</Header5>,
  H6: (props) => <Header6 css={props.css}>{props.children}</Header6>,
  P: (props) => <Paragraph css={props.css}>{props.children}</Paragraph>,

  // Protean RPG Components
  ConfiguredDie: ConfiguredDie,
};

const scope = {
  some: 'value'
}

// const components = { ProteanCommandBar };

export default function MdxDocument(props) {
  const { globalState, dispatch } = useGlobalStore();

  return (
    <div className={"w-full h-full p-8 overflow-y-auto " + props.css}>
      <MdxContent>
        {globalState.activeFile?.content}
      </MdxContent>
    </div>
  );
}

function MdxContent(props) {
  return (
    <MDX components={mdxComponents} scope={scope}>
      {props.children}
    </MDX>
  );
}