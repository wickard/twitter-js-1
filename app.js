const express = require('express');
const app = express();

const logger = (req, res, next) => {
  console.log(req.method, req.url, res.statusCode);
  next();
};

// const checkSpecial

app.use(logger);

app.get('/', (req, res, next) => {
  res.send('Hello!');
  next();
});

app.listen(3000);


// [ '_readableState',
//   'readable',
//   'domain',
//   '_events',
//   '_eventsCount',
//   '_maxListeners',
//   'socket',
//   'connection',
//   'httpVersionMajor',
//   'httpVersionMinor',
//   'httpVersion',
//   'complete',
//   'headers',
//   'rawHeaders',
//   'trailers',
//   'rawTrailers',
//   'upgrade',
//   'url',
//   'method',
//   'statusCode',
//   'statusMessage',
//   'client',
//   '_consuming',
//   '_dumped',
//   'next',
//   'baseUrl',
//   'originalUrl',
//   '_parsedUrl',
//   'params',
//   'query',
//   'res' ]
