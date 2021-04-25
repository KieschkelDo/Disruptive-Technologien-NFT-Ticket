import React, { Component } from 'react';
import Web3 from 'web3';
import logo from '../logo.png';
import './App.css';
import Ticket from '../abis/Ticket.json';
import DragAndDrop from './DragandDrop';

class App extends Component {
  state = {
    tickets: [],
  }
  
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
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

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })


    const networkId = await web3.eth.net.getId()
    const networkData = Ticket.networks[networkId]
    if(networkData) {
      const abi = Ticket.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)
      this.setState({ contract })
      const totalSupply = await contract.methods.totalSupply().call()
      console.log(contract.methods)
      this.setState({ totalSupply })
      // Load tickets
      for (var i = 1; i <= totalSupply; i++) {
        const ticket = await contract.methods.metadata(i - 1).call()
        let ticketobj = new Object({name: ticket.name, artist: ticket.artist, location: ticket.location, price: ticket.price, seat: ticket.seat,date: ticket.date, ipfs_url: ticket.ipfs_url});
        console.log(ticketobj);
         this.setState({
          tickets: [...this.state.tickets, ticketobj]
        })
        console.log(this.state.tickets);
      }
      console.log(this.state.tickets)
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }

  mint = (ticket) => {
    this.state.contract.methods.mint(ticket.name, ticket.location, ticket.artist, ticket.price, ticket.seat, ticket.date, ticket.ipfs_url).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({
        tickets: [...this.state.tickets, Object.assign(ticket.name, ticket.location, ticket.artist, ticket.price, ticket.seat, ticket.date, ticket.ipfs_url)]
      })
      console.log(receipt);
    })
  }
  
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      contract: null,
      totalSupply: 0,
      tickets: []
    }
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ticket Tokens
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white"><span id="account">{this.state.account}</span></small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1>Issue Ticket Token</h1>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const ticket = {
                      name: this.name.value,
                      location: this.location.value,
                      artist: this.artist.value,
                      price: this.price.value,
                      seat: this.seat.value,
                      date: this.date.value,
                      ipfs_url: this.image.value
                    }
                    this.mint(ticket)
                  }}>
                    <input
                      type='text'
                      className='form-control mb-1'
                      placeholder='Name'
                      ref={(input) => { this.name = input }}
                    />
                    <input
                      type='text'
                      className='form-control mb-1'
                      placeholder='Location'
                      ref={(input) => { this.location = input }}
                    />
                    <input
                      type='text'
                      className='form-control mb-1'
                      placeholder='Artist'
                      ref={(input) => { this.artist = input }}
                    />
                    <input
                      type='text'
                      className='form-control mb-1'
                      placeholder='Price in Fiat ($/€)'
                      ref={(input) => { this.price = input }}
                    />
                    <input
                      type='text'
                      className='form-control mb-1'
                      placeholder='Seat'
                      ref={(input) => { this.seat = input }}
                    />
                    <input
                      type='text'
                      className='form-control mb-1'
                      placeholder='Date in Format DD/MM/YYYY'
                      ref={(input) => { this.date = input }}
                    />
                    <input
                      type='text'
                      className='form-control mb-1'
                      placeholder='Image'
                      ref={(input) => { this.image = input }}
                    />

                    <DragAndDrop  handleDrop={console.log("file dropped")}>
                    <div style={{height: 150, width: 325, borderRadius: 1, borderWidth: 1, borderColor: 'grey', borderStyle: 'dotted'}}>
                      <div>
                        DROP EVENT COVER HERE.
                      </div>
                    </div>
                  
                    </DragAndDrop>
                    <input
                      type='submit'
                      className='btn btn-block btn-primary'
                      value='CREATE TICKET-NFT'
                      style={{marginTop:20}}
                    />
                  </form>
              </div>
            </main>
          </div>
          <hr/>
          <div className="row text-center">
           {this.state.tickets.map((ticket) => {
              return(
                <div className="col-md-3 mb-3">
                <div className="token" style={{ backgroundticket: ticket }}></div>
                  <div><img src={'https://gateway.pinata.cloud/ipfs/'+ ticket.ipfs_url} alt="Image was not able to be loaded"></img></div>
                  <div>Artist: {ticket.artist}</div>
                  <div>Event: {ticket.name}</div>
                  <div>Location: {ticket.location}</div>
                  <div>Ticket price in €: {ticket.price}</div>
                  <div>Seat: {ticket.seat}</div>
                </div>
              )
            })}
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
