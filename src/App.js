import './App.css';
import './style/landingPage.css'
import NavigationBar from './components/Navbar';
import Intro from './components/Intro';
import Trending from "./components/Trending";
import Action from './components/Action';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>
      
      <hr className="line-page"/>

      <div className="trending">
        <Trending />
      </div>

      <hr className="line-page"/>

      <div className="superhero">
        <Action />
      </div>
      
      <hr className="line-page"/>

      <Footer />
    </div>
  );
}

export default App;
