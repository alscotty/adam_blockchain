// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.7;

contract Blockchain {
    struct BlockStruck {
        uint256 index;
        uint256 timestamp;
        uint256 amount;
        address sender;
        address recipient;
    }

    event BlockEvent(uint256 amount, address sender, address recipient);

    BlockStruck[] chain;

    uint256 chainCount = 0;

    function addBlockToChain(uint256 amount, address payable recipient)
        public
    {}
}
