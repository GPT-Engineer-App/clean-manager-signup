import React from "react";
import { Box, Heading, SimpleGrid, Icon, Text, IconButton } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaHome, FaStore, FaBuilding, FaStar, FaWrench } from "react-icons/fa";
import CleanerReviews from "../components/CleanerReviews";
import BottomTab from "../components/BottomTab";

const CustomerHome = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box mb={8}>
        <Heading size="xl" textAlign="center">
          고객 홈
        </Heading>
      </Box>
      <Box p={4}>
        <Heading size="lg" mb={4}>
          서비스 유형
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={8} mb={8}>
          <Box textAlign="center" onClick={() => navigate("/moving-cleaning-reservation")} p={4}>
            <Icon as={FaHome} boxSize={16} />
            <Text mt={2}>이사/입주청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/commercial-cleaning-reservation")} p={4}>
            <Icon as={FaStore} boxSize={16} />
            <Text mt={2}>상가청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/office-cleaning-reservation")} p={4}>
            <Icon as={FaBuilding} boxSize={16} />
            <Text mt={2}>사무실청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/special-cleaning-reservation")} p={4}>
            <Icon as={FaStar} boxSize={16} />
            <Text mt={2}>특수청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/appliance-cleaning-reservation")} p={4}>
            <Icon as={FaWrench} boxSize={16} />
            <Text>가전청소</Text>
          </Box>
        </SimpleGrid>
        <Box my={8}>
          <a href="https://www.cleaninglab.co.kr/event" target="_blank" rel="noopener noreferrer">
            <img src="/images/event-banner.jpg" alt="CleaningLab Event" />
            <Text textAlign="center" mt={2}>
              광고 문구
            </Text>
          </a>
        </Box>
        <CleanerReviews />
      </Box>
      <BottomTab />
    </Box>
  );
};

export default CustomerHome;
