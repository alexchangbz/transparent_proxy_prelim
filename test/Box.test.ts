import { expect } from "chai"
import { ethers, upgrades } from "hardhat"

describe("Box", function () {
  it("Should return the value store in Box Contract", async function () {
    const Box = await ethers.getContractFactory("Box");
    const box = await upgrades.deployProxy(Box, [42], {
        initializer: "initialize"
    })
    await box.deployed()

    expect(await box.value()).to.equal(42);
  });
});
