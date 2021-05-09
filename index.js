const bip39 = require('bip39')
const HDWallet = require('ethereum-hdwallet')

const mnemonic = bip39.generateMnemonic()
const entropy = bip39.mnemonicToEntropy(mnemonic)
const hdwallet = HDWallet.fromMnemonic(mnemonic)
const mywallet = hdwallet.derive(`m/44'/60'/0'/0`)

for (let i = 0; i < 20; i++) {
  console.log(`${i}:`, `0x${mywallet.derive(i).getAddress().toString('hex')}`)
}
// console.log(`0x${mywallet.derive(0).getAddress().toString('hex')}`)

console.log(mnemonic)
console.log(entropy)
// console.log(bip39.wordlists)
console.log('=======================================')
