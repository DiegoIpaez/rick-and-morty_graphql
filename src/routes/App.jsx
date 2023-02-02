import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { internalPaths, basename } from '../utils/config';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import Error404 from '../pages/Error404/Error404';
import client from '../client';
import Character from '../pages/Character/Character';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router basename={basename}>
        <Navbar />
        <Routes>
          <Route path={internalPaths.home} element={<Home />} />
          <Route path={internalPaths.character} element={<Character />} />
          <Route path={internalPaths.error} element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
