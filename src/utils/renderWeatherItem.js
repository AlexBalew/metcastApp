import React from 'react'
import { WeatherItem } from '../components'

export const renderWeatherItem = ({ item }) => (
    <WeatherItem
        condition={item.weather[0]}
        dtText={item.dt_txt}
        maxTemp={item.main.temp_max}
        minTemp={item.main.temp_min}
    />
)