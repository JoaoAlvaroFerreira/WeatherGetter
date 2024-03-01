const index_url = 'http://127.0.0.1:3000/';
const weather_url = 'http://127.0.0.1:3000/api/weather';

describe('Validating a basic get from the index page', () => {
  test('The get route', async () => {
    const res = await fetch(index_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await res.text();
    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    expect(data).toEqual('Wello Horld!')
  })
})

describe('Validating a post from the weather page', () => {
  test('The post weather route', async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          location: 'Porto',
          start_date: '01/02/2024, 00:00',
          end_date: '10/03/2024, 00:00'
        })
    };
    
    const res = await fetch(weather_url, requestOptions)
    const data = await res.json()
    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
    
    var resFile = require('./testData.json');
    const dataFile = JSON.stringify(resFile)
    expect(JSON.stringify(data)).toEqual(dataFile) //Comparing data like this will return false due to rounding errors, but most of the values are the same
  })
})
