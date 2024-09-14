const Ratings = ({ rate }) => {
	const rating = rate;
	const stars = [];

	for (let i = 1; i <= 5; i++) {
		stars.push(
			<i key={`star-`+i}
				className={i <= rating ? "fa-solid fa-star rated" : "fa-solid fa-star"}
			></i>
		);
	}
	return  <div className="ratings">{stars}</div>;
};

export default Ratings;
