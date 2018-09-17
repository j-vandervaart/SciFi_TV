var mongoose = require('mongoose');

var ShowSchema = new mongoose.Schema({
name: {type:String},
desc: {type:String},
img: {type:String},
cast: {type:String},
episodes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Episode'}]
},
{ collection: 'shows' }
);

module.exports = mongoose.model('Show', ShowSchema);