module.exports = {
    mutipleMongooseToObject: function(mongoose) {
        return  mongoose.map(mongoose => mongoose.toObject())
    },
    mongooseToObject:function(mongodb) {
        return mongodb ? mongodb.toObject() : mongodb
    }
}
