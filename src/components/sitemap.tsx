import React from 'react';
import {Link} from "react-router-dom";

const link = {
    color: '#d0f0c0',
    textDecoration: 'underline',
};

const ul = {
    listStyle: 'none',
    padding: 0,
};

export class Sitemap extends React.Component<any, any> {
    render(): any {
        return <>
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
        </>;
    }
}