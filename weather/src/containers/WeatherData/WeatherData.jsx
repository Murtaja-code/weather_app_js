import React, { useEffect, useState } from 'react';
import CityInfo from '../../components/CityInfo/CityInfo';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import StatusBar from './../../components/StatusBar/StatusBar';
import WeeklyForecast from '../../components/forecast/WeeklyForecast';

export default function WeatherData() {
  const [currentWeth, setcurrentWeth] = useState();
  const [forecastWeth, setforecastWeth] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    function requestData() {
      try {
        axios
          .get(
            'https://tranquil-cove-12072.herokuapp.com/https://www.metaweather.com/api/location/2487956/'
          )
          .then((wethData) => {
            setcurrentWeth(wethData.data);
            setforecastWeth(wethData.data);
            setLoading(false);
          });
      } catch (err) {
        setError(err);
      }
    }
    requestData();
  }, []);
  console.log(forecastWeth);

  if (loading) {
    return (
      <div>
        <p>{error ? error : ''}</p>
        <Spinner animation='border' variant='primary' />
      </div>
    );
  }

  const forecastData = forecastWeth.consolidated_weather.map((weather, i) => (
    <tbody key={i}>
      <tr>
        <td>
          <object
            width='30'
            height='30'
            data={
              'https://www.metaweather.com/static/img/weather/' +
              weather.weather_state_abbr +
              '.svg'
            }
            type='image/svg+xml'
          ></object>
        </td>
        <td>{weather.applicable_date}</td>
        <td>{parseInt(weather.min_temp)}°C</td>
        <td>{parseInt(weather.max_temp)}°C</td>
        <td>{parseInt(weather.wind_speed)}kph</td>
      </tr>
    </tbody>
  ));
  return (
    <div>
      {/* components come here */}
      <StatusBar currentWeth={currentWeth} />
      <CityInfo currentWeth={currentWeth} />
      <WeeklyForecast forecastWeather={forecastData} />
    </div>
  );
}
