import React from 'react';
import { Form, Row, Col, Button, Container, Spinner } from 'react-bootstrap';

export default function CityInfo(props) {
	const { consolidated_weather, title } = props.currentWeth;
	return (
		<div>
			<Container>
				<Row>
					<Col md={3}>
						<h2 className="mt-5">{title}</h2>
						<h3>
							{
								(consolidated_weather[0].applicable_date = new Date().toDateString())
							}{' '}
						</h3>
					</Col>
					<Col md={{ span: 4, offset: 5 }}>
						{' '}
						<h3 className="mt-5">
							{
								(consolidated_weather[0].applicable_date = new Date().toTimeString())
							}{' '}
						</h3>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row xs={2} md={3} lg={6}>
					<Col>
						<object
							className="mt-3"
							width="200"
							height="100"
							data={
								'https://www.metaweather.com/static/img/weather/' +
								consolidated_weather[0].weather_state_abbr +
								'.svg'
							}
							type="image/svg+xml"
						>
							somthing
						</object>
					</Col>{' '}
					<Col className="mt-4">
						{' '}
						<h4 clasName="textH4">Today</h4>
						<h3>{consolidated_weather[0].the_temp.toFixed(2)} &#xb0;C</h3>{' '}
					</Col>
				</Row>
			</Container>
		</div>
	);
}
