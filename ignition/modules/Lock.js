const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Token", (m) => {
  const lock = m.contract("Joseph", ["0x0ceD319678765f119c9e8D67EBAbf504dD4ed77d"]);

  return { lock };
});

