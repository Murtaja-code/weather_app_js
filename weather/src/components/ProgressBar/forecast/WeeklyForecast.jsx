import React from 'react';
import { Container, Table } from 'react-bootstrap';

function WeeklyForecast() {
  return (
    <div>
        <h1> A weekly Forecast</h1>
        <Container>
      <Table striped hover bordered responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Day</th>
            <th>Low</th>
            <th>High</th>
            <th>Wind</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Satrday</td>
            <td>20</td>
            <td>50</td>
            <td>4kp</td>
          </tr>
          <tr>
          <td>2</td>
            <td>Sunday</td>
            <td>10</td>
            <td>30</td>
            <td>20kp</td>
          </tr>
          <tr>
          <td>3</td>
            <td>Monday</td>
            <td>12</td>
            <td>30</td>
            <td>4kp</td>
          </tr>
        </tbody>
      </Table>
      </Container>
    </div>
  );
}

export default WeeklyForecast;
