
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    // mainnet
    const wethAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

    // testnet
    //const wethAddress = "0x094616f0bdfb0b526bd735bf66eca0ad254ca81f";


    await deploy("Zap", {
        from: deployer,
        args: [wethAddress],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["Zap"];