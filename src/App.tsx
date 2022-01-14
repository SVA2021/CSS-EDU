import Demo from './components/Demo/Demo';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';

function App() {

  return (
    <div className="container">
      <Header />
      <SideBar />
      <Demo />
    </div>
  );
}

export default App;