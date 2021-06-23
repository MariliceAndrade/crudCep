import React, { useState } from 'react';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import Navbar from './Componentes/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import ListarEnd from './Pages/ListarEnd';
import CadEnd from './Pages/CadEnd';

const App = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Router>
        <header> 
          <MenuUnfoldOutlined onClick={() => setShowNav(!showNav)} />
        </header>
        
        <Navbar show={showNav} />

        <div className='main'>
          <Route path='/' exact={true} component={CadEnd} />
          <Route path='/ListarEnd' exact={true} component={ListarEnd} />
        </div>
      </Router>
    </>
  );
};


export default App;
