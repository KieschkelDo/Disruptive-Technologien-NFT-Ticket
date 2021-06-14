import React, { Component } from 'react';
import Ticket from '../abis/Ticket.json';
import pinFileToIPFS from '../helpers/uploadFile';

class CreateTicket extends Component {
    state = {
        tickets: [],
        file: [],
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
            // console.log(ticket)
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
    
      mint = (ticket) => {
        this.state.contract.methods.mint(ticket.name, ticket.location, ticket.artist, ticket.price, ticket.seat, ticket.date, ticket.ipfs_hash).send({ from: this.state.account })
        .once('receipt', (receipt) => {
          this.setState({
            tickets: [...this.state.tickets, Object.assign(ticket.name, ticket.location, ticket.artist, ticket.price, ticket.seat, ticket.date, ticket.ipfs_hash)]
          })
          console.log(receipt);
        })
      }
    
      handleChange = (event) => {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }

      async componentWillMount() {
        await this.loadBlockchainData()
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
        this.handleChange = this.handleChange.bind(this)
      }
    render() {
        return (
            <div>
                <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1>Issue Ticket Token</h1>
                  <form onSubmit={(event) => {
                    var ticket = {}
                    event.preventDefault()
                    pinFileToIPFS(this.state.file).then((hash) => {
                      this.setState({
                      ipfs_hash: hash
                      },  () => {
                       ticket = {
                        name: this.name.value,
                        location: this.location.value,
                        artist: this.artist.value,
                        price: this.price.value,
                        seat: this.seat.value,
                        date: this.date.value,
                        ipfs_hash: this.state.ipfs_hash                       }
                    })
                    console.log(ticket);
                    this.mint(ticket); //we would need to make the mint function async here, to refetch the tickets after.
                    
                  })
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
                    <div>
                    <input type="file" onChange={this.handleChange}/>
                    <img src={this.state.file}/>
                     </div>
                     {/*  WIP
                    <div style={{height: 150, width: 325, borderRadius: 1, borderWidth: 1, borderColor: 'grey', borderStyle: 'dotted'}}>
                      <div>
                        DROP EVENT COVER HERE.
                      </div>
                    </div>
                    </DragAndDrop>*/}
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
            </div>
        );
    }
}

export default CreateTicket;