import Banner from "../components/Banner.jsx";
import Card from "../components/Card.jsx";
import imageBanner from "../assets/banner_home.jpg";
import { useState, useEffect } from "react";
import { houseSheetData } from "../utils/fetch.js";
import Loader from "../components/Loader.jsx";

const Home = () => {
	let [houseData, setHouseData] = useState(null);
	useEffect(() => {
		houseSheetData("/data.json")
			.then((datas) => {
				setHouseData(datas || []);
			})
			.catch((error) => {
				console.error("Error", error);
			});
	}, []);
	if (!houseData) {
		return (
			<div>
				<Loader />
			</div>
		);
	}

	return (
		<div className="home">
			<Banner
				title={"Chez vous, partout et ailleurs"}
				backgroundImage={imageBanner}
				alt={"Un litoral"}
			/>
			<ul className="gallery">
				{houseData.map((logement) => (
					<Card
						key={`Card-${logement.id}`}
						id={logement.id}
						image={logement.cover}
						title={logement.title}
					/>
				))}
			</ul>
		</div>
	);
};

export default Home;
