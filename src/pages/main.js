import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Card from "../components/cards"

const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 12) {
      mission_name
      details
      id
      links {
        flickr_images
        article_link
        video_link
        mission_patch
      }
    }
  }
`;
function Launches() {
  const { errors, loading, data } = useQuery(GET_LAUNCHES);

  return( errors
    ? "Error!"
    : loading
    ? "Loading..."
    : data.launchesPast.map(({ id, mission_name, details, links }) => (
        <Card
         key={id}
         title={mission_name}
         details={(details === null ? <h5>coming soon</h5> : details )}
         image={(links.mission_patch === null ? links.flickr_images : links.mission_patch)}
         article={(links.article_link === null ? links.video_link : links.article_link )}
        />
      ))
  )
}

export default Launches;
