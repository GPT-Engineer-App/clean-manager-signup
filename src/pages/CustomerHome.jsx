import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

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
          청소 예약 내역
        </Heading>
        {reservations.map((reservation) => (
          <Box key={reservation.id} borderWidth={1} borderRadius="md" p={4} mb={4}>
            <Text>주소: {reservation.address}</Text>
            <Text>예약일시: {reservation.reservationDateTime}</Text>
            <Text>상태: {reservation.status}</Text>
          </Box>
        ))}
        <Button colorScheme="green" onClick={() => navigate("/request-cleaning")} isFullWidth>
          새로운 청소 요청하기
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerHome;
