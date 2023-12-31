export const nodejs = `const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://blk-expense-app.com/api/v1/expenese',
    data: {
      Amount: '$99.99',
      Date: '06/06/2023',
      Description: 'Instacart'
    },
    headers: {
      'Authorization': 'Session_Token'
    }
  };

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`


export const python = `import requests

url = 'https://blk-expense-app.com/api/v1/expenese'
authorization = 'Session_Token'
Amount = 'First text'
Date = 'Second text'
Description = 'Third text'

headers = {
    'Authorization': authorization
}

payload = {
    'Amount': $99.99,
    'Date': 06/06/2023,
    'Description': Instacart
}

response = requests.post(url, headers=headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`

