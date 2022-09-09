import  {ethers, upgrades} from "hardhat"

const PROXY = "0x4cEebE29B8754d0636aBc2e41B49B44BCe9Ef68C"

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    const box = await upgrades.upgradeProxy(PROXY, BoxV2)

    console.log("Successfully upgrade proxy contract to: ", box.address)
}

main()