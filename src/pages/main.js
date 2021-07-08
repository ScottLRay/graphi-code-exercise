import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      details
      links {
        flickr_images
      }
    }
  }
`;
function Launches() {
  const { errors, loading, data } = useQuery(GET_LAUNCHES);

  const getRandomImg = (imgs) => imgs[Math.floor(Math.random() * imgs.length)];

  return errors
    ? "Error!"
    : loading
    ? "Loading..."
    : data.launchesPast.map(({ mission_name, details, links }) => (
        <div key={mission_name}>
          <h1>🛰 {mission_name}</h1>
          <p>{details}</p>
          <img src={getRandomImg(links.flickr_images)} width="200" />
        </div>
      ));
}

export default Launches;
