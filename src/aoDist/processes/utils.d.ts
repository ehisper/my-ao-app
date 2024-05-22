export declare const getTag: (Message: any, Tag: string) => any;
export declare const getMessageResultData: (Result: any, showResult?: boolean) => any;
export declare const transfer: (from: string, recipient: string, quantity: string, signer: any) => Promise<any>;
export declare const transferAOCREDToTask: (quantity: string, signer: any) => Promise<any>;
