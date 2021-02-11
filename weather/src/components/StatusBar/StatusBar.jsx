import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default function StatusBar(props) {
  const {
    current: { humidity, pressure, wind_degree, uv_index, visibility },
  } = props.currentWeth;
  return (
    <div>
      <Container>
        <Row xs={2} md={4} lg={5}>
          <Col>Humidity: {humidity}</Col>
          <Col>Pressure: {pressure}</Col>
          <Col>Wind: {wind_degree}</Col>
          <Col>uv_index: {uv_index}</Col>
          <Col>Visibility: {visibility}</Col>
        </Row>
      </Container>
    </div>
  );
}
