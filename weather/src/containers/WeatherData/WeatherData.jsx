import React, { useEffect, useState } from "react"
import axios from "axios"
import CityInfo from "../../components/CityInfo/CityInfo"
import Spinner from "react-bootstrap/Spinner"
import StatusBar from "./../../components/StatusBar/StatusBar"
import WeeklyForecast from "../../components/forecast/WeeklyForecast"
import hr from "../../images/hr.jpg"
import c from "../../images/c.jpg"
import hc from "../../images/hc.jpg"
import s from "../../images/s.jpg"
import lc from "../../images/lc.jpg"
import sn from "../../images/sn.jpg"
import h from "../../images/h.jpg"
import t from "../../images/t.jpg"
import sl from "../../images/sl.jpg"
import lr from "../../images/lr.jpg"

export default function WeatherData() {
	const [currentWeth, setcurrentWeth] = useState()
	const [forcasttWeth, setForcasttWeth] = useState()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState()
	const [backgroundImage, setBackgroundImage] = useState()
	const weatherState = [c, h, hc, hr, lc, lr, s, sn, t, sl]
	const sectionStyle = {
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		backgroundImage: `url(${backgroundImage})`
	}
	useEffect(() => {
		function requestData() {
			try {
				axios
					.get(
						"https://tranquil-cove-12072.herokuapp.com/https://www.metaweather.com/api/location/2487956/"
					)
					.then((wethData) => {
						setcurrentWeth(wethData.data)
						setForcasttWeth(wethData.data)
						setLoading(false)
						for (let i = 0; i < 10; i++) {
							const value = String(weatherState[i]).includes(
								wethData.data.consolidated_weather[0].weather_state_abbr
							)
							if (value) {
								setBackgroundImage(weatherState[i])
							}
						}
					})
			} catch (err) {
				setError(err)
			}
		}
		requestData()
	}, [])

	if (loading) {
		return (
			<div>
				<p>{error ? error : ""}</p>
				<Spinner animation="border" variant="primary" />
			</div>
		)
	}
	return (
		<div style={sectionStyle}>
			{/* components come here */}
			<StatusBar currentWeth={currentWeth} />
			<CityInfo currentWeth={currentWeth} />
			<WeeklyForecast forecastWeth={forcasttWeth} />
		</div>
	)
}
