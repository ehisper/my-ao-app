"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferAOCREDToTask = exports.transfer = exports.getMessageResultData = exports.getTag = void 0;
const aoconnect_1 = require("@permaweb/aoconnect");
const config_1 = require("../config");
const getTag = (Message, Tag) => {
    const Tags = Message.Tags;
    for (let theTag of Tags) {
        if (theTag.name === Tag) {
            return theTag.value;
        }
    }
    return null;
};
exports.getTag = getTag;
const getMessageResultData = (Result /*type:MessageResult*/, showResult = false) => {
    if (showResult) {
        console.log("Result:", JSON.stringify(Result));
    }
    if (Result.Error) {
        //TODO: Recognizing different errrors
        throw Result.Error;
    }
    let Messages = Result.Messages;
    for (let Message of Messages) {
        let Tags = Message.Tags;
        for (let Tag of Tags) {
            if (Tag.name === "Error") {
                throw Tag.value;
            }
        }
    }
    for (let Message of Messages) {
        if (Message.Data) {
            return Message.Data;
        }
    }
    return undefined;
};
exports.getMessageResultData = getMessageResultData;
const transfer = async (from, recipient, quantity, signer) => {
    let msgId = await (0, aoconnect_1.message)({
        "process": from,
        "signer": signer,
        "tags": [
            { "name": "Action", "value": "Transfer" },
            { "name": "Recipient", "value": recipient },
            { "name": "Quantity", "value": quantity },
        ]
    });
    let Result = await (0, aoconnect_1.result)({
        "process": from,
        "message": msgId,
    });
    if (Result.Error) {
        console.log(Result.Error);
    }
    let Messages = Result.Messages;
    if ((0, exports.getTag)(Messages[0], "Error")) {
        throw (0, exports.getTag)(Messages[0], "Error");
    }
    console.log("Messages", Messages);
    const res = Messages[0].Data;
    return res;
};
exports.transfer = transfer;
const transferAOCREDToTask = async (quantity, signer) => {
    const res = await (0, exports.transfer)(config_1.AOCRED_PROCESS_ID, config_1.TASKS_PROCESS_ID, quantity, signer);
    return res;
};
exports.transferAOCREDToTask = transferAOCREDToTask;
//# sourceMappingURL=utils.js.map