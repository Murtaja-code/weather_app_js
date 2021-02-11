import React from "react"

export default function CityInfo(props) {
	const { consolidated_weather, title } = props.currentWeth
	return (
		<div>
			<h2 align="center" className="mt-4">
				{title}
			</h2>
			<h4>{consolidated_weather[0].applicable_date}</h4>
			<h3>Temperature {consolidated_weather[0].the_temp} &#xb0;C</h3>
		</div>
	)
}
