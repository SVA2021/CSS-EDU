import { Highlighted } from './components/common/Typography';
import Demo from './components/Demo/Demo';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/Sidebar/SideBar';

function App() {

	return (
		<>
			<header className="header">
				<NavBar />
			</header>
			<main className="container">
				<SideBar />
				<Demo />
			</main>
			<footer className="footer">
				<Highlighted>SVA</Highlighted>
			</footer>
		</>
	);
}

export default App;