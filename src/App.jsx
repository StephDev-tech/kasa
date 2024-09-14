import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Error from "./pages/Error.jsx";
import Housesheet from "./pages/Housesheet.jsx"
import './styles/Index.scss'

const App = () => {
	return (
		<div className="App">
			<Router>
        		<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/housesheet/:houseId" element={<Housesheet />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
