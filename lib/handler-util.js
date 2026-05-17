'use strict';
const pug = require('pug');

function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ログアウトしました');
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ページがみつかりません');
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end(pug.renderFile('./views/404.pug'));
}

module.exports = {
  handleLogout,
  handleNotFound,
  handleBadRequest,
};