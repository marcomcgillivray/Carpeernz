import CarRental from '../assets/car-rental.png';
import Peer from '../assets/peer-to-peer.png';
import NZ from '../assets/new-zealand.png';

const PlanTrip = () => {
    return (
        <>
        <section id='plan-trip'>
            <div className="container">
                <span>
                    Plan Your Trip
                </span>
                <h2>
                    Quick & Easy Car Rental
                </h2>
                <div className="three-icons">
                    <div className="icon">
                        <div className='image'>
                            <img src={CarRental} alt='Car Rental' height='128' width='128'></img>
                        </div>
                        <div className='content'>
                            <h3>
                                Select a Car
                            </h3>
                            <p>
                                Choose from our endless range of vehicles to suit your every need
                            </p>
                        </div>
                    </div>
                    <div className="icon">
                    <div className='image'>
                            <img src={Peer} alt='Car Rental' height='128' width='128'></img>
                        </div>
                        <div className='content'>
                            <h3>
                                Peer to Peer
                            </h3>
                            <p>
                                Rent from your neighbours and save, all cars on our platform are owned by individual kiwis
                            </p>
                        </div>
                    </div>
                    <div className="icon">
                    <div className='image'>
                            <img src={NZ} alt='Car Rental' height='128' width='128'></img>
                        </div>
                        <div className='content'>
                            <h3>
                                Rent Anywhere
                            </h3>
                            <p>
                                Our peer to peer service means you can find a car anywhere you need in NZ at any time
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='save-big'>
            <div class='container'>
                <h2>
                    Save <span>Big</span> with CarPair NZ
                </h2>
                <p>
                    Cheapest rates. Peer to Peer. Everywhere in NZ.
                </p>
            </div>
        </section>
        </>
    )
};

export default PlanTrip;