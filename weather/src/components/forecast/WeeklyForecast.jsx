import React from "react"
import { Row, Container } from "react-bootstrap"

function WeeklyForecast({ forecastWeather }) {
	return (
		<div align="center">
			<Container>
				<Row xs={2} md={5} lg={6}>
					{forecastWeather}
				</Row>
			</Container>
		</div>
	)
}

export default WeeklyForecast
