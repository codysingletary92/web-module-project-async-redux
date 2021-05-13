import { connect } from 'react-redux';
import { useEffect, useReducer } from 'react';

import reducer from './reducers/index'

import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Container from './components/Container'

function App(props) {
 
  console.log("from app.js", props)

  return (
    <div className="App">
       <Header />
       <Nav />
       <Container />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(App);
