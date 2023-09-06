const mongoose = require('mongoose')
const schema = mongoose.Schema;

//Shema columns and rows
const CSchema = new Schema( {
    city:{
        type:string,
        required:[true, 'City-state name is required']
    },
    census: {
        type:Number,
        required:[true, 'census required']
    }
});

const Census = mongoose.model('census', CSchema, 'census');

module.exports = Census;