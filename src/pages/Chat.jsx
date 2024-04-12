import React from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";



const Chat = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate("/home")} mr={2} />
        <Heading size="xl" textAlign="center" flexGrow={1}>
          채팅
        </Heading>
      </Box>
      <Box textAlign="center" mt={8}>
        Chat content will be added here
      </Box>
    </Box>
  );
};

export default Chat;
