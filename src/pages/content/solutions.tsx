import React from "react";
import {Content} from "./content";
import {Url} from "../../components/url";

export class Solutions extends Content {

  protected title = 'Our Solutions';

  protected image = '/images/solutions_full.jpg';

  protected content = <div className="px-2 mt-5">
    <p>FACT offers all kinds of spatial analysis. Combining satellite and drone data FACT analyses the
      environment and gives to customers the information how to make the biggest profit on their land. Do
      you have a parcel? Do you know what to plant on it? FACT considers all conditions and gives you advices
      based on complex analysis. It enables the best yield and the biggest profit. Or do you have fruit
      plantation and you want more tonnes per hectare/tree? FACT uses drone equipment to monitor your
      crop and gives you instruction how to use fertilizers and how to protect your trees.</p>
    <p>Are you decision maker in some municipality and you want to plant the trees? But you don’t know
      where and what species to use. FACT analyses the most suitable area for afforestation for specific tree
      species. Check the project Forest and Climate that FACT team did in 2019 (<Url
        external={true}>sumeiklima.org</Url>). You can find
      there the most suitable area for planting the black pine, sessile oak and breach in Serbia.</p>
    <p>How does FACT do spatial analysis?</p>
    <p>FACT uses high quality equipment to collect high resolution spatial data. Team of GIS analysts combines
      them with satellite, Earth observation and other open data and uses complex algorithms and
      geographical information system to find the answers about the suitability of environment for forestry or
      agricultural activities. In the other hand, vegetation is monitored by calculating the indices. Our cameras
      collect information about the light reflected by leaves. By analysing data about the reflection FACT
      recognises the trees that are dried or will get dry in a short period.</p>
  </div>;

}