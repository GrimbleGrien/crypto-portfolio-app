const ethers = require('ethers');
const Token = require('../models/token');
const { ERC20_ABI, provider, getSigner } = require('../utils/ethers');

// @desc    Check Token Allowance
// @route   GET /api/tokens/allowance
// @access  Private
const checkAllowance = async (req, res) => {
  const { contractAddress, ownerAddress, spenderAddress } = req.query;

  try {
    const contract = new ethers.Contract(contractAddress, ERC20_ABI, provider);
    const allowance = await contract.allowance(ownerAddress, spenderAddress);

    res.json({ allowance: ethers.utils.formatUnits(allowance, 18) });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Transfer Tokens
// @route   POST /api/tokens/transfer
// @access  Private
const transferTokens = async (req, res) => {
  const { contractAddress, recipientAddress, amount } = req.body;

  try {
    const signer = getSigner();
    const contract = new ethers.Contract(contractAddress, ERC20_ABI, signer);
    const tx = await contract.transfer(recipientAddress, ethers.utils.parseUnits(amount, 18));
    await tx.wait();

    res.json({ success: true, transactionHash: tx.hash });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { checkAllowance, transferTokens };
