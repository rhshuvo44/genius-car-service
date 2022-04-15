import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Experts from './Pages/Home/Experts/Experts';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Share/Footer/Footer';
import Header from './Pages/Share/Header/Header';
import NotFound from './Pages/Share/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/services" element={<Services />} />
        <Route path="service/:serviceId" element={<ServiceDetail />} />
        <Route path="/home/experts" element={<Experts />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
