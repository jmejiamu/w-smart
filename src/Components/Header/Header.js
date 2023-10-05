
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-light nav-bg justify-content-between">
                <div className="container">
                    <a href="/#" className="button-download fw-bold text-uppercase">Download</a>
                    <a href="/#" className="navbar-brand fw-bold text-color-light">WSmart</a>
                </div>
            </nav>
            <div className="header-container">
                <div className="bg-image"></div>
                <div className='col header-text-container bg-dark d-flex justify-content-center'>
                    <div>
                        <h1 className='text-size-xl'>Find a aplace and meet new friends</h1>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;