"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromTemporaryCredentials = void 0;
const fromNodeProviderChain_1 = require("./fromNodeProviderChain");
const fromTemporaryCredentials_base_1 = require("./fromTemporaryCredentials.base");
const fromTemporaryCredentials = (options) => {
    return (0, fromTemporaryCredentials_base_1.fromTemporaryCredentials)(options, fromNodeProviderChain_1.fromNodeProviderChain);
};
exports.fromTemporaryCredentials = fromTemporaryCredentials;
