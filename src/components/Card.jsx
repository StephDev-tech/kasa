import { useNavigate } from "react-router-dom";


const Card = ({ id, image, title }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/Housesheet/${id}`)	
	}

	return (
		<li className="card" key={id} onClick={handleClick}>
			<img src={image} alt={title} />
			<p>{title}</p>
		</li>
	);
};

export default Card;
