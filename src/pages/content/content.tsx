import React from "react";

export class Content extends React.Component {

  protected content: any;

  render(): any {
    return <div className="mb-5" style={{overflow: 'hidden'}}>
      <div className="row mb-5">
        <div className="col-12 col-lg-8 mx-auto">
          {this.content}
        </div>
      </div>
    </div>;
  }
}