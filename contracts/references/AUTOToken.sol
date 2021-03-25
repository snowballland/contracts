// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

abstract contract AUTOToken is ERC20 {
    function mint(address _to, uint256 _amount) public virtual;
}