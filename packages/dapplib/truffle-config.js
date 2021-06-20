require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food walnut deny maze purity coral light army genius'; 
let testAccounts = [
"0xb816fafe755b3007cbfa92f07d8bf08f840282f9eae39e7a279f1645d7094878",
"0x72e763219584e7a7308e71122a466c17631868ac3fb79a02374c7be4a6bb72a8",
"0xba987085ec054060dd152f9abbfcdc4f603716eb62999881977fa77d272744cd",
"0x0fcfb7d086eba28ba06469b5ff1fb21a0e3a1ed15750afa38dd8fb8c9d90a472",
"0x045b596b4bfb4e6040f7c5415f8ef9cdca5b82c439b193b494bb25e91d3ae643",
"0xeea7683c038e45ba3d2bfebcb6c4db520e9edb68484aad66a820aac2868881c6",
"0x8d0019474af8e5972d28f8d9066f957bd9da53dcf6482872662bf68890d1cae6",
"0x2fa1f6e19cdb8b933d6040f4d26b79762e39d10b2661ea2330610fc51101fad8",
"0x7e595f44d14ca3821a0a77ce2d0d77bbf6edd5605070c797e46e7de964b0cdfd",
"0x078330b0f1d617cb9a4f6d79c00a4ccbca9cc93ed3b3d06a4389b9c4fe0a101b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

