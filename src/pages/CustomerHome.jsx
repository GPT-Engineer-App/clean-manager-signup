import React from "react";
import { Box, Heading, SimpleGrid, Icon, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaStore, FaBuilding, FaStar, FaTools } from "react-icons/fa";
import CleanerReviews from "../components/CleanerReviews";
import BottomTab from "../components/BottomTab";

const CustomerHome = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box p={4}>
        <Heading size="xl" mb={8}>
          청소 서비스 예약
        </Heading>
        <SimpleGrid columns={3} spacing={4} mb={8}>
          <Box textAlign="center" onClick={() => navigate("/moving-cleaning-reservation")}>
            <Icon as={FaHome} boxSize={12} />
            <Text>이사/입주청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/commercial-cleaning-reservation")}>
            <Icon as={FaStore} boxSize={12} />
            <Text>상가청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/office-cleaning-reservation")}>
            <Icon as={FaBuilding} boxSize={12} />
            <Text>사무실청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/special-cleaning-reservation")}>
            <Icon as={FaStar} boxSize={12} />
            <Text>특수청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/appliance-cleaning-reservation")}>
            <Icon as={FaTools} boxSize={12} />
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
