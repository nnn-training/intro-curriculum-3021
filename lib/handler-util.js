'use strict';

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

/**
 *パスワードが違う時に返す関数？？ 
 * @param {obj} req 
 * @param {obj} res 
 */
function handleBadRequest(req,res){
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('未対応のメソッドです')
}

module.exports = {
  handleLogout,
  handleNotFound,
  handleBadRequest
};
