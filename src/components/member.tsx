import React from "react";

const img = {
  minHeight: 315,
  backgroundSize: 'cover',
};

interface MemberPropsInterface {
  name: string;
  image: string;
}

export class Member extends React.Component<MemberPropsInterface, any> {
  render(): any {
    return <div className="container my-5">
      <div className="row pb-md-5">
        <div className="col-md-5" style={{...img, backgroundImage: `url(${this.props.image})`}} />
        <div className="col-md-7 pl-md-5 mt-2 mt-md-0 p-0">
          <h2 className="h4 font-weight-bold">{this.props.name}</h2>
          <p>{this.props.children}</p>
        </div>
      </div>
    </div>;
  }
}