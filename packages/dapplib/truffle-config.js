require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name release magic horse grace inhale flower gentle'; 
let testAccounts = [
"0x93be34419bc064a7f4e357a6fe64b5f90a4f84ecca8b4c065fe230b69164b36e",
"0x830400ef6f87f3b79f5f0b4ea7d33f3938e195d780c4eef347e47b6f8f91a213",
"0x71304067ec27546d13f9ba21c413c42402f19666bf9773d02af598153731b1a6",
"0xb895a1a3b80ddeca279cc59c14e020f7f199c068afd6a14850805863ca1f0bf3",
"0x3df9c73f6bcfa27f10b1866fcfaf73350d0889b776f74b66a9216cf88482a03e",
"0x5546566addf805ae312c401e2cfa71b82cc21837000f1ab40a36af7f03ee0da1",
"0xe4cf16e239e05dc545eb7509b51dd7026694dd40402ad1f57c1e33b6a400f9e5",
"0x82420af5aa3a24ba13b2566dfee39850ebcae196bfd5461a93725324b9efd098",
"0x229ac188060a7ade4a79b0b955d561f671d869b388d011a7fad9c8e87452d45c",
"0xd4f5b6e677c866c8294634f3b1c8422eda99a08740c31e63ba082beef7388728"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

