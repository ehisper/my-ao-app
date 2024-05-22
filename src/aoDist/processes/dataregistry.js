"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allData = exports.getDataById = exports.register = void 0;
const aoconnect_1 = require("@permaweb/aoconnect");
const config_1 = require("../config");
const utils_1 = require("./utils");
const register = async (dataTag, price, exData, signer) => {
    const msgId = await (0, aoconnect_1.message)({
        process: config_1.DATAREGISTRY_PROCESS_ID,
        tags: [
            { name: "Action", value: "Register" },
            { name: "DataTag", value: dataTag },
            { name: "Price", value: price },
        ],
        signer: signer,
        data: exData,
    });
    let Result = await (0, aoconnect_1.result)({
        message: msgId,
        process: config_1.DATAREGISTRY_PROCESS_ID,
    });
    const res = (0, utils_1.getMessageResultData)(Result);
    return res;
};
exports.register = register;
const getDataById = async (dataId) => {
    let { Messages } = await (0, aoconnect_1.dryrun)({
        process: config_1.DATAREGISTRY_PROCESS_ID,
        tags: [
            { name: "Action", value: "GetDataById" },
            { name: "DataId", value: dataId },
        ],
    });
    const res = Messages[0].Data;
    return res;
};
exports.getDataById = getDataById;
const allData = async () => {
    let { Messages } = await (0, aoconnect_1.dryrun)({
        process: config_1.DATAREGISTRY_PROCESS_ID,
        tags: [
            { name: "Action", value: "AllData" },
        ],
    });
    const res = Messages[0].Data;
    return res;
};
exports.allData = allData;
//# sourceMappingURL=dataregistry.js.map