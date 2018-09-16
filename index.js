const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello THERE!!!!!!'));

var port = process.env.PORT || 1337;
app.listen(port, () => console.log('Server is on' + port));
