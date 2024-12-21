import SHA256 from 'sha256'

interface Block {
  index: number;
  timestamp: number;
  transactions: Transaction[];
  nonce: number;
  hash: string;
  previousBlockHash: string;
}

interface Transaction {
  amount: number;
  sender: string;
  recipient: string;
}

class Blockchain {
  chain: Block[];
  pendingTransactions: Transaction[];

  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
  }

  createGenesisBlock(): Block {
    return {
      index: 1,
      timestamp: Date.now(),
      transactions: [],
      nonce: 0,
      hash: "hash",
      previousBlockHash: "previousBlockHash",
    };
  }

  getLastBlock(): Block {
    return this.chain[this.chain.length - 1];
  }

  generateHash(
    previousBlockHash: string,
    timestamp: number,
    pendingTransactions: Transaction[]
  ): { hash: string; nonce: number } {
    let hash = "";
    let nonce = 0;

    while (hash.substring(0, 3) !== "000") {
      nonce++;
      hash = SHA256(
        previousBlockHash + timestamp + JSON.stringify(pendingTransactions) + nonce
      ).toString();
    }

    return { hash, nonce };
  }

  createNewTransaction({amount, sender, recipient}: Transaction): void {
    const newTransaction: Transaction = {
      amount,
      sender,
      recipient,
    };

    this.pendingTransactions.push(newTransaction);
  }

  createNewBlock(): Block {
    const timestamp = Date.now();
    const transactions = this.pendingTransactions;
    const previousBlockHash = this.getLastBlock().hash;
    const generatedHash = this.generateHash(
      previousBlockHash,
      timestamp,
      transactions
    );

    const newBlock: Block = {
      index: this.chain.length + 1,
      timestamp,
      transactions,
      nonce: generatedHash.nonce,
      hash: generatedHash.hash,
      previousBlockHash,
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
  }
}

export default Blockchain;
