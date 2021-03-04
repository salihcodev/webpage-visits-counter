const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({ host: 'redis-server', port: 6379 });

// initial visits number.
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send(`The number of visits this page has is: ${visits}`);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(5000, () => {
  console.log(`Here we go on 4000`);
});
