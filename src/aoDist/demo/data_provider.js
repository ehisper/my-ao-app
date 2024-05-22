"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = require("../index");
const node_fs_1 = require("node:fs");
const node_process_1 = require("node:process");
const arweave_1 = tslib_1.__importDefault(require("arweave"));
//TODO: Local test with ArLocal(`npx arlocal` to start)
// const arweave = arweave_1.default.init({
//     // host: '127.0.0.1',
//     // port: 1984,
//     // protocol: 'http'
//     host: "arweave.net",
//       port: 443,
//       protocol: "https",
// });
await window.arweaveWallet.connect(
      [
        "ACCESS_ADDRESS",
        "SIGN_TRANSACTION",
      ]
    );
export async function main() {
    // const args = process.argv.slice(2);
    // if (args.length < 1) {
    //     console.log("args: <walletpath>");
    //     (0, node_process_1.exit)(2);
    // }
    // let walletpath = args[0];
    const wallet = window.arweaveWallet;
    let data = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
    let dataTag = { "testtagkey": "testtagvalue" };
    let priceInfo = { price: "1", symbol: "AOCRED" };
    const dataId = await (0, index_1.uploadData)(data, dataTag, priceInfo, wallet);
    console.log(`DATAID=${dataId}`);
}
// main();
//# sourceMappingURL=data_provider.js.map