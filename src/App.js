import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Banner from './Components/Banner';
import Header from './Components/Header';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Banner />

    </div>
  );
}

export default App;
