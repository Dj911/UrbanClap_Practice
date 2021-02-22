const mongoose = require('mongoose');
const validator = require('validator');

try {

    const salonForMenSchema = new mongoose.Schema({
        mainService: {
            type: mongoose.Schema.ObjectId,
            ref: 'Service'
        },
        subService: {
            name: {
                type: String,
                required: true,
                // unique: true
            },
            picture: {
                type: String,
                // For now not required
                // required: [true, 'Image of service is required']
            },
            price: {
                type: Number,
                required: [true, 'Price is required']

            },
            totalTime: {
                type: Number,
                required: [true, 'Total Time of Service is required']
            },
            details: {
                type: String,
                required: [true, 'Details of service is required']
            },
            ingredients: {
                type: String
            }
            // reviews:{

            // }
        }
    });

    const salonForMen = mongoose.model('SalonForMen', salonForMenSchema);

    module.exports = salonForMen;
} catch (err) {
    console.log(err);
}