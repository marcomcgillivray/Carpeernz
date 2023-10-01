const Car = require('../models/carModel');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Set the destination folder for uploaded files (../images)
      cb(null, path.join(__dirname, '..', 'images'));
    },
    filename: function (req, file, cb) {
      // Set the file name to a unique value (e.g., timestamp + original name)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage });
  
  // Middleware to handle image uploads
  exports.uploadImage = async (req, res, next) => {
    const uploadMiddleware = upload.single('imageCover'); // Ensure this matches your HTML form field name
  
    try {
      uploadMiddleware(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ error: 'Image upload failed', details: err.message });
        }

        const trimFilePath = (el) => {
            const imagePath = el.substring(el.indexOf('images/') + 7); // +7 to remove 'images/'
            return imagePath;
        }
  

        try {
          const updatedCar = await Car.findByIdAndUpdate(
            req.params.id,
            { imageCover: trimFilePath(req.file.path) }, 
            { new: true, runValidators: true }
          );
  
          res.status(200).json({
            car: updatedCar,
            message: 'Image uploaded successfully',
            imageCover: req.file.path,
          });
        } catch (error) {
          console.error('Error updating Car:', error);
          res.status(400).json({ error: 'Car update failed', details: error.message });
        }
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(400).json({ error: 'Image upload failed', details: error.message });
    }
  };
  
exports.getCars = async (req, res, next) => {
    const cars = await Car.find();

    res.status(200).json({
        status: 'success',
        results: cars.length,
        data: {
            cars
        }
    });
}

exports.getCar = async(req, res, next) => {
  const car = await Car.findById(req.params.id);

  if (!car) {
      return next('No cars found with that ID', 404);
  }

  res.status(200).json({
      status: 'success',
      car
  });
};


exports.createCar = async(req, res, next) => {
    const car = await Car.create(req.body);

    res.status(201).json({
        status: 'success',
        car
    });

};

exports.getCarByCity = async(req, res, next) => {
  const city = await req.params.city;

  try {
    const car = await Car.find({ city });
    res.status(200).json({
      status: 'success',
      results: car.length,
      data: {
          car
      }
  });
  } catch (error) {
    console.error('Error querying cars:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.deleteCar = async(req, res, next) => {
    const car = await Car.findByIdAndDelete(req.params.id);

    if(!car) {
        return next('No Car found', 404);
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
};

