import { getHostname, getApiId, getApiSecret } from './config';

const getChatId = async () => {
  const response = await fetch(`${getHostname()}/api/getChatId`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_id: getApiId(),
      api_secret: getApiSecret(),
    }),
  });
  return response.json();
};

const getChatResponse = async (chatId, message) => {
  const response = await fetch(`${getHostname()}/api/getChatResponse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_id: getApiId(),
      api_secret: getApiSecret(),
      chat_id: chatId,
      message: message,
    }),
  });
  return response.json();
};

const endChat = async (chatId) => {
  const response = await fetch(`${getHostname()}/api/endChat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_id: getApiId(),
      api_secret: getApiSecret(),
      chat_id: chatId,
    }),
  });
  return response.json();
};

export { getChatId, getChatResponse, endChat };
