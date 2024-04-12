import React from "react";
import { Box, HStack, Icon, Text, IconButton } from "@chakra-ui/react";
import { FaBookmark, FaComments, FaCog, FaHistory, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BottomTab = () => {
  const navigate = useNavigate();

  return (
    <Box position="fixed" bottom={0} left={0} right={0} bg="white" py={2} borderTopWidth={1} zIndex={1000}>
      <HStack justify="space-around">
        <Box textAlign="center" onClick={() => navigate("/my-reservations")}>
          <Icon as={FaBookmark} boxSize={6} />
          <Text fontSize="xs">내 예약</Text>
        </Box>
        <Box textAlign="center" onClick={() => navigate("/usage-history")}>
          <Icon as={FaHistory} boxSize={6} />
          <Text fontSize="xs">이용내역</Text>
        </Box>
        <Box textAlign="center" onClick={() => navigate("/chat")}>
          <Icon as={FaComments} boxSize={6} />
          <Text fontSize="xs">채팅</Text>
        </Box>
        <Box textAlign="center" onClick={() => navigate("/usage-history")}>
          <Icon as={FaHistory} boxSize={6} />
          <Text fontSize="xs">이용내역</Text>
        </Box>
        <Box textAlign="center" onClick={() => navigate("/settings")}>
          <Icon as={FaCog} boxSize={6} />
          <Text fontSize="xs">설정</Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default BottomTab;
