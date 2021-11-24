import logo from './logo.svg';

import Create from './components/Create/Create';
import Admin from './components/Admin/Admin';
import Welcome from './components/Welcome/Welcome';
import { BrowserRouter, Route } from 'react-router-dom' 
import './App.css';


function App() {
  
  return (
    
      <BrowserRouter>
        <div className="App">
  
          <div>
            <Route exact path="/" component={Welcome} />
          </div>

           <div>
            <Route exact path="/Admin" component={Admin} />
          </div>

          <div>
            <Route exact path="/Create" component={Create} />
          </div>
        
        </div>
      </BrowserRouter>
  );
}

export default App;
