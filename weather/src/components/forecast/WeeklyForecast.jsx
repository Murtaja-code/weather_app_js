import React from "react"
import { Container, Table } from "react-bootstrap"

function WeeklyForecast({ forecastWeather }) {
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
					{forecastWeather}
				</Table>
			</Container>
		</div>
	)
}

export default WeeklyForecast
