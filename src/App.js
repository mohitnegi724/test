import React, { useEffect } from 'react'
import Home from './screens/Home'
import Navbar from './components/Navbar'
import SidebarOptions from './components/SidebarOptions'
import ManageServices from './screens/ManageServices'
import Axios from 'axios'
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  useEffect(() => {
    const fetchUserData= async ()=>{
      const url = `${window.location.origin}/api/HireAsap%20Dev%20API%20V2.postman_environment.json`
      const { data } = await Axios.get(url)
      const { values } = data
      for(let option of values) {
        localStorage.setItem(option.key, option.value)
      }
    }
    fetchUserData()
  }, [])
  return (
    <div className="mainContainer">
      <Navbar />
      <div className="components">
        <div className="sidebarOptions">
          <SidebarOptions />
        </div>
        <div className="detailsSide">
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/manage-services" component={ ManageServices } />
            <Route path="*"  component={ Home } />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
