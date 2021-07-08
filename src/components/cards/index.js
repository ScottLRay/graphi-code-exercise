import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function cards({ details, image, title }) {
  return (
    <>
      <div className="jumbotron card-container">
        <Row>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{details}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default cards;

// <div key={mission_name}>
//           <h1>🛰 {mission_name}</h1>
//           <p>{details}</p>
//           <img src={(links.flickr_images)} width="200" />
//         </div>
