import React from 'react';
import { Row, Container, Table } from 'react-bootstrap';

function WeeklyForecast({ forecastWeather }) {
	return (
		<div align="center">
			<Container>
				<Row xs={2} md={5} lg={6}>
					{forecastWeather}
				</Row>
			</Container>
			{/* <Container>
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
			</Container> */}
		</div>
	);
}

export default WeeklyForecast;
