import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card}  from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Img1 from './logo192.png'
export default function App(props) {
  return (
    // <div>
    //     <h1>PROPERTIES</h1>
    //     <p>Hiiii {props.name}</p>
        
    // </div>
    <>
    <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src={Img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}
