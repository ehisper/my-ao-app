"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = exports.getCompletedTasks = exports.getCompletedTasksById = exports.reportResult = exports.getComputationPrice = exports.getPendingTasks = exports.submit = void 0;
const aoconnect_1 = require("@permaweb/aoconnect");
const config_1 = require("../config");
const utils_1 = require("./utils");
const submit = async (taskType, dataId, inputData, computeLimit, memoryLimit, computeNodes, signer) => {
    const msgId = await (0, aoconnect_1.message)({
        process: config_1.TASKS_PROCESS_ID,
        tags: [
            { name: "Action", value: "Submit" },
            { name: "TaskType", value: taskType },
            { name: "DataId", value: dataId },
            { name: "ComputeLimit", value: computeLimit },
            { name: "MemoryLimit", value: memoryLimit },
            { name: "ComputeNodes", value: JSON.stringify(computeNodes) },
        ],
        signer: signer,
        data: inputData,
    });
    let Result = await (0, aoconnect_1.result)({
        message: msgId,
        process: config_1.TASKS_PROCESS_ID,
    });
    const res = (0, utils_1.getMessageResultData)(Result);
    return res;
};
exports.submit = submit;
const getPendingTasks = async () => {
    let { Messages } = await (0, aoconnect_1.dryrun)({
        process: config_1.TASKS_PROCESS_ID,
        tags: [
            { name: "Action", value: "GetPendingTasks" },
        ],
    });
    const res = Messages[0].Data;
    return res;
};
exports.getPendingTasks = getPendingTasks;
const getComputationPrice = async () => {
    const { Messages } = await (0, aoconnect_1.dryrun)({
        process: config_1.TASKS_PROCESS_ID,
        tags: [
            { name: 'Action', value: 'ComputationPrice' },
        ],
    });
    const res = Messages[0].Data;
    return res;
};
exports.getComputationPrice = getComputationPrice;
const reportResult = async (taskId, nodeName, taskResult, signer) => {
    const msgId = await (0, aoconnect_1.message)({
        process: config_1.TASKS_PROCESS_ID,
        tags: [
            { name: "Action", value: "ReportResult" },
            { name: "TaskId", value: taskId },
            { name: "NodeName", value: nodeName },
        ],
        signer: signer,
        data: taskResult,
    });
    let Result = await (0, aoconnect_1.result)({
        message: msgId,
        process: config_1.TASKS_PROCESS_ID,
    });
    const res = (0, utils_1.getMessageResultData)(Result);
    return res;
};
exports.reportResult = reportResult;
const getCompletedTasksById = async (taskId) => {
    let { Messages } = await (0, aoconnect_1.dryrun)({
        process: config_1.TASKS_PROCESS_ID,
        tags: [
            { name: "Action", value: "GetCompletedTaskById" },
            { name: "TaskId", value: taskId },
        ],
    });
    //console.log("getCompletedTasksById Messages=", Messages);
    let res = "{}";
    if (Messages[0] && Messages[0].Data) {
        res = Messages[0].Data;
    }
    return res;
};
exports.getCompletedTasksById = getCompletedTasksById;
const getCompletedTasks = async () => {
    let { Messages } = await (0, aoconnect_1.dryrun)({
        process: config_1.TASKS_PROCESS_ID,
        tags: [
            { name: "Action", value: "GetCompletedTasks" },
        ],
    });
    const res = Messages[0].Data;
    return res;
};
exports.getCompletedTasks = getCompletedTasks;
const getAllTasks = async () => {
    let { Messages } = await (0, aoconnect_1.dryrun)({
        process: config_1.TASKS_PROCESS_ID,
        tags: [
            { name: "Action", value: "GetAllTasks" },
        ],
    });
    const res = Messages[0].Data;
    return res;
};
exports.getAllTasks = getAllTasks;
//# sourceMappingURL=tasks.js.map