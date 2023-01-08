import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { internalPaths } from '../utils/constants';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import Error404 from '../pages/Error404/Error404';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={internalPaths.home} element={<Home />} />
        <Route path={internalPaths.error} element={<Error404 />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
