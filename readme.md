# chat_bot_sdk

## Usage Example

To use the chat_bot_sdk in your React Native application, follow these steps:

```jsx
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { setApiConfig, getChatId, getChatResponse, endChat } from 'chat_bot_sdk';


const App = () => {
  const [responseData, setResponseData] = useState(null);
  const [responseData2, setResponseData2] = useState(null);
  const [responseData3, setResponseData3] = useState(null);
  useEffect(() => {
    // Set your API configuration here
    setApiConfig('https://chatbot.balmydev.xyz', 'YOUR_API_ID', 'YOUR_API_SECRET');

    // Call your SDK functions
    const fetchData = async () => {
      try {
        const chatId = await getChatId();
        console.log('Chat ID:', chatId);
        setResponseData(chatId);
        const response = await getChatResponse(chatId.chat_id, 'Hello!');
        console.log('Chat Response:', response);
        setResponseData2(response);
        const endResult = await endChat(chatId.chat_id);
        console.log('End Result:', endResult);
        setResponseData3(endResult);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{responseData ? JSON.stringify(responseData) : 'Loading...'}</Text>
      <Text>{responseData2 ? JSON.stringify(responseData2) : 'Loading...'}</Text>
      <Text>{responseData3 ? JSON.stringify(responseData3) : 'Loading...'}</Text>
    </View>
  );
};

export default App;
