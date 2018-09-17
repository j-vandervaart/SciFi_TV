var mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
header: {type:String},
show_name: {type:String},
teaser: {type:String},
story: [{type:String}],
author: {type:String},
img: {type:String},
class: {type:String}
},
{ collection: 'news' }
);

module.exports = mongoose.model('News', NewsSchema);