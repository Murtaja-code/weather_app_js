import React from 'react';
import ForecastTable from '../../ForecastTable';

function WeeklyForecast({api}) {
  return (
   <ForecastTable api={api} />
  );
}

export default WeeklyForecast;
