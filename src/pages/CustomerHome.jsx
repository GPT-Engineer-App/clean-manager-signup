import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Button, SimpleGrid, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaStore, FaBuilding, FaStar, FaTools } from "react-icons/fa";
import CleanerReviews from "../components/CleanerReviews";

const CustomerHome = () => {
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      const data = [
        {
          id: 1,
          address: "서울시 강남구 역삼동",
          reservationDateTime: "2024-04-15 10:00",
          status: "pending",
        },
        {
          id: 2,
          address: "서울시 서초구 반포동",
          reservationDateTime: "2024-04-16 14:00",
          status: "confirmed",
        },
      ];
      setReservations(data);
    };

    fetchReservations();
  }, []);

  return (
    <Box>
      <Heading size="xl" textAlign="center" mb={8}>
        고객 홈
      </Heading>
      <Box p={4}>
        <Heading size="lg" mb={4}>
          서비스 유형
        </Heading>
        <SimpleGrid columns={3} spacing={4} mb={8}>
          <Box textAlign="center" onClick={() => navigate("/moving-cleaning-reservation")}>
            <Icon as={FaHome} boxSize={12} />
            <Text>이사/입주청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/commercial-cleaning")}>
            <Icon as={FaStore} boxSize={12} />
            <Text>상가청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/office-cleaning")}>
            <Icon as={FaBuilding} boxSize={12} />
            <Text>사무실청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/special-cleaning")}>
            <Icon as={FaStar} boxSize={12} />
            <Text>특수청소</Text>
          </Box>
          <Box textAlign="center" onClick={() => navigate("/appliance-cleaning")}>
            <Icon as={FaTools} boxSize={12} />
            <Text>가전청소</Text>
          </Box>
        </SimpleGrid>
        <CleanerReviews />

        <Button colorScheme="green" onClick={() => navigate("/request-cleaning")} isFullWidth>
          새로운 청소 요청하기
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerHome;
