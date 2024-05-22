"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataFromAR = exports.submitDataToAR = void 0;
// submit data to AR
const submitDataToAR = async (arweave, data, wallet) => {
    let createTransactionParams = [
        {
            data: data
        }
    ];
    let signParams = [undefined];
    if (typeof process !== 'undefined' && process.versions && process.versions.node) {
        // This is Node.js
        createTransactionParams[1] = wallet;
        signParams[1] = wallet;
    }
    // Create a data transaction
    let transaction = await arweave.createTransaction(...createTransactionParams);
    signParams[0] = transaction;
    // Optional. Add tags to a transaction
    // GraphQL uses tags when searching for transactions.
    transaction.addTag('Type', 'PADO-EncryptedData');
    // Sign a transaction
    await arweave.transactions.sign(...signParams);
    // Submit a transaction
    // {
    //   // way1: for small
    //   const response = await arweave.transactions.post(transaction);
    //   console.log(`response.status: ${response.status}`);
    // }
    {
        // way2: for big
        let uploader = await arweave.transactions.getUploader(transaction);
        while (!uploader.isComplete) {
            await uploader.uploadChunk();
            console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`);
        }
    }
    return transaction.id;
};
exports.submitDataToAR = submitDataToAR;
const getDataFromAR = async (arweave, transactionId) => {
    const res = (await arweave.transactions.getData(transactionId, { decode: true, string: true }));
    return res;
};
exports.getDataFromAR = getDataFromAR;
//# sourceMappingURL=padoarweave.js.map