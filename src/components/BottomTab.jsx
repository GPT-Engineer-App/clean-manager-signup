import React from "react";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaCalendar, FaBookmark, FaComments, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BottomTab = () => {
  const navigate = useNavigate();

  return (
    <Box position="fixed" bottom={0} left={0} right={0} bg="white" py={2} borderTopWidth={1} zIndex={1000}>
      <HStack justify="space-around">
        <Box textAlign="center" onClick={() => navigate("/my-schedule")}>
          <Icon as={FaCalendar} boxSize={6} />
          <Text fontSize="xs">내일정</Text>
        </Box>
        <Box textAlign="center" onClick={() => navigate("/reservation-management")}>
          <Icon as={FaBookmark} boxSize={6} />
          <Text fontSize="xs">예약관리</Text>
        </Box>
        <Box textAlign="center" onClick={() => navigate("/chat")}>
          <Icon as={FaComments} boxSize={6} />
          <Text fontSize="xs">채팅</Text>
        </Box>
        <Box textAlign="center" onClick={() => navigate("/settings")}>
          <Icon as={FaCog} boxSize={6} />
          <Text fontSize="xs">설정</Text>
        </Box>
        <Box textAlign="center" onClick={() => navigate("/my-reservations")}>
          <Icon as={FaBookmark} boxSize={6} />
          <Text fontSize="xs">내 예약</Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default BottomTab;
