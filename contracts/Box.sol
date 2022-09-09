// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Box {
    uint256 public value;

    function initialize(uint _value) external {
        value =_value;
    }
}