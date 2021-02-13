import React from "react"
import "./StatusBar.css"
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
			<Container className="pt-2">
				<Row xs={2} md={4} lg={5} className="shadow">
					<Col>Humidity: {humidity}%</Col>
					<Col>Pressure: {air_pressure}mb</Col>
					<Col>Wind: {wind_speed.toFixed(2)}mph</Col>
					<Col>predictability: {predictability}%</Col>
					<Col>Visibility: {visibility.toFixed(2)}miles</Col>
				</Row>
			</Container>
		</div>
	)
}
