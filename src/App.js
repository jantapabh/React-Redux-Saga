import React from 'react'
import './App.css';
// import Users from './components/UsersComponent'
import { Provider } from "react-redux";
import store from "./store";
import Home from "./Home";


const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
