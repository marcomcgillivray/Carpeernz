import {useState} from 'react';
import { Link } from 'react-router-dom';

const ListCar = () => {
    const [start, setStart] = useState(false);
    const [vehicleId, setVehicleId] = useState(null);
    const [personalSubmitted, setPersonalSubmitted] = useState(false);
    const [carSubmitted, setCarSubmitted] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageSubmitted, setImageSubmitted] = useState(false);
    const [carData, setCarData] = useState({
        owner: '',
        year: null,
        make: '',
        model: '',
        seats: '',
        fuel: '',
        price: null,
        city: '',
      });

    const startHandler = e => {
        e.preventDefault();
        setStart(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData({ ...carData, [name]: value });
      };



    const handlePersonalSubmit = e => {
        e.preventDefault();
        setPersonalSubmitted(true);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch('http://127.0.0.1:3001/api/v1/cars', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(carData),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response data as needed
            console.log(data);
            setCarSubmitted(true);
            setVehicleId(data.car._id);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

      const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
      };
    
      const handleImageUpload = async () => {
        try {
          const formData = new FormData();
          formData.append('imageCover', selectedImage);
    
          await fetch(`http://127.0.0.1:3001/api/v1/cars/uploadImage/${vehicleId}`, {
            method: 'PATCH',
            body: formData,
          });
    
          alert('Image uploaded successfully');
          setImageSubmitted(true);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      };
    

    return (
        <section id='list-car'>
            <div className="container">
                {!start && <div className='pre-start'>
                    <h2>
                        Lend Your Car
                    </h2>
                    <p>
                        Let your car work for you! Lend your car to fellow kiwis and make $$$. 
                    </p>
                    <p>
                    Get Started by listing your car on our site here
                    </p>
                    <button type='submit' className="btn" onClick={startHandler}>
                        Get Started
                    </button>
                </div>}

                

                {(start && !personalSubmitted) && <div className="input">
                    <h2>
                        Let's Begin! Please Enter Some Details About You
                    </h2>
                    <div className="input-group">

                    <div className='input'>
                        <label htmlFor="Your Name">
                            Your Name
                        </label>
                        
                        <input type='text'
                        name='owner'
                        value={carData.owner}
                        onChange={handleChange}>
                        </input>
                        </div>

                        <div className='input'>
                        <label htmlFor="Your Email Address">
                            Your Email Address
                        </label>
                        <input type='text'>

                        </input>
                        </div>

                        <div className='input'>
                        <label htmlFor="Your Location">
                            Your Location
                        </label>
                        <select onChange={handleChange} value={carData.city} name='city'>
                            <option value="" disabled>Select a City</option>
                            <option value="Auckland">
                                Auckland
                            </option>
                            <option value="Wellington">
                                    Wellington
                                </option>
                                <option value="Christchurch">
                                    Christchurch
                                </option>
                                <option value="Queenstown">
                                    Queenstown
                                </option>

                        </select>
                        </div>
                        </div>

                        <button type='submit' className='btn' onClick={handlePersonalSubmit}>
                            Next
                        </button>
                    </div>}

                    {(personalSubmitted && !carSubmitted) &&
                    <div className='vehicle'>
                        <h3>
                            Thanks! Now tell us about the vehicle you want to lend
                        </h3>
                        <div className='input-group'>
                    <div className="input">
                        
                        <label htmlFor="Vehicle Make">
                            Vehicle Make
                        </label>
                        <input type='text' onChange={handleChange} value={carData.make} name='make'>

                        </input>
                    </div>

                    <div className="input">
                        <label htmlFor="Vehicle Model" >
                            Vehicle Model
                        </label>
                        <input type='text' onChange={handleChange} value={carData.model} name='model'>
                            
                            </input>
                    </div>

                    <div className="input">
                        <label htmlFor="Vehicle Year" >
                            Vehicle Year
                        </label>
                        <input type='number' onChange={handleChange} value={carData.year} name='year'>
                            
                        </input>
                    </div>

                    <div className="input">
                        <label htmlFor="Vehicle Seats" >
                            How Many Seats?
                        </label>
                        <input type='number' onChange={handleChange} value={carData.seats} name='seats'>
                            
                        </input>
                    </div>

                    <div className="input">
                        <label htmlFor="Vehicle Fuel" >
                            Fuel Type
                        </label>
                        <select onChange={handleChange} value={carData.fuel} name='fuel'>
                        <option value="" disabled>Select your Vehicles Fuel</option>
                            <option value="Petrol">
                                Petrol
                            </option>
                            <option value="Diesel">
                                Diesel
                            </option>
                            <option value="Electric">
                                Electric
                            </option>
                            
                        </select>
                    </div>
                    <div className="input">
                        <label htmlFor="Daily Price" >
                            Daily Rental Price
                        </label>
                        <input 
                        type="number" 
                        onChange={handleChange} 
                        value={carData.price} 
                        name='price'>

                        </input>
                        </div>
                    </div>
                    <button type='submit' className='btn' onClick={handleSubmit}>
                        Next
                    </button>
                </div>

                

}

            {(carSubmitted && !imageSubmitted) && 
            <>
            <h3>
                Almost done! Just upload an image of your vehicle below
            </h3>

            <form action="/uploadImage" method="PATCH" encType="multipart/form-data">

 
                <input 
                type='file'
                onChange={handleImageChange}>

                </input>
                <br></br>
                <button type='button' className='btn' onClick={handleImageUpload}>
                    Sumbit Vehicle
                </button>
            </form>
            </>
    }
    {imageSubmitted &&
    <div className='car-success'>
        <h3>
            All done! Thanks {carData.owner}
        </h3>
        <p>
                Your vehicle was successfully uploaded, Now CarPair NZ users can rent your vehicle and you can start earning!
        </p>
        <Link to='/'>
            <button type='button' class='btn'>
                Back to Site
            </button>
        </Link>
        </div>}



                
            </div>
        </section>
    )
};

export default ListCar;