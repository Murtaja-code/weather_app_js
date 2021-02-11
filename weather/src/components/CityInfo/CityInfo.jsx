import React from "react"

export default function CityInfo(props) {
	const { consolidated_weather, title } = props.currentWeth
	return (
		<div>
			<h2 align="center" className="mt-4">
				{title}
			</h2>
			<h4>{consolidated_weather[0].applicable_date}</h4>
			<h3>Temperature {consolidated_weather[0].the_temp.toFixed(2)} &#xb0;C</h3>
			<object
				width="400"
				height="180"
				data={
					"https://www.metaweather.com/static/img/weather/" +
					consolidated_weather[0].weather_state_abbr +
					".svg"
				}
				type="image/svg+xml"></object>
		</div>
	)
}
