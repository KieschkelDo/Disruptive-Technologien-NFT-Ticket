import React, { Component } from 'react';
import RecipeReviewCard from './Card.js';
import Web3 from 'web3';
import Ticket from '../abis/Ticket.json';
import Typography from '@material-ui/core/Typography';

class ShowTicket extends Component {
    state = {
        tickets: [],
        ticketsforowner: []
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
          this.setState({ totalSupply })
          // Load tickets
          for (var i = 1; i <= totalSupply; i++) {
            const ticket = await contract.methods.metadata(i - 1).call()
            let ticketobj = new Object({name: ticket.name, artist: ticket.artist, location: ticket.location, price: ticket.price, seat: ticket.seat,date: ticket.date, ipfs_hash: ticket.ipfs_hash});
            //console.log(ticketobj);
             this.setState({
              tickets: [...this.state.tickets, ticketobj]
            })
            //console.log(this.state.tickets);
          }
        } else {
          window.alert('Smart contract not deployed to detected network.')
        }
      }

    async loadTicketsforOwner(account){
        const web3 = window.web3
        const networkId = await web3.eth.net.getId()
        const networkData = Ticket.networks[networkId]
        if (networkData){
        const abi = Ticket.abi
        const address = networkData.address
        const contract = new web3.eth.Contract(abi, address)
        this.setState({ contract })
        const totalSupplyforOwner = await contract.methods.balanceOf(account).call()
        this.setState({ totalSupplyforOwner })
        // Load tickets
        for (var i = 1; i <= totalSupplyforOwner; i++) {
          const ticket = await contract.methods.metadata(i - 1).call()
          let ticketobjforowner = new Object({name: ticket.name, artist: ticket.artist, location: ticket.location, price: ticket.price, seat: ticket.seat,date: ticket.date, ipfs_hash: ticket.ipfs_hash});
          console.log(ticketobjforowner);
           this.setState({
            ticketsforowner: [...this.state.ticketsforowner, ticketobjforowner]
          })
          //console.log(this.state.tickets);
        }
      } else {
        window.alert('Error Loading Tickets by Owner')
      }
    }
    

    async componentWillMount() {
        await this.loadWeb3();
        await this.loadBlockchainData();
        await this.loadTicketsforOwner(this.state.account);
      }

    render() {
        return (
            <div>
            <h5 style={{marginTop:"50px"}}>
                All Tickets available to purchase:
            </h5>
            <div className="row text-center">
            
                <div style={{border: '30px solid white'}}></div>
                 {/* Show all Tickets available to purchase */}
                {this.state.tickets.map((ticket) => {
                    return (
                        <div className="col-md-3 mb-3">
                            <div style={{border: '30px solid white'}}></div>
                            <RecipeReviewCard props={ticket}></RecipeReviewCard>
                        </div>
                    )
                })}
            </div>   
            <h5>Owned Tickets:</h5>
            <div className="row text-center">
                {/* Show Tickets for User */}
    
                <div style={{border: '30px solid white'}}></div>
                {this.state.ticketsforowner.map((ticket) => {
                    return (
                       
                        <div className="col-md-3 mb-3">
                            <div style={{border: '30px solid white'}}></div>
                            <RecipeReviewCard props={ticket}></RecipeReviewCard>
                        </div>      
                    )
                })}
            </div>
            </div>
        );
    }
}

export default ShowTicket;