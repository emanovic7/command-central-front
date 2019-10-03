import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import drive from '../../images/driveTraveling.gif';
import transit from '../../images/busTraveling.gif';
import bike from '../../images/bikeTraveling.gif';

const Routes = (props) => {
  console.log(props)
  return(
    <Container>
      <Row>
        <Col>
          <div>
            {props.route.map(route =>
              <li>{route.html_instructions}</li>
            )}
          </div>
        </Col>
        <Col>
          {props.mode === "transit" ? <Image src={transit} rounded alt={""} height={280} width={350} mode="fit" /> :
          props.mode === "drive" ? <Image src={drive} rounded alt={""} height={280} width={350} mode="fit" /> :
          props.mode === "bike" ? <Image src={bike} rounded alt={""} height={280} width={350} mode="fit" /> :
            null
          }

        </Col>
      </Row>
    </Container>
  )
}


export default Routes;
