import Logo from '../assets/1.png';

const Footer = () => {
    return (
        <section id='footer'>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt='logo'></img>
                </div>
                <div className="footer-right">
                    <h2>
                        Navigation
                    </h2>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Book a Car
                        </li>
                        <li>
                            Lend Your Car
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Footer;