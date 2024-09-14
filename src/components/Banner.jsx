const Banner = ({title, backgroundImage, alt}) => {
    return(
        <div className='banner'>
            <img src={backgroundImage} alt={alt} className='image'/>
            <div className='filter'></div>
            <div className='banner-title'><h1>{title}</h1></div>
        </div>
    )
}

export default Banner