"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addWhiteList = exports.nodes = exports.update = exports.register = void 0;
const aoconnect_1 = require("@permaweb/aoconnect");
const config_1 = require("../config");
const utils_1 = require("./utils");
const register_or_update = async (action, name, pk, desc, signer) => {
    const msgId = await (0, aoconnect_1.message)({
        process: config_1.NODEREGISTRY_PROCESS_ID,
        tags: [
            { name: "Action", value: action },
            { name: "Name", value: name },
            { name: "Desc", value: desc },
        ],
        signer: signer,
        data: pk,
    });
    let Result = await (0, aoconnect_1.result)({
        message: msgId,
        process: config_1.NODEREGISTRY_PROCESS_ID,
    });
    const res = (0, utils_1.getMessageResultData)(Result);
    return res;
};
const register = async (name, pk, desc, signer) => {
    return await register_or_update('Register', name, pk, desc, signer);
};
exports.register = register;
const update = async (name, pk, desc, signer) => {
    return await register_or_update('Update', name, pk, desc, signer);
};
exports.update = update;
const nodes = async () => {
    let { Messages } = await (0, aoconnect_1.dryrun)({
        process: config_1.NODEREGISTRY_PROCESS_ID,
        tags: [
            { name: "Action", value: "Nodes" },
        ],
    });
    const nodes = Messages[0].Data;
    return nodes;
};
exports.nodes = nodes;
const addWhiteList = async (addr, signer) => {
    const msgId = await (0, aoconnect_1.message)({
        process: config_1.NODEREGISTRY_PROCESS_ID,
        tags: [
            { name: "Action", value: "AddWhiteList" },
            { name: "Address", value: addr },
        ],
        signer: signer,
    });
    let Result = await (0, aoconnect_1.result)({
        message: msgId,
        process: config_1.NODEREGISTRY_PROCESS_ID,
    });
    const res = (0, utils_1.getMessageResultData)(Result);
    return res;
};
exports.addWhiteList = addWhiteList;
//# sourceMappingURL=noderegistry.js.map