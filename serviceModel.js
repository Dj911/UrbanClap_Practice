const mongoose = require('mongoose');
const validator = require('validator');
const salonForMen = require('./Service Sub Category/subServices');

const serviceSchema = new mongoose.Schema({
    mainService: {
        type: String,
        required: [true, 'Service Name is required']
    },
    picture: {
        type: String
    }
    // ,
    // subService: [
    //     {
    //         type: mongoose.Schema.ObjectId,
    //         ref: 'salonForMen'
    //     }
    // ]
}, { collection: 'Service' });

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;