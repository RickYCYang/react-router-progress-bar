import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CustomRoutes from './components/CustomRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomRoutes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </CustomRoutes>
      </BrowserRouter>
    </>
  );
}

export default App;
