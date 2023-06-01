
import './App.css';
import Blog from './Components/Home Components/Blog/Blog';
import Header from './Components/Home Components/Header/Header';
import Stats from './Components/Home Components/Stats/Stats';
import Navs from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navs></Navs>
      <Header></Header>
      <Stats></Stats>
      <Blog></Blog>
    </div>
  );
}

export default App;
