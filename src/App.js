import "./App.css";
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from "./components/Catalog";


function App() {
  return (
    <div className="App">
      <h1>The Market</h1>
      <NavBar></NavBar>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;
