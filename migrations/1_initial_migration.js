const GccToken = artifacts.require("./GccToken.sol");

module.exports = function(deployer) {
  deployer.deploy(GccToken);
};
