import { useState } from "react";

const Carousel = ({pictures, title}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const usefull = pictures.length > 1;
	

	const prevPicture = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextPicture = () => {
		const isLastSlide = currentIndex === pictures.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className="carousel">
			{usefull ? (<i className="fa-solid fa-chevron-left" onClick={prevPicture}></i>) : (	"")}
			<img className="carousel-picture" src={pictures[currentIndex]} alt={`${title}_${currentIndex+1}sur${pictures.length}`}/>
			{usefull ? (<i className="fa-solid fa-chevron-right" onClick={nextPicture}></i>	) : (""	)}
			{usefull ? (<p className="pic-number"> {currentIndex+1}/{pictures.length}</p>	) : (""	)}			
		</div>
	);
};

export default Carousel;
