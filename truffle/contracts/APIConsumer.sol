// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "@chainlink/contracts/src/v0.7/ChainlinkClient.sol";

contract APIConsumer is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    string public volume;
    address private immutable oracle;
    string private jobId;
    uint256 private immutable fee;

    event DataFullfilled(string volume);

    
    constructor(
    ) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0xB7E946A727090285a2d5BC5A2D837bD45539d4c8);
        oracle = 0xB7E946A727090285a2d5BC5A2D837bD45539d4c8;
        jobId = "70717430666f4c0d8452ca6ceec0b656";
        fee = (1 * LINK_DIVISIBILITY) / 10; 
    }

    function requestVolumeData() public returns (bytes32 requestId) {
        Chainlink.Request memory request = buildChainlinkRequest(
            stringToBytes32(jobId),
            address(this),
            this.fulfill.selector
        );

        return sendChainlinkRequestTo(oracle, request, fee);
    }

    function stringToBytes32(
        string memory source
    ) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            // solhint-disable-line no-inline-assembly
            result := mload(add(source, 32))
        }
    }

    
    function fulfill(
        bytes32 _requestId,
        string memory _volume
    ) public recordChainlinkFulfillment(_requestId) {
        volume = _volume;
        emit DataFullfilled(volume);
    }

    function read() public view returns (string memory) {
        return volume;
    }

    function withdrawLink() external {}
}
