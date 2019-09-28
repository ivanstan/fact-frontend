import React from 'react';
import {PageTitle} from "../components/page-title";
import {BlogService} from "../services/blog";
import {Teaser} from "../components/teaser";

export const title = {
  fontSize: 84,
  color: '#fff',
  position: 'absolute' as 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  textAlign: 'center' as 'center',
  width: '100%'
};

export class Blog extends React.Component<any, any> {

  state = {
    posts: []
  };

  public render() {
    return <div className="mb-5">
      <PageTitle>Blog</PageTitle>
      <div className="container mb-5">
        <div className="row mb-5 pt-5">
          {this.state.posts.map((post: any, index: number) => {
            return <Teaser key={index} title={post.title[0].value} image={post.field_image[0].url} link={'/blog/' + post.nid[0].value}>
              {post.body[0].summary}
            </Teaser>
          })}
        </div>
      </div>
    </div>
      ;
  }

  componentDidMount(): void {
    BlogService.getPosts().then((posts: any) => this.setState({posts}));
  }
}
