import React, { useState } from "react";
import { Box, Input, Button, VStack, Text } from "@chakra-ui/react";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "안녕하세요, 청소 서비스에 대해 문의 드립니다.", sender: "customer" },
    { id: 2, text: "네, 안녕하세요. 어떤 점이 궁금하신가요?", sender: "cleaner" },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        sender: "customer",
      };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  return (
    <Box borderWidth={1} borderRadius="md" p={4} h="400px" overflowY="scroll">
      <VStack spacing={4} align="stretch">
        {messages.map((message) => (
          <Box key={message.id} bg={message.sender === "customer" ? "blue.100" : "gray.100"} borderRadius="md" p={2} alignSelf={message.sender === "customer" ? "flex-end" : "flex-start"}>
            <Text>{message.text}</Text>
          </Box>
        ))}
      </VStack>
      <Box mt={4} display="flex">
        <Input value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="메시지를 입력하세요..." mr={2} />
        <Button onClick={handleSendMessage} colorScheme="blue">
          전송
        </Button>
      </Box>
    </Box>
  );
};

export default ChatWindow;
