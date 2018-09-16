const express = require('express');
const voice = require('./routes/voice.route');
var fs = require("fs");
var request = require("request");

const app = express();

app.get('/revSpeech', function (req, res) {
  console.log("WORKED! FAM LOL");
  var options = {
    method: 'POST',
    url: 'https://api.rev.ai/revspeech/v1beta/jobs',
    headers: { 'postman-token': '25a7b545-863d-3a7a-3fcf-a34e9ec23c8d',
       'cache-control': 'no-cache',
       authorization: 'Bearer 01imrH9aRwY_I8TqTzSJOjQHA4MqwsD4LrgzZK_b3USSMrhT3lumzv60Gfwp6niXZNbvDomlg0P064zLDgVO8jq-vwtK4',
       'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
     },
     media_url: "http://cdn.mos.musicradar.com/audio/samples/female-vocals-demo-loops/do%20you%20feel%20the%20same%20mid.mp3",
     metadata: "Sample META Text",
     callback_url: "textspeech-apis.azurewebsites.net/revTranscribed"
    };
    console.log("WORKED! FAM LOL2");
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log("lol",response, "OO::OOO",body);
  });
  console.log("WORKED! FAM LOL3");
  res.send('POST request to the homepage SUCCESS');
});

app.post('/revTranscribed', function(req, res) {
  console.log("STARTED");
  console.log(req);
  console.log(req.job);
  console.log("WORKED! FAM LOL34444444444555");
  let url = 'https://api.rev.ai/revspeech/v1beta/jobs/' + req.job.id;
  var options = {
    method: 'GET',
    url: url,
    headers: { 'postman-token': '25a7b545-863d-3a7a-3fcf-a34e9ec23c8d',
       'cache-control': 'no-cache',
       authorization: 'Bearer 01imrH9aRwY_I8TqTzSJOjQHA4MqwsD4LrgzZK_b3USSMrhT3lumzv60Gfwp6niXZNbvDomlg0P064zLDgVO8jq-vwtK4',
       'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
     }
    };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });
  console.log("WORKED! FAM LOL7777");
  res.send('200');
});

app.get('/yoyo', (req, res) => res.send('Hello YoYoDude'));

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api', voice);

var port = process.env.PORT || 1337;
app.listen(port, () => console.log('Server is on ' + port));
