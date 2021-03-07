import Markdown from 'markdown-to-jsx';
import { Header1, Header2, Header3, Header4, Header5, Header6 } from './header';
import { Paragraph } from './paragraph';
import ConfiguredDie from '../game/configured-die';

export default function MarkdownRenderer({children}) {
  return (
    <Markdown
      children={children}
      options={{
        overrides: {
          H1: { component: Header1, },
          H2: { component: Header2, },
          H3: { component: Header3, },
          H4: { component: Header4, },
          H5: { component: Header5, },
          H6: { component: Header6, },
          P: { component: Paragraph },
          ConfiguredDie: { component: ConfiguredDie, },
        },
      }}
    />
  );
}