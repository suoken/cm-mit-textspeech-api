const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello THERE!!!!!!'));

let port = 1234;
app.listen(port, () => console.log('Server is on' + port));
