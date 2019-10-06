import React from 'react';
import {Teaser} from "../components/teaser";
import {Link} from "react-router-dom";

const featured = {
  background: '#d0f0c0',
};

const runningTitle = {
  textAlign: 'center' as 'center',
  fontWeight: 'bold' as 'bold',
};

const button = {
  width: 130,
};

const buttonWrapper = {
  width: 270,
  margin: 'auto',
};

export class Home extends React.Component<any, any> {

  public render() {
    return <div className="mb-5">

      <div style={featured} className="py-5 mb-5">

        <div className="container mb-4">
          <div style={{width: 200}} className="mx-auto">
            <img src="/images/logo.png" alt="logo" width="100%"/>
          </div>
          <p style={runningTitle}>
            We offer research based on data collected by drone, multispectral cameras and sensors to farmers,
            agribusiness
            companies, public and NGO sector, which help them to assess what types of crops and trees are the most
            suitable for their estates. We monitor crops and trees in order to maximize yields and profits.
          </p>
        </div>
        <div style={buttonWrapper} className="mt-4">
          <Link style={button} className="btn btn-secondary d-inline-block mr-2" to={'/team'}>Team</Link>
          <Link style={button} className="btn btn-secondary d-inline-block" to={'/blog'}>Blog</Link>
        </div>
      </div>

      <div className="container mb-5">
        <Teaser title='Forestry' image="/images/forestry.jpg" link="/forestry">
          Natural, semi-natural and planted forests are more vulnerable due to climate change. In the summer 2019 wild
          fires destroyed billions of trees
          worldwide, even in Amazon and in Siberia. Forest monitoring can avoid disasters like that.
        </Teaser>
        <Teaser title='Agriculture' image="/images/agriculture.jpg" link="/agriculture">
          Due to climate change risk of flood and drought is increasing in Serbia. Natural disasters cause crop loss
          and financial losses. Yield in years without natural disasters should be higher to compensate losses in
          previous and coming years.
        </Teaser>
        <Teaser title='Our solutions' image="/images/solutions.jpg" link="/solutions">
          FACT offers all kinds of spatial analysis. Combining satellite and drone data FACT analyses the
          environment and gives to customers the information how to make the biggest profit on their land. Do
          you have a parcel?
        </Teaser>
      </div>
    </div>;
  }
}
