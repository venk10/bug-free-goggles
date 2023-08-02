import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './home';
import Order from './order';
import Contact from './contact';
import About from './about';
import Login from './login';
import Signup from './signup';
import Form from './form';
import Briyani from './briyani';
import Cake from './cake';
import Burger from './burger';
import Bill from './bill';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='order' element={<Order />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='about' element={<About />}/>
          <Route path='form' element={<Form />}/>
          <Route path='signup' element={<Signup />}/>
          <Route path='login' element={<><Login /><Bill /></>}/>
          <Route path='briyani' element={<><Order /><Briyani /></>}/>
          <Route path='cake' element={<><Order /><Cake /></>}/>
          <Route path='burger' element={<><Order /><Burger /></>}/> 
          <Route path='bill' element={<Bill price='150'/>} />
        </Route>
      </Routes>
    </BrowserRouter> 

   </>
  );
}

export default App;
