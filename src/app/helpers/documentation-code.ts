export const nodejs = `const axios = require("axios");
const options = {
    method: 'POST',
    url: 'https://bmeditation.com/api/v1/bmeditation',
    params: {
      author: 'Author Name'
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`;

export const python = `import requests
url = 'https://bmeditation.com/api/v1/bmeditation''
api_key = 'YOUR_API_KEY'
author = 'Author Name'
headers = {
    'Authorization': api_key
}
payload = {
    'author': author,
}
response = requests.post(url, headers=headers, json=payload)
if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f'Request failed with status code {response.status_code}')`;
