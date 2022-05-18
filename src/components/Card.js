import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import classes from "./Card.module.css";
import notificationPhoto from "../images/notification.svg";
import tagPhoto from "../images/tag-solid.svg";
import barcodePhoto from "../images/barcode.svg";
const cardData = [
  {
    scr: notificationPhoto,
    title: "Get Notification",
    text: "About personailsed deals and offers from your favourite brands and stores",
    cardStyle: { backgroundColor: "#2d9eea" },
  },
  {
    scr: tagPhoto,
    title: "Deals and Offers",
    style: { width: "80px", margin: "0 auto" },
    text: "Never miss a deal again! Just open our app and know the best OFFERS available",
    cardStyle: { backgroundColor: "#E78F4C" },
  },
  {
    scr: barcodePhoto,
    title: "Scan & Go!",
    style: { width: "80px", margin: "0 auto" },
    text: "Skip the long queue at the checkout. Just GRAB the item.Scan the barcode PAY and GO",
    cardStyle: { backgroundColor: "#16B464" },
  },
];

const CardGrp = () => {
  const dataMapping = (item, index) => {
    return (
      <Col lg={4} md={6}>
        <Card className={classes.card} key={index} style={item.cardStyle}>
          <Card.Img variant="top" src={item.scr} style={item.style} />
          <Card.Body>
            <Card.Title className={classes.title}>{item.title}</Card.Title>
            <Card.Text className={classes.text}>{item.text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <div className={classes.container}>
      <Row xs={1} s={1} md={1} lg={2} className={classes.row}>
        {cardData.map(dataMapping)}
      </Row>
    </div>
  );
};

export default CardGrp;

{
  /* <Card className={classes.card}>
<Card.Img variant="top" src={photo} />
<Card.Body>
  <Card.Title className={classes.title}>Card title</Card.Title>
  <Card.Text className={classes.text}>
    This is a wider card with supporting text below as a natural
    lead-in to additional content. This content is a little bit
    longer.
  </Card.Text>
</Card.Body>
{/* <Card.Footer></Card.Footer> */
}
// </Card>
// </Col>
// <Col>
// <Card className={classes.card}>
// <Card.Img variant="top" src={photo} />
// <Card.Body>
//   <Card.Title className={classes.title}>Card title</Card.Title>
//   <Card.Text className={classes.text}>
//     This is a wider card with supporting text below as a natural
//     lead-in to additional content. This content is a little bit
//     longer.
//   </Card.Text>
// </Card.Body>
// {/* <Card.Footer></Card.Footer> */}
// </Card>
// </Col>
// <Col>
// <Card className={classes.card}>
// <Card.Img variant="top" src={photo} />
// <Card.Body>
//   <Card.Title className={classes.title}>Card title</Card.Title>
//   <Card.Text className={classes.text}>
//     This is a wider card with supporting text below as a natural
//     lead-in to additional content. This content is a little bit
//     longer.
//   </Card.Text>
// </Card.Body>
// {/* <Card.Footer></Card.Footer> */}
// </Card>
// </Col>
// <Col>
// <Card className={classes.card}>
// <Card.Img variant="top" src={photo} />
// <Card.Body>
//   <Card.Title className={classes.title}>Card title</Card.Title>
//   <Card.Text className={classes.text}>
//     This is a wider card with supporting text below as a natural
//     lead-in to additional content. This content is a little bit
//     longer.
//   </Card.Text>
// </Card.Body>
// {/* <Card.Footer></Card.Footer> */}
// </Card> */}
