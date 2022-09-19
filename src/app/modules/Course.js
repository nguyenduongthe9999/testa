
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    data1:{type:String},
    data2:{type:String},
    data3:{type:String},
    data4:{type:String},
}
);

module.exports = mongoose.model('Course', Course);
