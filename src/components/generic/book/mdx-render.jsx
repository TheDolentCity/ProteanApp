import React from 'react';
import MDX from '@mdx-js/runtime';
import MdxWrapper from './mdx-wrapper';
import { Header1, Header2, Header3, Header4, Header5, Header6, Subtitle } from './header';
import { Paragraph } from './paragraph';
import { Blockquote } from './blockquote';
import { ListBulleted, ListNumbered } from './lists';
import Columns from './columns';
import DieTable, { DieTableRow } from '../game/die-table';
import { WidgetContainer, Widget } from '../game/widget';
import { SheetWidget } from '../game/sheet';
import { ThematicBreak } from './thematic-break';
import Spacer from './spacer';

const mdxComponents = {
  // Base wrapper for every mdx document
  wrapper: props => <MdxWrapper>{props.children}</MdxWrapper>,

  // Base Components
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  h5: Header5,
  h6: Header6,
  hr: ThematicBreak,
  blockquote: Blockquote,
  p: Paragraph,
  ul: ListBulleted,
	ol: ListNumbered,

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
  Columns: (props) => <Columns count={props.count} className={props.className}>{props.children}</Columns>,

  // Protean RPG Components
  WidgetContainer: WidgetContainer,
  Widget: Widget,
	SheetWidget: SheetWidget,
  DieTable: DieTable,
  DieTableRow: DieTableRow,
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