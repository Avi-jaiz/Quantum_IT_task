import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Banner from './Components/Banner';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Experience from './Components/Experience';
import Services from './Components/Services';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Banner />
      <Experience />
      <Services />
      <Footer />

    </div>
  );
}

export default App;
