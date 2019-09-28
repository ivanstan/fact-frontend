import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {Link} from "react-router-dom";

interface TeaserPropsInterface {
  title: string;
  image: string;
  link: string;
}

const image = {};

export class Teaser extends React.Component<TeaserPropsInterface> {
  render(): any {
    return <ScrollAnimation animateIn="fadeInUp" duration={1} className={"d-flex"}>
      <div className={'container'}>
        <div className={'row'}>
          <Link to={this.props.link} className="zoom-container mb-4 col-md-4" style={image}>
            <img width="100%" className="mb-5" src={this.props.image} alt={this.props.title}/>
          </Link>
          <div className={'ml-4 col-md-6'}>
            <Link to={this.props.link}>
              <h4 className="h5 font-weight-bold">{this.props.title}</h4>
            </Link>
            <p>
              {this.props.children}&nbsp;
              <Link to={this.props.link}>
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </ScrollAnimation>;
  }
}