import Blockchain from "./blockchain";

let adamCoin = new Blockchain();

let user1WalletAddress = '0xBcd4042DE499D14e55001CcbB24a551F3b954096';
let user2WalletAddress = '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720';

adamCoin.createNewTransaction(
  {
    amount: 100,
    sender: user1WalletAddress,
    recipient: user2WalletAddress
  }
);

adamCoin.createNewBlock();

console.log(adamCoin)
console.log("\n");
console.log("Second Block Transactions", adamCoin.chain[1].transactions);