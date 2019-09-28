import React from 'react';
import {PageTitle} from "../components/page-title";

const image = {
  backgroundImage: 'url(/images/blog-big.jpg)',
  backgroundSize: 'cover',
  height: '100vh',
  position: 'relative' as 'relative',
};

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

  public render() {
    return <div className="mb-5">
      <PageTitle>Blog</PageTitle>
      <div className="container mb-5">
        <div className="row mb-5">

        </div>

      </div>
    </div>
      ;
  }
}
