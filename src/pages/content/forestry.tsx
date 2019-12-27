import React from "react";
import {Content} from "./content";
import {Url} from "../../components/url";

export class Forestry extends Content {

  protected title = 'Forestry';

  protected image = '/images/forestry_full.jpg';

  protected content = <div className="px-2 mt-5">
    <p>Natural, semi-natural and planted forests are more vulnerable due to climate change. In the summer 2019 wild
      fires destroyed billions of trees
      worldwide, even in Amazon and in Siberia. Forest monitoring can avoid disasters like that.</p>
    <p>Earth observation, satellite and drone data can be used for searching the most suitable area for afforestation.
      Appropriate tree species for planting
      can be identified by comparative geospatial analysis. Afforestation can mitigate climate change only if the
      appropriate tree species are chosen. New
      forests, planted correctly, are real carbon storages.</p>
    <p>Data collected by multispectral camera and sensors can be used to identify the dry vegetation in the forest,
      where the risk of forest fire is higher.
      Information about the most vulnerable part of the forest can support decision makers to organise prevention
      activities. On the other hand, forest
      health can be monitored using the same data. Dry vegetation can be result of pests activities.</p>
    <p>Our team developed the portal with information about the suitability for afforestation in Serbia: <Url
      external={true}>https://sumeiklima.org/</Url></p>
    <p>More about forest health and remote sensing:</p>
    <Url
      external={true}>https://www.researchgate.net/publication/326823804_UAV_Multispectral_Imagery_Can_Complement_Satellite_Data_for_Monitoring_Forest_Health</Url>
  </div>;

}