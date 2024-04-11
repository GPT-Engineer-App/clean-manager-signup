import React from "react";
import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { FaCalendar, FaBookmark, FaComments, FaCog } from "react-icons/fa";

const BottomTab = () => {
  return (
    <Box position="fixed" bottom={0} left={0} right={0} bg="white" py={2} borderTopWidth={1}>
      <HStack justify="space-around">
        <Box textAlign="center">
          <Icon as={FaCalendar} boxSize={6} />
          <Text fontSize="xs">내일정</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaBookmark} boxSize={6} />
          <Text fontSize="xs">예약관리</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaComments} boxSize={6} />
          <Text fontSize="xs">채팅</Text>
        </Box>
        <Box textAlign="center">
          <Icon as={FaCog} boxSize={6} />
          <Text fontSize="xs">설정</Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default BottomTab;
