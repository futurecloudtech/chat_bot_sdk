// MySDK/src/config.js
let hostname = '';
let apiId = '';
let apiSecret = '';

const setApiConfig = (newHostname, newApiId, newApiSecret) => {
  hostname = newHostname;
  apiId = newApiId;
  apiSecret = newApiSecret;
};

const getHostname = () => {
  return hostname;
};

const getApiId = () => {
  return apiId;
};

const getApiSecret = () => {
  return apiSecret;
};

export { setApiConfig, getHostname, getApiId, getApiSecret };
