import React from 'react';
import { Box, Text, VStack, Icon, HStack } from "@chakra-ui/react";
import { FaArrowLeft, FaUser, FaBell, FaQuestionCircle, FaEnvelope, FaComment, FaFileAlt, FaLock, FaBellSlash } from 'react-icons/fa';

const Settings = () => {
  return (
    <Box p={4}>
      <HStack mb={8}>
        <Icon as={FaArrowLeft} boxSize={6} />
        <Text fontSize="2xl" fontWeight="bold">Settings</Text>
      </HStack>
      <VStack spacing={6} align="stretch">
        <HStack><Icon as={FaUser} boxSize={6} /><Text fontSize="xl">Edit Profile</Text></HStack>
        <HStack><Icon as={FaBell} boxSize={6} /><Text fontSize="xl">Notices</Text></HStack>
        <HStack><Icon as={FaQuestionCircle} boxSize={6} /><Text fontSize="xl">FAQ</Text></HStack>
        <HStack><Icon as={FaEnvelope} boxSize={6} /><Text fontSize="xl">Inquiry</Text></HStack>
        <HStack><Icon as={FaComment} boxSize={6} /><Text fontSize="xl">Feedback</Text></HStack>
        <HStack><Icon as={FaFileAlt} boxSize={6} /><Text fontSize="xl">Terms</Text></HStack>
        <HStack><Icon as={FaLock} boxSize={6} /><Text fontSize="xl">Privacy</Text></HStack>
        <HStack><Icon as={FaBellSlash} boxSize={6} /><Text fontSize="xl">Notifications</Text></HStack>
      </VStack>
    </Box>
  );
};

export default Settings;