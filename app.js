const express = require('express');

const User = require('./userModel');
const Service = require('./serviceModel');
const subServices = require('./Service Sub Category/subServices');

const app = express();
const router = express.Router();

app.use(express.json());

app.post('/enter', async (req, res, next) => {
    try {
        const data = await User.create(req.body);
        console.log(data);
        res.status(200).json({
            status: "Sucess",
            data: {
                data
            }
        })
        next();
    } catch (err) {
        console.log(err.message);
    }
})

/* router.route('/services/:category')
    .post(async (req, res, next) => {
        try {
            console.log('HERE: ', req.params);
            // const data = await subServices.create(req.body);
            // console.log(data);
        } catch (err) {
            console.log(err.message);
        }
    }) */

/* app.post('/services/:category', async (req, res, next) => {
    try {
        const collection = req.params;
        const data = await collection.create(req.body);
        console.log(data);
    } catch (err) {
        console.log(err.message);
    }
}); */

//SUBSERVICES
app.post('/services/subServices/create/:id', async (req, res, next) => {
    try {
        const data =
            await subServices.findByIdAndUpdate(req.params.id, { "$push": { "children": req.body } });
        console.log('DATA: ', data);
        // await subServices.save();
        res.status(200).json({
            status: "Sucess",
            data: {
                data
            }
        })
        next();
    } catch (err) {
        console.log(err.message);
    }
});

app.get('/services/subServices/:id', async (req, res, next) => {
    try {
        const data =
            await subServices.findById(req.params.id).select('-__v -_id -children._id');
        console.log('DATA: ', data);
        res.status(200).json({
            status: "Sucess",
            data: {
                data
            }
        })
        next();
    } catch (err) {
        console.log(err.message);
    }
});


// MAIN SERVICES Routes
app.get('/services/:id', async (req, res, next) => {
    try {
        // const subService = await subServices.findById(req.params.id)
        // const data = await Service.create(req.body)
        const ne = await Service.find().populate('subService');
        console.log(ne);
        next()
    } catch (err) {

    }
})


//USERS ROUTES
app.get('/users', async (req, res, next) => {
    try {
        const data = await User.find({}).select('-password')
        console.log(data);
        next();
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = app;