import React from 'react';
import {Link} from "react-router-dom";
import {Contact} from "./contact";
import {Sitemap} from "./sitemap";
import {Copyright} from "./copyright";

const top = {
  backgroundColor: '#58595b',
  color: '#d0f0c0',
};

const bottom = {
  backgroundColor: '#3A3B3D',
  color: '#d0f0c0',
  textAlign: 'center' as 'center',
};

export class Footer extends React.Component<any, any> {

  public render() {
    return <footer>
      <div style={top}>
        <div className="container">
          <div className="row py-3">
            <div className="col-md-3">
              <Sitemap/>
            </div>
            <div className="col-md-4 d-flex d-md-block">
              <img width="80%" src="/images/3rd-party/kic.png" className="m-auto"/>
            </div>
            <div className="col-md-5">
              <Contact/>
            </div>
          </div>
        </div>
      </div>
      <div style={bottom} className="py-3">
        <Copyright/>
      </div>
    </footer>;
  }
}
