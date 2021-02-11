import React from "react"

export default function CityInfo(props) {
	const {
		current: { feelslike, cloudcover, weather_icons },
		location: { name, localtime }
	} = props.currentWeth
	return (
		<div>
			<h2 align="center"> {name}</h2>
			<h4>{localtime}</h4>
			<h3>Overcast {cloudcover} &#xb0;C</h3>
			<h3>feelslike {feelslike} &#xb0;C</h3>
			<img src={weather_icons} alt={weather_icons} />
		</div>
	)
}
