const fetch = require('node-fetch');
const express = require('express');

const apiEndpointA = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=';
const apiEndpointB = '&inputtype=textquery&fields=formatted_address,name&key=';
const apiKey = 'AIzaSyDdbgPgX_VHFdVGbmj4hUa3NWTI2ls46EQ';

const router = express.Router();

router.get('/:prediction', async (req, res) => {
  console.log(req.params.prediction);
  const prediction = await fetch(apiEndpointA + req.params.prediction + apiEndpointB + apiKey)
    .then(response => response.json())
    .then(data => data)
    .catch(Promise.reject);

  console.log(prediction.status);
  res.send(prediction);
});

module.exports = router;