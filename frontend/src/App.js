import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';

function App() {
  return (
  <Router>

   <Header/>
   <main className='py-3'>
    <Container>
      <Routes>
      <Route path='/' element={<HomeScreen/>} exact></Route>
      <Route path='/product/:id' element={<ProductScreen/>} exact></Route>
      </Routes>
    </Container>
   </main>
 
   <Footer/>

   </Router>
  );
}

export default App;
