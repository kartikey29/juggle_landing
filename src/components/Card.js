import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import classes from "./Card.module.css";
import photo from "../images/notification.png";
const CardGrp = () => {
  return (
    <div className={classes.container}>
      <Row xs={1} s={1} md={1} lg={2} className={classes.row}>
        <Col>
          <Card className={classes.card}>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
              <Card.Title className={classes.title}>Card title</Card.Title>
              <Card.Text className={classes.text}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer></Card.Footer> */}
          </Card>
        </Col>
        <Col>
          <Card className={classes.card}>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
              <Card.Title className={classes.title}>Card title</Card.Title>
              <Card.Text className={classes.text}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer></Card.Footer> */}
          </Card>
        </Col>
        <Col>
          <Card className={classes.card}>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
              <Card.Title className={classes.title}>Card title</Card.Title>
              <Card.Text className={classes.text}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer></Card.Footer> */}
          </Card>
        </Col>
        <Col>
          <Card className={classes.card}>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
              <Card.Title className={classes.title}>Card title</Card.Title>
              <Card.Text className={classes.text}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            {/* <Card.Footer></Card.Footer> */}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardGrp;
