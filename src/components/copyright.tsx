import React from 'react';

export class Copyright extends React.Component<any, any> {
    render(): any {
        return <>
            Copyright © {window.location.hostname} {new Date().getFullYear()}
        </>;
    }
}