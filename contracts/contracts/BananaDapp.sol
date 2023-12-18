// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract BananaDapp {
    address payable public owner;
    uint256 public bananaStock;
    uint256 public bananaPrice = 0.2 ether;

    // Creating mapping
    mapping(address => uint256) holders;

    event Buy(address indexed _from, uint256 _amount);

    constructor(uint256 banana_stock) {
        owner = payable(msg.sender);
        bananaStock = banana_stock;
    }

    function buy(uint256 amount) public payable {
        // Every banana costs 0.2 ether
        require(msg.value == amount * 0.2 ether, "Wrong amount sent");

        // Check if there are enough bananas in stock
        require(amount <= bananaStock, "Not enough bananas in stock");

        // Update the mapping
        holders[msg.sender] += amount;

        // Update the stock
        bananaStock -= amount;

        // Send the ether to the owner
        owner.transfer(msg.value);

        // Emit the event
        emit Buy(msg.sender, amount);
    }

    // Get the balance of a holder
    function getBalance(address holder_address) public view returns (uint256) {
        return holders[holder_address];
    }

    // Get the balance of the contract
    function updateStock(uint256 new_stock) public {
        require(msg.sender == owner, "Only the owner can update the stock");
        bananaStock = new_stock;
    }

    // Get the balance of the contract
    function transferOwnership(address payable new_owner) public {
        require(msg.sender == owner, "Only the owner can transfer ownership");
        owner = new_owner;
    }
}
