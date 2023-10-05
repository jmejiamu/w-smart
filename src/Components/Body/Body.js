import apple from '../../assests/apple.png'
import play from '../../assests/play.png'
import phone from '../../assests/phone-app.png'

const Body = () => {
    return (
        <div className="body-bg" >
            <div className="container">
                <div className="about-container pb-5">
                    <div className="col">
                        <div className='line-img'></div>
                    </div>
                    <div className="col about-text-container">
                        <div className="col">
                            <h1 className="text-center text-color-light">About</h1>
                            <p className="text-color-light text-size-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                </div>
                <div className="pt-5 pb-5">
                    <div className="row">
                        <div className="col gy-2 download-section">
                            <h1 className="text-color-light text-size-lg ">Find a place and join</h1>

                            <div class="row g-0">
                                <p className="text-color-light text-size-sm">Available on:</p>
                                <div class="col-sm-6 col-md-4">
                                    <button type="button" className="btn-actions">
                                        <img className="icon-size" src={apple} alt='apple' />
                                        Apple Store</button>
                                </div>
                                <div class="col-6 col-md-4">
                                    <button type="button" className="btn-actions">
                                        <img className="icon-size" src={play} alt='play' />
                                        Google Play</button>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <img style={{ height: "100%", width: "50%" }} src={phone} alt='phone-app' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Body;