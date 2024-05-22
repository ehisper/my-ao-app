"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.reencrypt = exports.encrypt = exports.keygen = exports.THRESHOLD_2_3 = void 0;
const tslib_1 = require("tslib");
const lhe_1 = tslib_1.__importDefault(require("./lib/lhe"));
exports.THRESHOLD_2_3 = { t: 2, n: 3, indices: [1, 2, 3] };
const lhe_call = (func, param_obj) => {
    let param_json = JSON.stringify(param_obj);
    let param_ptr = lhe_1.default.allocateUTF8(param_json);
    let cptr = func(param_ptr);
    lhe_1.default._free(param_ptr);
    let ret_json = lhe_1.default.UTF8ToString(cptr);
    lhe_1.default._free_cptr(cptr);
    let ret_obj = JSON.parse(ret_json);
    return ret_obj;
};
const keygen = (param_obj = exports.THRESHOLD_2_3) => {
    return lhe_call(lhe_1.default._keygen, param_obj);
};
exports.keygen = keygen;
const encrypt = (publicKeys, data, threshold = exports.THRESHOLD_2_3) => {
    let param_obj = { ...threshold, node_pks: publicKeys, msg: Array.from(data) };
    return lhe_call(lhe_1.default._encrypt, param_obj);
};
exports.encrypt = encrypt;
const reencrypt = (enc_sk, node_sk, consumer_pk, threshold = exports.THRESHOLD_2_3) => {
    let param_obj = { ...threshold, enc_sk: enc_sk, node_sk: node_sk, consumer_pk: consumer_pk };
    return lhe_call(lhe_1.default._reencrypt, param_obj);
};
exports.reencrypt = reencrypt;
const decrypt = (reenc_sks, consumer_sk, nonce, enc_msg, chosen_indices = [1, 2], threshold = exports.THRESHOLD_2_3) => {
    let param_obj = {
        ...threshold, reenc_sks: reenc_sks, consumer_sk: consumer_sk,
        nonce: nonce, enc_msg: enc_msg, chosen_indices: chosen_indices
    };
    return lhe_call(lhe_1.default._decrypt, param_obj);
};
exports.decrypt = decrypt;
//# sourceMappingURL=algorithm.js.map