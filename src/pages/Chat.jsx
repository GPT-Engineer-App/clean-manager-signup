import React, { useState } from "react";
import { Box, Heading, IconButton, Input, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Chat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "customer" }]);
      setMessage("");
    }
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={4}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate("/customer-home")} mr={2} />
        <Heading size="lg" textAlign="center" flexGrow={1}>
          채팅
        </Heading>
      </Box>
      <Box height="70vh" overflowY="scroll" p={4}>
        {messages.map((msg, index) => (
          <Box key={index} mb={4} textAlign={msg.sender === "customer" ? "right" : "left"}>
            <Text backgroundColor={msg.sender === "customer" ? "blue.100" : "gray.100"} display="inline-block" borderRadius="md" p={2}>
              {msg.text}
            </Text>
          </Box>
        ))}
      </Box>
      <Box display="flex" p={4}>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} mr={4} />
        <Button colorScheme="blue" onClick={handleSendMessage}>
          전송
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;
