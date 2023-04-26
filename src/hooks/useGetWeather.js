import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

export const useGetWeather = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [weather, setWeather] = useState([])

    const fetchWeatherData = async () => {
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
            )
            const data = await res.json()
            setWeather(data)
        } catch (e) {
            setError(e)
            console.log('could not fetch weather')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        ;(async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setError('permission to access location was denied')
                return
            }
            const {
                coords: { latitude: lat, longitude: lon }
            } = await Location.getCurrentPositionAsync({})
            setLongitude(lon)
            setLatitude(lat)
            await fetchWeatherData()
        })()
        setIsLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [longitude, latitude])

    return { error, isLoading, weather }
}
