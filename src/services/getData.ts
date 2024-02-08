export const getData = async <T>(): Promise<T> => {
  const response = await fetch(`${process.env.API_URL}`, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': `${process.env.API_KEY}`
  }});
  if (!response.ok) {
    throw new Error('Failed to fetch data...');
  }

  return response.json()
}
