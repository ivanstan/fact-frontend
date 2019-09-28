import React from "react";
import {Content} from "./content";
import {Url} from "../../components/url";

export class Agriculture extends Content {

  protected content = <div>
    <h1>Agriculture</h1>
    <p>
      Due to climate change risk of flood and drought is increasing in Serbia. Natural disasters cause crop loss
      and financial losses. Yield in years without natural disasters should be higher to compensate losses in
      previous and coming years. Boosting the yield can be achieved by rapid intervention. Two main questions
      are:
    </p>
    <p>1. What species is the most lucrative for the owner’s estate?</p>
    <p>
      The assessment of the natural conditions of the monitored land leads to an apropriate choice of species.
      The soil characteristics, climate conditions, latitude, slope, aspect, disaster risk and other characteristics
      should be considered before owner makes a decision which species to plant. New technology, Earth
      observation, satellite and drone data are used to support the research and the assessment.
    </p>
    <p>2. How to increase the yield and profit?</p>
    <p>
      The drones and multispectral cameras collect data about vegetation conditions. They recognise blue,
      green and red spectrum, but also red edge and infrared spectrum. Combining spectrums and calculating
      indices allow identification of any change on vegetation even before human eye can recognise it. It
      means more time for action, better pest detection and prevention and more successful crop management.
      It minimizes crop loss, boost yield with rapid intervention and minimizes usage of pesticides.
    </p>
    <p>More about:</p>
    <ul>
      <li>
        <Url external={true}>https://www.sciencedirect.com/science/article/abs/pii/S1360138518302693</Url>
      </li>
      <li>
        <Url
          external={true}>https://earthobservatory.nasa.gov/features/MeasuringVegetation/measuring_vegetation_2.php</Url>
      </li>
      <li>
        <Url external={true}>https://www.researchgate.net/publication/323723081_Vegetation_Indices_Combining_the_Red_and_Red-
          Edge_Spectral_Information_for_Leaf_Area_Index_Retrieval</Url>
      </li>
    </ul>
  </div>;

}