import { Toolbar } from '@mui/material';
import { About, Home, Navbar, NavbarUp, News, Pricing, Products, Service } from './components';

function App() {
  return (
    <>
    <NavbarUp />
    <Toolbar/>
    <Navbar />
    <Toolbar/>
    <Home />
    <About />
    <Service />
    <Pricing />
    <Products />
    <News />
    </>
  );
}

export default App;
