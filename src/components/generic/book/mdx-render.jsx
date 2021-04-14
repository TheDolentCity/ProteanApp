import React from 'react';
import MDX from '@mdx-js/runtime';
import MdxWrapper from './mdx-wrapper';
import { Header1, Header2, Header3, Header4, Header5, Header6, Subtitle } from './header';
import { Paragraph } from './paragraph';
import { Blockquote } from './blockquote';
import { ListBulleted, ListNumbered } from './lists';
import DieTable, { DieTableRow } from '../game/die-table';
import { WidgetContainer, Widget } from '../game/widget';
import DiceBlock from '../game/blocks/dice-block';
import NoteBlock from '../game/blocks/note-block';
import NumberBlock from '../game/blocks/number-block';
import TextBlock from '../game/blocks/text-block';
import { ThematicBreak } from './thematic-break';
import Spacer from './spacer';

const mdxComponents = {
  // Base wrapper for every mdx document
  wrapper: props => <MdxWrapper>{props.children}</MdxWrapper>,

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
  hr: ThematicBreak,
  blockquote: Blockquote,
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
  ul: ListBulleted,

  // Customizable Base Components
  H1: (props) => <Header1 css={props.css}>{props.children}</Header1>,
  H2: (props) => <Header2 css={props.css}>{props.children}</Header2>,
  H3: (props) => <Header3 css={props.css}>{props.children}</Header3>,
  H4: (props) => <Header4 css={props.css}>{props.children}</Header4>,
  H5: (props) => <Header5 css={props.css}>{props.children}</Header5>,
  H6: (props) => <Header6 css={props.css}>{props.children}</Header6>,
  P: (props) => <Paragraph css={props.css}>{props.children}</Paragraph>,
  Subtitle: (props) => <Subtitle css={props.css}>{props.children}</Subtitle>,
  Spacer: (props) => <Spacer space={props.space}></Spacer>,

  // Protean RPG Components
  WidgetContainer: WidgetContainer,
  Widget: Widget,
  DieTable: DieTable,
  DieTableRow: DieTableRow,
  DiceBlock: DiceBlock,
  NoteBlock: NoteBlock,
  NumberBlock: NumberBlock,
  TextBlock: TextBlock
};

// Customize Document:
// Pass a 'wrapper' object in the props. The wrapper should be a styled div.
// For example: (<div className="bg-red-500">{props.children}</div>)
export default function MdxRender(props) {
  return (
    <MDX components={mdxComponents} scope={props.scope} wrapper={props.wrapper}>
      {props.children}
    </MDX>
  );
}