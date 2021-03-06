var express = require('express');
var debug = require('debug')('vacationRouter');
var router = express.Router();
var Vacation = require('../service/Vacation.js');
var sessionManager = require('../lib/sessionManager');

router.route('/')
.get(function(req, res, next){
	Vacation.getVacation(req.query).then(function(result) {
		return res.send(result);
	}).catch(function(err) {
		next(err);
	});
	
}).post(function(req, res, next){
	var session = sessionManager.get(req.cookies.saram);
	if (session.user.admin == 1) {	// admin 일 경우만 생성 
		Vacation.setVacation(req.body).then(function(result) {
			return res.send(result);
		}).catch(function(err) {
			next(err);
		});
	} else {
		return res.send({error: "관리자 등급만 생성이 가능합니다."});
	}
	
});

router.route('/list')
.get(function(req, res, next){
	Vacation.getVacationById(req.query).then(function(result) {
		return res.send(result);
	}).catch(function(err) {
		next(err);
	});
	
});

router.route('/:id')
.get(function(req, res, next){	
	Vacation.getVacationById(req.query).then(function(result) {
		return res.send(result);
	}).catch(function(err) {
		next(err);
	});
	
}).post(function(req, res, next){
}).put(function(req, res, next){
	var session = sessionManager.get(req.cookies.saram);
	if (session.user.admin == 1) {
		Vacation.updateVacation(req.body).then(function(result) {
			return res.send(result);
		}).catch(function(err) {
			next(err);
		});
	} else {
		return res.send({"error": "관리자 등급만 수정이 가능합니다."});
	}
	
});

module.exports = router;
