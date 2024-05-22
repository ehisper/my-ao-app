import Arweave from 'arweave';
export declare const submitDataToAR: (arweave: Arweave, data: string | Uint8Array | ArrayBuffer, wallet: any) => Promise<string>;
export declare const getDataFromAR: (arweave: Arweave, transactionId: string) => Promise<string>;
