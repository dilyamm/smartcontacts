// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    uint256 public storedValue;
    address public owner;

    constructor(uint256 _initialValue) {
        storedValue = _initialValue;
        owner = msg.sender;
    }

    function setValue(uint256 _newValue) public {
        require(msg.sender == owner, "Only owner can set the value");
        storedValue = _newValue;
    }
}
