import React from "react";

const wrapper = {
  background: '#d0f0c0'
};

export class PageTitle extends React.Component {
  render():any {
    return <div style={wrapper} className="py-3 pl-3">
      <h1 className="mb-0">{this.props.children}</h1>
    </div>;
  }
}