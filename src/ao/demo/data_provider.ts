// import { uploadData } from "../index";
// import { readFileSync } from "node:fs";
// import { exit } from "node:process";
// import Arweave from "arweave";
// @ts-ignore
import { uploadData } from "@xudean/pado-ao-sdk";
/**
 * Usage:
 *   node /path/to/data_provider.js <your-wallet-path>
 */

export async function main() {
  const res = await window.arweaveWallet.connect(
      // request permissions to read the active address
      [
        "ACCESS_ADDRESS",
        "SIGN_TRANSACTION",
      ]
    );
  // const args = process.argv.slice(2)
  // if (args.length < 1) {
  //   console.log("args: <walletpath>");
  //   exit(2);
  // }
  // let walletpath = args[0];
  // console.log(`walletpath=${walletpath}`);

  // load your arweave wallet
  // const wallet = JSON.parse(readFileSync(walletpath).toString());
  const wallet = window.arweaveWallet

  // init arweave (ArLocal)
  // const arweave = Arweave.init({
  //   host: '127.0.0.1',
  //   port: 1984,
  //   protocol: 'http'
  // });


  // prepare some data
  let data = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);

  // tag for the data
  let dataTag = { "testtagkey": "testtagvalue" };

  // price for the data
  let priceInfo = { price: "100", symbol: "AOCRED" };

  // upload your data
  const dataId = await uploadData(data, dataTag, priceInfo, wallet);
  console.log(`DATAID=${dataId}`);
}
// main();
