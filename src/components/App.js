import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useLocation} from "react-router-dom";
import Main from './Main.js';
import CreateTicket from './CreateTicket.js';
import ShowTicket from './ShowTicket.js';
import UseTicket from './UseTicket.js';
import Shop from './Shop.js'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Web3 from 'web3';
import logo from '../logo.png';
import './App.css';

require('dotenv').config();

class App extends Component {
  state = {
    tickets: [],
    file: [],
    account: '',
  }
  
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }  

  async loadAccountData(){
    const web3 = window.web3
        // Load account
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
  }

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadAccountData();
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      contract: null,
      totalSupply: 0,
      tickets: [],
      file: [],
    }
    //this.handleChange = this.handleChange.bind(this)

  console.log(this.state.account)
  }
  render() {
    return (
      <Container maxWidth="xl">
      <Router>
      <div maxWidth="">
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <Link to="/">
          <a 
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            target="_blank"
            rel="noopener noreferrer"
          >
             <div style={{color: '#fff'}}>Ethertixx</div>
          </a>
          </Link>
          <Link to="/createTickets"><a>Create Tickets</a></Link>
          <Link to="/Shop"><a>Shop</a></Link>
          <Link to="/myTickets"><a>Tickets</a></Link>
          <Link to="/useTicket"><a>Ticketroom</a></Link>
      
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white"><span id="account">{this.state.account}</span></small>
            </li>
          </ul>
        </nav>
       
      <Route path="/" exact><Main/></Route> 
      <Route path="/Shop"><Shop/></Route>
      <Route path="/useTicket"><UseTicket/></Route>
      <Route path="/myTickets"><ShowTicket/></Route>
      <Route path="/createTickets"><CreateTicket/></Route>
      </div>
      </Router>
      </Container>
    );
  }
}

export default App;
