const { expect } = require("chai");

describe("SimpleContract (modified)", function () {
    let SimpleContract, contract, owner, otherAccount;

    beforeEach(async function () {
        [owner, otherAccount] = await ethers.getSigners();
        SimpleContract = await ethers.getContractFactory("SimpleContract");
        contract = await SimpleContract.deploy(100);
    });

    it("Should initialize storedValue and owner correctly", async function () {
        expect(await contract.storedValue()).to.equal(100);
        expect(await contract.owner()).to.equal(owner.address);
    });

    it("Should allow the owner to change storedValue", async function () {
        await contract.setValue(200);
        expect(await contract.storedValue()).to.equal(200);
    });

    it("Should prevent non-owners from changing storedValue", async function () {
        await expect(
            contract.connect(otherAccount).setValue(300)
        ).to.be.revertedWith("Only owner can set the value");
    });
});
