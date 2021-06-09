'use strict';
const http = require('http');
// 認証の実装 https://www.npmjs.com/package/http-auth
const auth = require('http-auth');
const router = require('./lib/router');
// 平文で記入したファイル users.htpasswd の情報を利用してBasic認証を行う実装
const basic = auth.basic({
  realm: 'Enter username and password.',
  file: './users.htpasswd'
});

const server = http.createServer(basic, (req, res) => {
  router.route(req, res);
}).on('error', (e) => {
  console.error('Server Error', e);
}).on('clientError', (e) => {
  console.error('Client Error', e);
});

const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});