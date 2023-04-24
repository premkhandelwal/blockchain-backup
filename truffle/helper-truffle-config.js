const networkConfig = {
    test: {
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        keepersUpdateInterval: "30",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    },
    ganache: {
        fee: "100000000000000000",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        jobId: "29fa9aa13bf1468788b7cc4a500a45b8",
        fundAmount: "1000000000000000000",
        keepersUpdateInterval: "30",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    },
    goerli: {
        chainId: "5",
        linkToken: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
        keyHash: "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
        vrfCoordinator: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
        oracle: "0xCC79157eb46F5624204f47AB42b3906cAA40eaB7",
        jobId: "ca98366cc7314957b8c012c72f05aeeb",
        fee:        "11000000000000000",
        fundAmount: "11000000000000000", // 0.1
        keepersUpdateInterval: "30",
        subId: "52", // add your subscription Id here!
    },
    sepolia: {
        chainId: "11155111",
        linkToken: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
        ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
        keyHash: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c",
        vrfCoordinator: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
        oracle: "0x3016e3b55bF31cC50E78933Fb536efD2B29ed3bE",
        jobId: "c3c788ba52ba4ee387eeef344d77c793",
        fee:        "11000000000000000",
        fundAmount: "11000000000000000", // 0.1
        keepersUpdateInterval: "30",
        subId: "52", // add your subscription Id here!
    },
    polygon: {
        chainId: "80001",
        linkToken: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
        ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
        keyHash: "0x28f190a5869273c1fd385f672f5d65c7cd17b239ee80dd48505386c8792b6377",
        oracle: "0x40193c8518BB267228Fc409a613bDbD8eC5a97b3",
        jobId: "7d80a6386ef543a3abb52817f6707e3b",
        fee: "100000000000000000",
        fundAmount: "100000000000000000", // 0.1
        keepersUpdateInterval: "30",
        // subId: "52", // add your subscription Id here!
    },
    rinkeby: {
        chainId: "4",
        linkToken: "0x01be23585060835e02b77ef475b0cc51aa1e0709",
        ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
        keyHash: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        vrfCoordinator: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
        oracle: "0xc57b33452b4f7bb189bb5afae9cc4aba1f7a4fd8",
        jobId: "6b88e0402e5d415eb946e528b8e0c7ba",
        fee: "100000000000000000",
        fundAmount: "100000000000000000", // 0.1
        keepersUpdateInterval: "30",
        subId: "0", // add your subscription Id here!
    },
}

const developmentChains = ["test", "development", "ganache"]

module.exports = {
    networkConfig,
    developmentChains,
}
