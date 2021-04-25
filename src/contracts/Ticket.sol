pragma solidity 0.5.0;

import "./ERC721Full.sol";
//import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';
// could be implemented;

contract Ticket is ERC721Full{

    using Counters for Counters.Counter;
    Counters.Counter private ticketId;

    struct TicketMetadata {
    string name;
    string location;
    string artist;
    string price;
    string seat;
    string date;
    string ipfs_url;
    }

    TicketMetadata[] public metadata;

    constructor() ERC721Full("Ticket", "TICKET") public{
    }


    function getTicketMetadata( uint256 ticketTokenId ) public view returns(string memory name,string memory location,string memory artist,string memory price,string memory seat,string memory date,string memory ipfs_url){
        TicketMetadata memory _metadata = metadata[ticketTokenId];

        name = _metadata.name;
        location = _metadata.location;
        artist = _metadata.name;
        price = _metadata.price;
        seat = _metadata.seat;
        date = _metadata.date;
        ipfs_url = _metadata.ipfs_url;
    }

    function mint(string memory _name, string memory _location, string memory _artist, string memory _price, string memory _seat, string memory _date, string memory _ipfs_url) public returns (uint256 ticketTokenId){
       uint256 ticketTokenId = ticketId.current();

       TicketMetadata memory _metadata = TicketMetadata({name: _name, location: _location, artist: _artist, price: _price, seat: _seat, date: _date, ipfs_url: _ipfs_url});
       metadata.push(_metadata);
       _mint(msg.sender, ticketTokenId);
       ticketId.increment();
    } 
 
}

