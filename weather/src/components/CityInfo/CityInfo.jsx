import React from "react"
import { Row, Col, Container } from "react-bootstrap"

export default function CityInfo(props) {
	const { consolidated_weather, title, sun_rise, sun_set } = props.currentWeth
	return (
		<div>
			<Container>
				<Row>
					<Col md={3}>
						<h2 className="mt-5">{title}</h2>
						<h3>
							{
								(consolidated_weather[0].applicable_date = new Date().toDateString())
							}
						</h3>
					</Col>

					<Col md={{ span: 4, offset: 5 }}>
						<h3 className="mt-5">
							{new Date(
								consolidated_weather[0].applicable_date
							).toLocaleTimeString()}
						</h3>
						<p>
							sunrise: {new Date(sun_rise).toLocaleTimeString()} <br />
							sunset: {new Date(sun_set).toLocaleTimeString()}
						</p>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row xs={2} md={3} lg={6}>
					<Col>
						<object
							className="mt-3"
							width="220"
							height="110"
							data={
								"https://www.metaweather.com/static/img/weather/" +
								consolidated_weather[0].weather_state_abbr +
								".svg"
							}
							type="image/svg+xml">
							somthing
						</object>
					</Col>
					<Col className="mt-5">
						<h4 className="textH4">Today</h4>
						<h3>{consolidated_weather[0].the_temp.toFixed(2)} &#xb0;C</h3>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
