import React from 'react';
import {Link} from "react-router-dom";
import {Contact} from "./contact";

const top = {
  backgroundColor: '#363636',
  color: '#d0f0c0',
};

const bottom = {
  backgroundColor: '#1f1f1f',
  color: '#d0f0c0',
  textAlign: 'center' as 'center',
};

const link = {
  color: '#d0f0c0',
  textDecoration: 'underline',
};

const ul = {
  listStyle: 'none',
  padding: 0,
};

export class Footer extends React.Component<any, any> {

  public render() {
    return <footer>
      <div style={top}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-5">
              <h2>Sitemap</h2>
              <ul style={ul} className="mt-3">
                <li>
                  <Link to={'/'} style={link}>Home</Link>
                </li>
                <li className="ml-1">
                  <Link to={'/agriculture'} style={link}>Agriculture</Link>
                </li>
                <li className="ml-1">
                  <Link to={'/forestry'} style={link}>Forestry</Link>
                </li>
                <li>
                  <Link to={'/team'} style={link}>Team</Link>
                </li>
                <li>
                  <Link to={'/blog'} style={link}>Blog</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 py-5">
              <Contact/>
            </div>
          </div>
        </div>
      </div>
      <div style={bottom} className="py-3">
        Copyright © {window.location.hostname} {new Date().getFullYear()}
      </div>
    </footer>;
  }
}
