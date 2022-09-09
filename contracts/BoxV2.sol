// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract BoxV2 {
    uint256 public value;

    function inc() external {
        value += 1;
    }
}