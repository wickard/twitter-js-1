const express = require('express');
const app = express();
const chalk = require('chalk')

const logger = (req, res, next) => {
  console.log(chalk.red(req.method, req.url, res.statusCode));
  next();
};

// const checkSpecial
app.param('path', (req, res, next, path) => {
  req.path = path
  next()
})

app.get('/', (req, res, next) => {
  res.send('Hello!');
  next()
});

app.get('*', (req, res, next) => {
  if (req.path === '/special'){
    res.send('Welcome to the special place')
  }
  res.statusCode = 404
  res.send('Welcome to the pit of misery!')
  next()
})



app.use(logger);
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
