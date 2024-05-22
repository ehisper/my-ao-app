export declare const submit: (taskType: string, dataId: string, inputData: string, computeLimit: string, memoryLimit: string, computeNodes: string[], signer: any) => Promise<any>;
export declare const getPendingTasks: () => Promise<any>;
export declare const getComputationPrice: () => Promise<any>;
export declare const reportResult: (taskId: string, nodeName: string, taskResult: string, signer: any) => Promise<any>;
export declare const getCompletedTasksById: (taskId: string) => Promise<string>;
export declare const getCompletedTasks: () => Promise<any>;
export declare const getAllTasks: () => Promise<any>;
