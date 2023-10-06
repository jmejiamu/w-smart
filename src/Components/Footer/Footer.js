
import instagram from '../../assests/instagram.svg'
import facebook from '../../assests/facebook.svg'
import youtube from '../../assests/youtube.svg'



const Footer = () => {
    return (
        <div className='footer-bg-color'>
            <div className="container  p-2">
                <footer>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <h1 className="text-center text-color-dark">Follow us</h1>
                                <div className="col d-flex justify-content-center">
                                    <ul class="col-md-4 footer-media-section">
                                        <li className="nav-item"><a href="/#" class="nav-link px-1 text-muted">
                                            <img className='icon-size' src={youtube} alt='instagram' />
                                        </a></li>
                                        <li class="nav-item"><a href="/#" class="nav-link px-1 text-muted">
                                            <img className='icon-size' src={instagram} alt='instagram' />
                                        </a></li>
                                        <li class="nav-item"><a href="/#" class="nav-link px-1 text-muted">
                                            <img className='icon-size' src={facebook} alt='instagram' />
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <h1 className="text-center text-color-dark">WSmart</h1>
                                <div className="col d-flex justify-content-center">
                                    <ul className="col-md-4 footer-link-section">
                                        <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted text-color-dark">Home</a></li>
                                        <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted text-color-dark">Contact us</a></li>
                                        <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted text-color-dark">Features</a></li>
                                        <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted text-color-dark">Pricing</a></li>
                                        <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted text-color-dark">FAQs</a></li>
                                        <li className="nav-item"><a href="/#" className="nav-link px-2 text-muted text-color-dark">About</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center ">
                        <p className="col-md-4 mb-0 text-muted text-center text-color-dark">&copy; 2023 Binary Stack Studio</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer;