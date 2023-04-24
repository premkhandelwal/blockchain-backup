// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

/**
 * @title The APIConsumer contract
 * @notice An API Consumer contract that makes GET requests to obtain 24h trading volume of ETH in USD
 */
contract APIConsumer is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    string public volume;
    address private immutable oracle;
    string private jobId;
    uint256 private immutable fee;

    event DataFullfilled(string volume);

    /**
     * @notice Executes once when a contract is created to initialize state variables
     *
     * @param _oracle - address of the specific Chainlink node that a contract makes an API call from
     * @param _jobId - specific job for :_oracle: to run; each job is unique and returns different types of data
     * @param _fee - node operator price per API call / data request
     * @param _link - LINK token address on the corresponding network
     *
     * Network: Rinkeby
     * Oracle: 0xc57b33452b4f7bb189bb5afae9cc4aba1f7a4fd8
     * Job ID: 6b88e0402e5d415eb946e528b8e0c7ba
     * Fee: 0.1 LINK
     */
    constructor(
        address _oracle,
        string memory _jobId,
        uint256 _fee,
        address _link
    ) {
        setChainlinkToken(0x779877A7B0D9E8603169DdbD7836e478b4624789);
        setChainlinkOracle(0x3016e3b55bF31cC50E78933Fb536efD2B29ed3bE);
        oracle = 0x3016e3b55bF31cC50E78933Fb536efD2B29ed3bE;
        jobId = "c3c788ba52ba4ee387eeef344d77c793";
        fee = _fee;
    }

    /**
     * @notice Creates a Chainlink request to retrieve API response, find the target
     * data, then multiply by 1000000000000000000 (to remove decimal places from data).
     *
     * @return requestId - id of the request
     */
    function requestVolumeData() public returns (bytes32 requestId) {
        Chainlink.Request memory request = buildChainlinkRequest(
            stringToBytes32(jobId),
            address(this),
            this.fulfill.selector
        );

        // Set the URL to perform the GET request on
       
        // Multiply the result by 1000000000000000000 to remove decimals
 

        // Sends the request
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

    /**
     * @notice Receives the response in the form of uint256
     *
     * @param _requestId - id of the request
     * @param _volume - response; requested 24h trading volume of ETH in USD
     */
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

    /**
     * @notice Witdraws LINK from the contract
     * @dev Implement a withdraw function to avoid locking your LINK in the contract
     */
    function withdrawLink() external {}
}
