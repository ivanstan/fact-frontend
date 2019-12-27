import React from "react";
import {PageTitle} from "../../components/page-title";

export class Content extends React.Component {

  protected image: any;

  protected title: any;

  protected content: any;

  render(): any {
    const image = {
      background: `url(${this.image})`,
      height: 300,
      backgroundSize: 'cover',
    };

    return <div className="mb-5" style={{overflow: 'hidden'}}>
      <PageTitle>{this.title}</PageTitle>
      <div style={image}/>
      <div className="row mb-5">
        <div className="col-12 col-lg-8 mx-auto">
          {this.content}
        </div>
      </div>
    </div>;
  }
}