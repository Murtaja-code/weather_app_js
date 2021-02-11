import React from 'react';
import { Container, Table } from 'react-bootstrap';

function ForecastTable({ forecastWeth }) {
  return (
    <div>
      <h3> A weekly Forecast</h3>
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
          {forecastWeth.consolidated_weather.map((weth, i) => (
            <tbody key={i}>
              <tr>
                <td>
                  <object
                    width='30'
                    height='30'
                    data={
                      'https://www.metaweather.com/static/img/weather/' +
                      weth.weather_state_abbr +
                      '.svg'
                    }
                    type='image/svg+xml'
                  ></object>
                </td>
                <td>{weth.applicable_date}</td>
                <td>{parseInt(weth.min_temp)}°C</td>
                <td>{parseInt(weth.max_temp)}°C</td>
                <td>{parseInt(weth.wind_speed)}kph</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
}

export default ForecastTable;
