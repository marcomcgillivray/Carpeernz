const express = require('express');
const carController = require('../controllers/carController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('Destination:', file);
      cb(null, './images')
    },
    filename: function (req, file, cb) {
        console.log('Filename:', file);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage });


const router = express.Router();

router.route('/')
.get(carController.getCars)
.post(carController.createCar);

router.route('/byCity/:city')
.get(carController.getCarByCity);

router.route('/:id')
.get(carController.getCar)
.delete(carController.deleteCar);

router.route('/uploadImage/:id')
.patch(carController.uploadImage)

module.exports = router;