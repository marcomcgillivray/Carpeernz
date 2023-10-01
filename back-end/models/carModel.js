const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
    {
        year: {
            type: Number,
            trim: true
        },
        make: {
            type: String,
        },
        model: {
            type: String,
            trim: true
        },
        seats: {
            type: Number,
        },
        fuel: {
            type: String,
        },
        price: {
            type: Number,
        },
        owner: {
            type: String,
        },
        ownerStars: { type: Number, min: 1, max: 5 },
        city: {
            type: String,
        },
        imageCover: 
            {
            type: String,
            },
    }
)

const Car = mongoose.model('Car', carSchema);

module.exports = Car;