import React from 'react';
import { Container, Table } from 'react-bootstrap';

function ForecastTable({api}) {
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
        {api.data.consolidated_weather.map((weth,i) => (
            <tbody key={i}>
            <tr>
                {/* icons should be here */}
              <td>#</td>
              <td>{weth.applicable_date}</td>
              <td>{parseInt(weth.min_temp)}°C</td>
              <td>{parseInt(weth.max_temp)}°C</td>
              <td>{parseInt(weth.wind_speed)}kph</td>
            </tr>
           
          </tbody>
      ))
        
}
      </Table>
      </Container>
    </div>
  );
}

export default ForecastTable
;