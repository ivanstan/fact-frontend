import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const image = {
  backgroundImage: 'url(/images/earth-space.jpg)',
  backgroundSize: 'cover',
  height: '100vh',
  position: 'relative' as 'relative',
};

const item = {
  flexGrow: 1,
  flexBasis: 0
};

const p = {
  ...item,
  padding: '2em',
};


export class About extends React.Component<any, any> {

  public render() {
    return <div className="mb-5">
      <div style={image} className="mb-5">
        <h2>WHAT WE DO</h2>
      </div>

      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-12 col-lg-8 mx-auto">
            <h1 className="mb-4">OUR MISSION</h1>
            <p>Serbian Case for Space Foundation (SCS) provides decision-makers and private actors
              with
              up-to-date analysis of industrial capabilities in the region and offers informed view
              on
              mid- to long-term benefits of engaging in space activities. In this context, SCS acts
              as
              an independent platform for developing national space policies and strategies.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-lg-8 mx-auto d-flex align-items-center">
            <div style={item}>
              <ScrollAnimation animateIn="fadeInLeft" duration={1} animateOnce={true}>
                <img width='100%' src="/images/graph.jpg" alt="" />
              </ScrollAnimation>
            </div>
            <p style={p}>Supporting the development of domestic private industry interested in
              expanding its
              services and products to the space domain.</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-lg-8 mx-auto d-flex align-items-center">
            <p style={p}>Building bridges between all the relevant stakeholders: private industry,
              academia,
              and decision makers.</p>
            <div style={item}>
              <ScrollAnimation animateIn="fadeInRight" duration={1} animateOnce={true}>
                <img width='100%' src="/images/ada.jpg" alt="" />
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-lg-8 mx-auto d-flex align-items-center">
            <div style={item}>
              <ScrollAnimation animateIn="fadeInLeft" duration={1} animateOnce={true}>
                <img width='100%' src="/images/satelit.jpg" alt="" />
              </ScrollAnimation>
            </div>
            <p style={p}>Raising awareness and facilitating the exchange of space-relevant
              information and
              experiences between international partners and local stakeholders.</p>
          </div>
        </div>
      </div>
    </div>
  }
}
