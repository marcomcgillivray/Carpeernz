import { useState } from "react";
import Seat from '../assets/car-seat.png';
import Fuel from '../assets/gas-station.png';




const BookCar = () => {
    const [location, setLocation] = useState('');
    const [pickUpDate, setPickUpDate] = useState(null);
    const [dropOffDate, setDropOffDate] = useState(null);
    const [pickUpSubmitted, setPickUpSubmitted] = useState(false);
    const [cars, setCars] = useState([]);
    const [carId, setCarId] = useState(0)
    const [selectedCar, setSelectedCar] = useState([]);
    const [carSelected, setCarSelected] = useState(false);
    const [name, setName] = useState('');
    const [detailsSubmitted, setDetailsSubmitted] = useState(false);



    const locationHandler = e => {
        setLocation(e.target.value);
    };

    const pickUpHandler = e => {
        setPickUpDate(e.target.value);
    };

    const dropOffHandler = e => {
        setDropOffDate(e.target.value);
    };

    const nameHandler = e => {
        setName(e.target.value);
    };

    const detailsSubmittedHandler = e => {
        e.preventDefault();
        setDetailsSubmitted(true);
    }

    const pickUpSubmitHandler = e => {
        e.preventDefault();
        setPickUpSubmitted(true);
        fetch(`http://127.0.0.1:3001/api/v1/cars/byCity/${location}`)
        .then((response) => response.json())
        .then((data) => {
          setCars(data.data.car);
          console.log(data.data.car);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };

    const carIdHandler = vehicleId => {
        setCarId(vehicleId);
        console.log(vehicleId);
        selectedCarhandler(vehicleId);
        setCarSelected(true);
    };

     const selectedCarhandler = (ID)  => {
         setCarSelected(true);
         fetch(`http://127.0.0.1:3001/api/v1/cars/${ID}`)
         .then((response) => response.json())
         .then((data) => {
           setSelectedCar(data.car);
           console.log(data.car);
         })
         .catch((error) => {
           console.error('Error fetching data:', error);
         });
     }

     const today = new Date().toISOString().split('T')[0];



    return (
        <section id='book-car'>
            <div className="container">

                
                    <form>
                        
                    {(!pickUpSubmitted) && <div className="booking-form">
                    <h2>
                    Book a Car
                </h2>
                        <div className="input-group">

                        <div className="input">
                            <label htmlFor="Pick Up Location">
                                Pick Up Location
                            </label>
                            <select onChange={locationHandler}>
                                <option value="" disabled>
                                    Select a City
                                </option>
                                <option
                                value="Auckland">
                                    Auckland
                                </option>
                                <option
                                value="Wellington">
                                    Wellington
                                </option>
                                <option
                                value="Christchurch">
                                    Christchuch
                                </option>
                                <option
                                value="Queenstown">
                                    Queenstown
                                </option>
                            </select>
                        </div>

                            <div className="input">
                            <label htmlFor="Pick Up Date">
                                Pick Up Date
                            </label>
                            <input type="date"
                            min={today}
                            value={pickUpDate}
                            onChange={pickUpHandler}>
                            </input>
                        </div>

                        <div className="input">
                            <label htmlFor="Drop Off Date">
                                Drop Off Date
                            </label>
                            <input 
                            type="date"
                            min={pickUpDate}
                            value={dropOffDate}
                            onChange={dropOffHandler}>
                            </input>
                        </div>
                    </div>
                    <button 
                    type="submit"
                     className="btn"
                     onClick={pickUpSubmitHandler}>
                        Find a Car
                    </button>
                    </div>}

                    {(pickUpSubmitted && !carSelected) && <div className="car-options">
                        <h4>
                            Cas Available in {location} from {pickUpDate} until {dropOffDate}
                        </h4>
                        
                        <div className="cards">
                        {cars.map((car) => (
                            <div className="card">

                                <img src={`http://127.0.0.1:3001/images/${car.imageCover}`} alt={car.make}></img>
                                <li key={car._id}>
                                    <div className="main">
                                    <h3>{car.year} {car.make} {car.model}</h3>
                                    <h3>${car.price} /day</h3>
                                    </div>
                                    <div className="details">
                                        <div className="detail">
                                            <p>
                                            <img src={Seat} alt='Seats' height='32' width='32'></img>
                                            {car.seats}</p>
                                        </div>
                                        <div className="detail">
                                            <p>
                                            <img src={Fuel} alt='Fuel' height='32' width='32'></img>
                                            {car.fuel}</p>
                                        </div>
                                    </div>

                                        
                                        <br></br>

                                        <button 
                                        className="btn"
                                        onClick={(e) => { e.preventDefault(); carIdHandler(car._id);}}>
                                            Book Car
                                        </button>


                                    
                                    </li>
                                    

                            </div>
                            
            ))}
          </div>
                        </div>}
                        {(carSelected && !detailsSubmitted) && 
                        <div className="personal">
                                <h2>
                                    Check Your Booking Details Below
                                </h2>
                                
                                <p>
                                    You are booking a {selectedCar.year} {selectedCar.make} {selectedCar.model} from {pickUpDate} until {dropOffDate}
                                </p>
                                <br></br>
                                <p>
                                    If this is correct, please enter your details below. If not, please click the 'go back' button below
                                </p>

                                <h3>
                                    Enter Details
                                </h3>

                                <div className="input-group">
                                    <div className="input">
                                        <label htmlFor="First Name">
                                            First Name
                                        </label>
                                        <input type="text"
                                        onChange={nameHandler}
                                        value={name}>

                                        </input>
                                    </div>

                                    <div className="input">
                                        <label htmlFor="Last Name">
                                            Last Name
                                        </label>
                                        <input type="text">

                                        </input>
                                    </div>

                                    <div className="input">
                                        <label htmlFor="Email Address">
                                            Email Address
                                        </label>
                                        <input type="email">

                                        </input>
                                    </div>

                                    <div className="input">
                                        <label htmlFor="Phone Number">
                                            Phone Number
                                        </label>
                                        <input type="number">
                            
                                        </input>
                                    </div>

                                    
                                </div>
                                <button type='submit' className="btn" onClick={detailsSubmittedHandler}>
                                    Submit
                                </button>
                                <button type='submit' className="btn-alt">
                                    Go Back
                                </button>

                                
                            </div>}


                    </form>

                    {detailsSubmitted && 
                    <div className="success">
                            <h2>Thanks {name}, your car is booked</h2>
                            <h4>
                                Your booking reference is #{Math.floor(Math.random() * (100000 - 1 + 1)) + 1}. Full details have been sent to your email address
                            </h4>
                            <br></br>
                        </div>}
                
            </div>
        </section>
    )
};

export default BookCar;