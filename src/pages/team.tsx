import React from 'react';
import {Member} from "../components/member";
import {PageTitle} from "../components/page-title";

export class Team extends React.Component<any, any> {

  public render() {
    return <div className="mb-5">
      <PageTitle>Team</PageTitle>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto">
            <Member name={'Tijana Lezaic'} image={'/images/team/tijana-lezaic.jpg'}>
              Tijana Lezaic is a PhD student of Geosciences and student teaching assistant of the Faculty of Geography –
              University of Belgrade. Her research is about geospatial analysis, geographical information systems,
              forest protection and climate change. She has experience as a team leader in several projects of Centar
              for development of non formal education (CD4E).
            </Member>
            <Member name={'Nikola Mladenovic'} image={'/images/team/nikola-mladenovic.jpg'}>
              Nikola Mladenovic is a member of Center of development for non formal education, deals with geographic
              information system and remote sensing. He graduated from Faculty of Geography at the University of
              Belgrade, study programme Geospatial and Environmental Science. Nikola gained a title of Master of Science
              at Faculty of Agriculture - University of Belgrade, study programme Environmental protection in
              agriculture.
            </Member>
            <Member name={'Marko Pajovic'} image={'/images/team/marko-pajovic.jpg'}>
              Marko Pajovic is a freelance researcher with a focus on international relations, EU, and industrial
              policies. Additionally, he is a business developer for a gaming company "Demagog Studio" and a private
              company "Villa PM". He graduated at the Faculty of Law, University of Belgrade.
            </Member>
            <Member name={'Ivan Stanojevic'} image={'/images/team/ivan-stanojevic.jpg'}>
              Ivan Stanojevic is a software engineer working for Byteout Software. There he has gathered a team of
              enthusiasts in order to organize NASA Space Apps Challenge in Serbia. He is also taking a role of the
              Space Apps lead for Belgrade. He holds a degree in software engineering from Singidunum University in
              Belgrade.
            </Member>
          </div>
        </div>
      </div>
    </div>
  }
}
