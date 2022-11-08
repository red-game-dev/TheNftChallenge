async function main() {
  const TheChallengeToken = await ethers.getContractFactory("TheChallengeToken");

  // Start deployment, returning a promise that resolves to a contract object
  const the_challenge = await TheChallengeToken.deploy("TheChallengeToken!");   
  console.log("Contract deployed to address:", the_challenge.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });