import { fromNodeProviderChain } from "./fromNodeProviderChain";
import { fromTemporaryCredentials as fromTemporaryCredentialsBase } from "./fromTemporaryCredentials.base";
export const fromTemporaryCredentials = (options) => {
    return fromTemporaryCredentialsBase(options, fromNodeProviderChain);
};
