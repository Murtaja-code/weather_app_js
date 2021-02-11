import React from "react"
import { Row, Col, Container } from "react-bootstrap"

export default function StatusBar(props) {
	const {
		humidity,
		air_pressure,
		wind_speed,
		predictability,
		visibility
	} = props.currentWeth.consolidated_weather[0]
	return (
		<div>
			<Container>
				<Row xs={2} md={4} lg={5}>
					<Col>Humidity: {humidity}</Col>
					<Col>Pressure: {air_pressure}</Col>
					<Col>Wind: {wind_speed.toFixed(2)}</Col>
					<Col>predictability: {predictability}</Col>
					<Col>Visibility: {visibility.toFixed(2)}</Col>
				</Row>
			</Container>
		</div>
	)
}
