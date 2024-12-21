import Blockchain from "./blockchain";

let adamCoin = new Blockchain();

let user1WalletAddress = '0xBcd4042DE499D14e55001CcbB24a551F3b954096';
let user2WalletAddress = '0xa0Ee7A142d267C1f36714E4a8F75612F20a79720';

adamCoin.createNewTransaction(
  100,
  user1WalletAddress,
  user2WalletAddress
);

console.log(adamCoin)