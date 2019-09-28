import React from "react";
import {BlogService} from "../services/blog";
import {PageTitle} from "../components/page-title";

export class BlogPost extends React.Component<any, any> {

  state = {
    post: null
  };

  render(): any {
    const post: any = this.state.post;

    if (!post) {
      return null;
    }

    const image = {
      background: `url(${post.field_image[0].url})`,
      height: 300,
      backgroundSize: 'cover',
    };

    return <div className="mb-5" style={{overflow: 'hidden'}}>
      <PageTitle>{post.title[0].value}</PageTitle>
      <div style={image}/>
      <div className="container">
      <div className="row mb-5">
        <div className="col-12 col-lg-8 mx-auto mt-5 pl-2 pr-2" dangerouslySetInnerHTML={{__html: post.body[0].value}}/>
      </div>
      </div>
    </div>;
  }

  componentDidMount(): void {
    BlogService.getPosts().then((posts: any) => {
      posts.forEach((post: any) => {
        if (post.nid[0].value === parseInt(this.props.match.params.id)) {
          this.setState({post})
        }
      });
    });
  }
}