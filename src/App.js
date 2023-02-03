
import Container from "./components/Container";
import RoomTypes from "./components/RoomTypes";
import Footer from "./components/Footer";
import { FaChevronUp } from "react-icons/fa";

function App() {
	return (
		<div className="app">
			<Container />
			<RoomTypes />
			<ToTopBtn />
			<Footer />
		</div>
	);
}

const ToTopBtn = () => {
	return <div className="toTop flex">
		<FaChevronUp />
	</div>
}

export default App;
