// MySDK/src/api.js
import { getHostname, getApiId, getApiSecret } from './config';

const getChatId = async () => {
  const response = await fetch(`${getHostname()}/getChatId`, {
    method: 'GET',
    headers: {
      'Api-Id': getApiId(),
      'Api-Secret': getApiSecret(),
    },
  });
  return response.json();
};

const getChatResponse = async (chatId, message) => {
  const response = await fetch(`${getHostname()}/getChatResponse`, {
    method: 'POST',
    headers: {
      'Api-Id': getApiId(),
      'Api-Secret': getApiSecret(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      message,
    }),
  });
  return response.json();
};

const endChat = async (chatId) => {
  const response = await fetch(`${getHostname()}/endChat`, {
    method: 'POST',
    headers: {
      'Api-Id': getApiId(),
      'Api-Secret': getApiSecret(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
    }),
  });
  return response.json();
};

export { getChatId, getChatResponse, endChat };
