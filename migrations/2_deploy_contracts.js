var ZombieFactory = artifacts.require("./zombieFactory.sol");
var ZombieFeeding = artifacts.require("./zombieFeeding.sol");
var ZombieHelper = artifacts.require("./zombieHelper.sol");
var ZombieAttack = artifacts.require("./zombieAttack.sol");
var ZombieOwnership = artifacts.require("./zombieOwnership.sol");

module.exports = function(deployer) {
  deployer.deploy(ZombieFactory);
  deployer.deploy(ZombieFeeding);
  deployer.deploy(ZombieHelper);
  deployer.deploy(ZombieAttack);
  deployer.deploy(ZombieOwnership);
};