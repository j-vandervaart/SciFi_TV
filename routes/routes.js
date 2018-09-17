var express = require('express');
//Add path module
var path = require('path');

var router = express.Router();

var mongoose = require('mongoose');
var Show = require('../models/Show.js');
var News = require('../models/News.js');
var Episode = require('../models/Episode.js');

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

router.get('/home', function(req, res, next){
	Show.find().populate('episodes').exec(function(err, shows) {
		if(err) return next(err);
		res.json(shows);
	});
});

router.get('/featured', function(req, res, next){
	News.find(function(err, news) {
		if(err) return next(err);
		res.json(news);
	});
});

router.get('/featured/:id', function(req, res, next){
	News.findById(req.params.id, function(err, story) {
		if(err) return next(err);
		res.json(story);
	});
});


router.get('/eps/:id', function(req, res, next){
	Episode.findById(req.params.id, function(err, students) {
		if(err) return next(err);
		res.json(students);
	});
});

router.get('/shows/:id', function(req, res, next){
	Show.findById(req.params.id).populate('episodes').exec(function(err, show) {
		if(err) return next(err);
		res.json(show);
	});
});


module.exports = router;