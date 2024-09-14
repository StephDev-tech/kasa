import Banner from "../components/Banner.jsx";
import imageBanner from "../assets/banner_about.jpg";
import Accordion from "../components/Accordion.jsx";

const About = () => {
	const aboutItems = [
		{
			title: "Fiabilité",
			content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
		},
		{
			title: "Respect",
			content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.",
		},
		{
			title: "Service",
			content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.",
		},
		{
			title: "Sécurité",
			content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien respectés. Nous organisons égalementdes ateliers sur la sécurité ndomestique pour nos hôtes.",
		},
	];
	return (
		<div className="about">
			<Banner
				backgroundImage={imageBanner}
				alt={
					"paysage avec une foret en premier plan, une chaine de montagne en arrière plan et une rivière entre les deux."
				}
			/>
			<section className="card-about-content">
				{aboutItems.map((itemValues, indexAbout) => {
					return <Accordion key={`aboutCard-${indexAbout}`} title={itemValues.title} content={itemValues.content} />
				})}
			</section>
		</div>
	);
};

export default About;
