const { ethers } = require('ethers');

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL || 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Get the signer (used for sending transactions)
const getSigner = () => {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  return wallet.connect(provider);
};

// ERC20 Token ABI (simplified)
const ERC20_ABI = [
  'function balanceOf(address owner) view returns (uint256)',
  'function transfer(address to, uint amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
];

module.exports = { provider, getSigner, ERC20_ABI };
