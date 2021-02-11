import logo from './images/logo.svg';
import './App.css';
import WeeklyForecast from './components/ProgressBar/forecast/WeeklyForecast';

import WeatherData from './containers/WeatherData/WeatherData';
function App() {
  return (
    <div className='App'>
      <WeatherData />
      <WeeklyForecast />
    </div>
  );
}

export default App;
