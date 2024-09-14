import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Tags from "../components/Tags.jsx";
import Ratings from "../components/Ratings.jsx";
import Accordion from "../components/Accordion.jsx";
import { useState, useEffect } from "react";
import { houseSheetDataById } from "../utils/fetch.js";
import Loader from "../components/Loader.jsx";

const Housesheet = () => {
	const { houseId } = useParams();
	let [houseInfo, setHouseInfo] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		houseSheetDataById("/data.json", houseId)
			.then((result) => {
				if (!result) {
					return navigate("/error");
				}
				setHouseInfo(result);
			})
			.catch((error) => {
				console.error("Error fetching house data", error);
			});
	}, [houseId, navigate]);

	if (!houseInfo) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	const tags = houseInfo.tags || [];
	const equipements = houseInfo.equipments || [];

	return (
		<div className="housesheet">
			<Carousel pictures={houseInfo.pictures || []} title={houseInfo.title}/>
			<div className="housesheet-info">
				<div>
					<div className="housesheet-title">
						<h2 className="title">{houseInfo.title}</h2>
						<h3 className="subtitle">{houseInfo.location}</h3>
					</div>
					<div className="div-tags">
						{tags.map((tag, index) => (
							<Tags tagName={tag} key={`housesheet-${tag + index}`} />
						))}
					</div>
				</div>
				<div className="housesheet-right">
					<div className="profil">
						<p className="profil-name">{houseInfo.host?.name}</p>
						<img
							src={houseInfo.host?.picture}
							alt={houseInfo.title}
							className="profil-picture"
						/>
					</div>
					<div className="div-ratings">
						<Ratings rate={houseInfo.rating} />
					</div>
				</div>
			</div>
			<div className="div-accordion">
				<div className="accordion-hs">
					<Accordion title="Description" content={houseInfo.description} />
				</div>
				<div className="accordion-hs">
					<Accordion
						title="Equipements"
						content={equipements.map((equipement, index) => (
							<li
								key={`housesheet-${equipement + index}`}
								className="equipment"
							>
								{equipement}
							</li>
						))}
					/>
				</div>
			</div>
		</div>
	);
};

export default Housesheet;
