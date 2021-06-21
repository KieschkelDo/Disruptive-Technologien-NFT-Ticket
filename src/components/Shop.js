import React, { Component } from 'react';
import Web3 from 'web3';
import Ticket from '../abis/Ticket.json';
import RecipeReviewCard from './Card.js';
import differenceBy from 'lodash/differenceBy'

class Shop extends Component {
    state = {
        available_tickets: [],
        contract: '',
        tickets: [],
        ownedtickets: [],
        account: '',
        availabletickets: []
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

    async allTickets() {
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
            let ticketobj = new Object({name: ticket.name, artist: ticket.artist, location: ticket.location, price: ticket.price, seat: ticket.seat,date: ticket.date, ipfs_hash: ticket.ipfs_hash, id: ticket.id});
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

      async getTicketsofOwner(){
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
          const balance = await contract.methods.balanceOf(accounts[0]).call()
          for ( var i = 0; i < balance.toNumber(); i++) {
            const tokenid = await contract.methods.tokenOfOwnerByIndex(accounts[0], i).call()
            const ticket = await contract.methods.getTicketMetadata(tokenid).call()
           // console.log(ticket);
            let ownedticketobj = new Object({name: ticket.name, artist: ticket.artist, location: ticket.location, price: ticket.price, seat: ticket.seat,date: ticket.date, ipfs_hash: ticket.ipfs_hash,})
            this.setState({
              ownedtickets: [...this.state.ownedtickets, ownedticketobj]
            })
            //console.log(this.state.ownedtickets)
            }
          }
         else {
          window.alert('Smart contract not deployed to detected network.')
        } 
      }

      async availableTickets(){
        //total supply - owned tickets
        let totalSupply = this.state.tickets
        let ownedTickets = this.state.ownedtickets
        const availabletickets = differenceBy(totalSupply, ownedTickets, 'date')
        this.setState({ availabletickets })
      }
    

      async transferTicket (ticketid, from, to) {
        const web3 = window.web3
       
        const networkId = await web3.eth.net.getId()
        const networkData = Ticket.networks[networkId]

        if(networkData) {
          const abi = Ticket.abi
          const address = networkData.address
          const contract = new web3.eth.Contract(abi, address)
          this.setState({ contract })
          //transferFrom needs a from address
          const transfer = await contract.methods.transferFrom(ticketid, from, to)
        }
      }

      async componentWillMount() {
        await this.loadWeb3()
        await this.allTickets();
        await this.getTicketsofOwner();
        await this.availableTickets();
        
      }

    render() {

        return (
            <div>
                <h5 style={{marginTop:"50px"}}>All Tickets available to purchase:</h5>
            <div className="row text-center">
                {/* Show Tickets for User */}
    
                <div style={{border: '30px solid white'}}></div>
                {this.state.availabletickets.map((ticket) => {
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

export default Shop;