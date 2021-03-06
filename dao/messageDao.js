// Author: sanghee park <novles@naver.com>
// Create Date: 2014.12.18
// 사용자 Service
var db = require('../lib/dbmanager.js');
var group = "message";

var MessageDao = function () {
};
MessageDao.prototype.getMessage =  function (data) {
    return db.query(group, "getMessage");
};
MessageDao.prototype.setMessage =  function (data) {
    return db.query(group, "setMessage", [data.text, data.visible, data.text, data.visible]);
};

module.exports = new MessageDao();