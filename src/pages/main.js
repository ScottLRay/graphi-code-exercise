import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Card from "../components/cards"

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

  // const getRandomImg = (imgs) => imgs[Math.floor(Math.random() * imgs.length)];

  return errors
    ? "Error!"
    : loading
    ? "Loading..."
    : data.launchesPast.map(({ mission_name, details, links }) => (
        <Card
         key={mission_name}
         title={mission_name}
         details={details}
         image={(links.flickr_images)}
        />
      ));
}

export default Launches;
