import React, { Component } from 'react';
import ActionBlockPanel from '../protean-rpg/action-block'

export default class Sheet extends Component {
  render() {
    return (
      <div className="">
        <h1>
          {this.props?.file?.filedata?.name}
        </h1>
        <p>
          {this.props?.file?.filedata?.description}
        </p>
        <div className="w-full space-y-6">
          <ActionBlockPanel
            actionBlocks={this.props?.file?.filedata?.actionBlocks}>
          </ActionBlockPanel>
        </div>
      </div>
    );
  }
}