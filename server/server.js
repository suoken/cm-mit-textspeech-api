const express = require('express');
const voice = require('./routes/voice.route');

const app = express();

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api', voice);

var port = process.env.PORT || 1337;
app.listen(port, () => console.log('Server is on ' + port));
