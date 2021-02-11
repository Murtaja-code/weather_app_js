import React, { useEffect, useState } from "react"
import CityInfo from "../../components/ProgressBar/CityInfo"
import axios from "axios"
import Spinner from "react-bootstrap/Spinner"
import StatusBar from "./../../components/StatusBar/StatusBar"

export default function WeatherData() {
	const [currentWeth, setcurrentWeth] = useState()
	const [forcasttWeth, setForcasttWeth] = useState()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState()

	useEffect(() => {
		function requestData() {
			try {
				axios
					.all([
						axios.get(
							"http://api.weatherstack.com/current?access_key=306bc2ca601a9eb579319d8b96507b0d&query=San Francisco"
						),
						axios.get(
							"https://tranquil-cove-12072.herokuapp.com/https://www.metaweather.com/api/location/2487956/"
						)
					])
					.then(([currentRes, foreCastRes]) => {
						setcurrentWeth(currentRes.data)
						setForcasttWeth(foreCastRes)
						setLoading(false)
					})
			} catch (err) {
				setError(err)
			}
		}
		requestData()
	}, [])
	console.log(currentWeth)

	if (loading) {
		return (
			<div>
				<p>{error ? error : ""}</p>
				<Spinner animation="border" variant="primary" />
			</div>
		)
	}
	return (
		<div>
			{/* components come here */}
			<StatusBar currentWeth={currentWeth} />
			<CityInfo currentWeth={currentWeth} />
		</div>
	)
}
