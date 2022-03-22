import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Footer, Header } from "./components";
import { 
  HomeScreen, 
  ProductScreen, 
  CartScreen, 
  LoginScreen,
  RegisterScreen
} from "./screens";


const App = () => {
  return (
    <Router>
      <Header />

      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/cart/:id?' component={CartScreen}/>
          <Route path='/login' component={LoginScreen}/>
          <Route path='/register' component={RegisterScreen}/>
        </Container>
      </main>

      <Footer />

    </Router>
  );
}

export default App;
