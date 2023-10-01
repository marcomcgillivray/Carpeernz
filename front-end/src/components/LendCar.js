import Car from '../assets/rentimage.webp';
import { Link } from 'react-router-dom';


const LendCar = () => {
    return (
        <section id='sidebyside'>
            <div className='container'>
                <div className='content'>
                    <h2 className='title'>
                        Lend your car and earn <span>$$$</span>
                    </h2>
                    <p>
                        Help out fellow kiwis and make money doing it. List your car on our platform today and let your car work for you 
                    </p>
                    <p>
                        We are NZ's most trusted peer to peer car lending platform - you choose who can rent your car and when
                    </p>
                    <Link to='/listcar'>
                    <button className='btn'>
                        Lend Your Car
                    </button>
                    </Link>
                </div>
                <picture className='image-box'>
                    <img src={Car} alt='car'></img>
                </picture>

            </div>
        </section>
    )
};

export default LendCar;