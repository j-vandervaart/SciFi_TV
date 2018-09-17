var mongoose = require('mongoose');

var EpisodeSchema = new mongoose.Schema({
eps_name: {type:String},
eps_number: {type:String},
synop: {type:String},
teaser: {type:String},
eps_img: {type:String}
},
{ collection: 'episodes' }
);

module.exports = mongoose.model('Episode', EpisodeSchema);