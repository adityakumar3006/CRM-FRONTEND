import React from 'react';
import './App.css';

import {Button} from "react-bootstrap";
import Login from "./pages/Entry";
import { Defaultlayout } from './layout/Defaultlayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';

function App() {
  return (
    <div className="App">
 {/* <Login/> */}
 <Defaultlayout>
<Dashboard/>
   </Defaultlayout>
    </div>
  );
}

export default App;
