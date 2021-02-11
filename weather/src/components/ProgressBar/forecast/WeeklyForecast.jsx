import React from 'react';
import ForecastTable from './ForecastTable';

function WeeklyForecast({forecastWeth}) {
  return (
   <ForecastTable forecastWeth={forecastWeth} />
  );
}

export default WeeklyForecast;
