import React from "react";
import {contactMail} from "../config";

export class Contact extends React.Component {
  render(): any {
    return <form action={"https://formspree.io/" + contactMail} method="POST">

      <div className="form-group">
        <input type="text" className="form-control" name="email" id="email" required placeholder="Email"/>
      </div>

      <div className="form-group">
        <input type="text" className="form-control" name="subject" id="subject" required placeholder="Subject"/>
      </div>

      <div className="form-group">
        <textarea rows={5} className="form-control" name="message" id="message" required placeholder="Message"/>
      </div>

      <input className="btn btn-primary" type="submit" value="Submit" style={{width: '100%'}}/>
    </form>
  }
}