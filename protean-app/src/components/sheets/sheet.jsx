import React from 'react';
import { Header1 } from '../generic/book/header';
import { Paragraph } from '../generic/book/paragraph';
import ActionBlockPanel from '../protean-rpg/action-block'

export default function Sheet(props) {
  return (
    <div className="p-8">
      <Header1>
        {props?.file?.filedata?.name}
      </Header1>
      <Paragraph>
        {props?.file?.filedata?.description}
      </Paragraph>
      <div className="w-full space-y-6">
        <ActionBlockPanel
          actionBlocks={props?.file?.filedata?.actionBlocks}>
        </ActionBlockPanel>
      </div>
    </div>
  );
}

Sheet.defaultProps = {
  file: {
    filedata: {
      name: "Default Name",
      description: "description description description description description description description description description description description description description description description description description description description description description description description description description",
      actionBlocks: [
        {
          dice: {
            count: 4,
            size: 6
          },
          header: "Header test",
          body: "description description description description description description description description description description description description description description description description description description description description description description description description description"
        },
        {
          dice: {
            count: 4,
            size: 6
          },
          header: "Header test",
          body: "description description description description description description description description description description description description description description description description description description description description description description description description description"
        },
      ]
    }
  }
}