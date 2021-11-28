
import React, { Component } from 'react';
import ListAll from './components/ListAll';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import GetId from './components/GetId';
import Navbar from './components/NavBar';

import{BrowserRouter,Route,Routes} from 'react-router-dom';





class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
     

      
     
<Navbar/>

<Routes>
      <Route path="/" element={<ListAll />} />
      <Route path="customers/allDetails" element={<ListAll />} />
     
      <Route path="customers/insert" element={<AddCustomer />} />
      <Route path="customers/update" element={<UpdateCustomer />} />
      <Route path="customers/get" element={<GetId />} />
     
    </Routes>
    
    



      


    </div>
    </BrowserRouter>
  );
}
}

export default App;
