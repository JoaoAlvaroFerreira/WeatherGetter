import { fetchWeatherApi } from 'openmeteo';
import { Location } from './utils';
import fetch from 'node-fetch';
const url = "https://api.open-meteo.com/v1/forecast";
const api_key = '65dec84138b6d867281665ozh9364a4';

export async function getWeather(lat: number, long: number, start_date: string, end_date: string, measure: string) {
	const params = {
		"latitude": lat,
		"longitude": long,
		"daily": measure,
		"start_date": start_date,
		"end_date": end_date
	};
	const responses = await fetchWeatherApi(url, params);
	
	// Helper function to form time ranges
	const range = (start: number, stop: number, step: number) =>
		Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

	const response = responses[0];
	const utcOffsetSeconds = response.utcOffsetSeconds();
	const daily = response.daily()!;
	const weatherData = {
	
		daily: {
			time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
				(t) => new Date((t + utcOffsetSeconds) * 1000)
			),
			temperature: daily.variables(0)!.valuesArray()!,
		},
	};
	return weatherData
}

export async function getLocation(location: string): Promise<Location[]> {
	
	try {
		const response = await fetch(`https://geocode.maps.co/search?q=${location}&api_key=${api_key}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}

		const result = (await response.json()) as Location[];

		return result;
	} catch (error) {
		if (error instanceof Error) {
			console.log('error message: ', error.message);
			return Promise.reject(new Error(error.message));
		} else {
			console.log('unexpected error: ', error);
			return Promise.reject(error);
		}
	}
}

