import Demo from './components/Demo/Demo';
import NavBar from './components/Header/NavBar';
import SideBar from './components/Sidebar/SideBar';

function App() {

  return (
    <div className="container">
      <header className="header">
        <NavBar />
      </header>
      <SideBar />
      <Demo />
    </div>
  );
}

export default App;