# chat_bot_sdk

## Usage Example

To use the chat_bot_sdk in your React Native application, follow these steps:

```jsx
// App.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { setApiConfig, getChatId, getChatResponse, endChat } from 'chat_bot_sdk';

const App = () => {
  useEffect(() => {
    // Set your API configuration here
    setApiConfig('https://example.com', 'YOUR_API_ID', 'YOUR_API_SECRET');

    // Call your SDK functions
    const fetchData = async () => {
      try {
        const chatId = await getChatId();
        console.log('Chat ID:', chatId);

        const response = await getChatResponse(chatId, 'Hello!');
        console.log('Chat Response:', response);

        const endResult = await endChat(chatId);
        console.log('End Result:', endResult);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Check the console for SDK API results.</Text>
    </View>
  );
};

export default App;
