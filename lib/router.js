'use strict';
const postsHandler = require('./posts-handler');
const util = require('./handler-util');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      console.info('aaaaa');
      postsHandler.handle(req, res);
      break;
    case '/logout':
      util.handleLogout(req, res);
      break;
    default:
      console.info('aaaaaa');
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route
};