import logo from '../assets/logo_kasa_footer.svg'

const Footer = () => {
    return(
        <div className='footer'>
            <img src={logo} alt="logo kasa" className='logo'></img>
            <p className='text-footer'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer