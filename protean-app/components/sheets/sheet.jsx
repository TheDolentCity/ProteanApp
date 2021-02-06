import React, { Component } from 'react';
import ActionBlockPanel from '../protean-rpg/action-block'

export default class Sheet extends Component {
  render() {
    console.log("File: " + JSON.stringify(this.props?.file));
    console.log("Filedata: " + this.props?.file?.filedata);
    console.log("ActionBlocks: " + this.props?.file?.filedata?.actionBlocks);
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