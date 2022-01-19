import { Highlighted } from './components/common/Typography';
import Demo from './components/Demo/Demo';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/Sidebar/SideBar';

function App() {

  return (
    <div className="container">
      <header className="header">
        <NavBar />
      </header>
      <SideBar />
      <Demo />
      <footer className="footer">
        <Highlighted>SVA</Highlighted>
      </footer>
    </div>
  );
}

export default App;