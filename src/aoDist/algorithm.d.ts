export declare const THRESHOLD_2_3: {
    t: number;
    n: number;
    indices: number[];
};
export declare const keygen: (param_obj?: any) => any;
export declare const encrypt: (publicKeys: string[], data: Uint8Array, threshold?: any) => any;
export declare const reencrypt: (enc_sk: string, node_sk: string, consumer_pk: string, threshold?: any) => any;
export declare const decrypt: (reenc_sks: string[], consumer_sk: string, nonce: string, enc_msg: string, chosen_indices?: any, threshold?: any) => any;
