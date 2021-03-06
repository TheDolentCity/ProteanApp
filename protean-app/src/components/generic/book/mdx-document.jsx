import React from 'react';
import { render } from 'react-dom';
import Markdown from 'markdown-to-jsx';
import { Header2 } from './header';

const md = 
`
# Test Header 1
The DatePicker works by supplying a date to bias towards,
as well as a default timezone.

## Custom H2
`;

export default function MarkdownParser(props) {
  return (
    <Markdown
      children={md}
      options={{
        overrides: {
          h2: {
            component: Header2,
          },
        },
      }}
    />
  );
}