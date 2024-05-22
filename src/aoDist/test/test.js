"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const noderegistry_1 = require("../processes/noderegistry");
const node_fs_1 = require("node:fs");
const aoconnect_1 = require("@permaweb/aoconnect");
const addWhiteNodeOwner = async (addr) => {
    const wallet = JSON.parse((0, node_fs_1.readFileSync)("/Users/fksyuan/.aos.json").toString());
    const signer = (0, aoconnect_1.createDataItemSigner)(wallet);
    const res = await (0, noderegistry_1.addWhiteList)(addr, signer);
    console.log("addWhiteNodeOwner res=", res);
};
addWhiteNodeOwner("lutTYfSqBYttLyHGU1B7k3wPChVqFJmOe6c6eOLtj1M");
addWhiteNodeOwner("XLmW13GJTV5Xn7K3jyNZQ4Dg5yHnfbzwtDmdE3DB92s");
addWhiteNodeOwner("raZlGBd-pj2n0svwMOIV3WZePDVvTEV-PCYHJKlSrQ8");
//# sourceMappingURL=test.js.map