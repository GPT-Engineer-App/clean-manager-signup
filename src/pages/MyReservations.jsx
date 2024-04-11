import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

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
    <Box p={4}>
      <Heading size="lg" mb={4}>
        내 예약 내역
      </Heading>
      {reservations.map((reservation) => (
        <Box key={reservation.id} borderWidth={1} borderRadius="md" p={4} mb={4}>
          <Text>주소: {reservation.address}</Text>
          <Text>예약일시: {reservation.reservationDateTime}</Text>
          <Text>상태: {reservation.status}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default MyReservations;
