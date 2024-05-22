"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = require("../index");
const node_process_1 = require("node:process");
const node_fs_1 = require("node:fs");
const arweave_1 = tslib_1.__importDefault(require("arweave"));
//TODO: Local test with ArLocal(`npx arlocal` to start)
const arweave = arweave_1.default.init({
    host: '127.0.0.1',
    port: 1984,
    protocol: 'http'
});
async function main() {
    const args = process.argv.slice(2);
    if (args.length < 1) {
        console.log("args: <walletpath> <dataId>");
        (0, node_process_1.exit)(2);
    }
    let walletpath = args[0];
    let dataId = args[1];
    console.log(`walletpath=${walletpath}`);
    console.log(`    dataId=${dataId}`);
    // step 1: generate key pair
    let key = await (0, index_1.generateKey)();
    // step 2: submit a task(transfers is also included)
    const wallet = JSON.parse((0, node_fs_1.readFileSync)(walletpath).toString());
    const taskId = await (0, index_1.submitTask)(dataId, key.pk, wallet);
    console.log(`TASKID=${taskId}`);
    // step 3: get the result
    const [err, data] = await (0, index_1.getResult)(taskId, key.sk, arweave).then(data => [null, data]).catch(err => [err, null]);
    console.log(`err=${err}`);
    console.log(`data=${data}`);
    // You can also easily combine steps 3 and 4 by calling submitTaskAndGetResult, as follows:
    /*{
      const [err, data] = await submitTaskAndGetResult(dataId, key.pk, key.sk, wallet, arweave).then(data => [null, data]).catch(err => [err, null]);
      console.log(`err=${err}`);
      console.log(`data=${data}`);
    }*/
}
main();
//# sourceMappingURL=data_user.js.map