async function getWeather(
  fetchType: 'valid' | 'invalid',
  params?: { lat: number; long: number },
) {
  const invalidEnpoint =
    'https://api.open-meteo.com/v1/forecast?latitude=50.29&longitude=19.10¤t=temperature_2m,wind_speed_10m';
  const validEndpoint = `https://api.open-meteo.com/v1/forecast?latitude=${params?.lat || 50.29}&longitude=${params?.long || 19.1}&current=temperature_2m,wind_speed_10m`;

  try {
    const res = await fetch(
      fetchType === 'valid' ? validEndpoint : invalidEnpoint,
    );

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();

    console.log(`
Temperatura: ${data.current.temperature_2m}*C
Prędkość wiatru: ${data.current.wind_speed_10m} m/s
`);
  } catch (e: any) {
    console.log(`Pobieranie danych nie powiodło się. ${e.message}`);
  }
}

getWeather('valid', { lat: 12.11, long: 30.12 });
