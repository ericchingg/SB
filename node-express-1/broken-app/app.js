const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json());

app.post('/', async (req, res, next) => {
  try {
    let results = await Promise.all(req.body.developers.map(async d => {
      const response = await axios.get(`https://api.github.com/users/${d}`);
      return response.data;
    }));
      
    let out = results.map(r => ({ name: r.name, bio: r.bio }));

    return res.send(out);
  } catch (err) {
    next(err);
  }
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000')
});
