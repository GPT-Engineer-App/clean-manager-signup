import React, { useEffect, useState } from "react";
import { Box, Heading, IconButton, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ReservationManagement = () => {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch("/api/reservations/cleaner");
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate("/home")} mr={2} />
        <Heading size="xl" textAlign="center" flexGrow={1}>
          예약 관리
        </Heading>
      </Box>
      <Box p={4}>
        {reservations.map((reservation) => (
          <Box key={reservation.id} borderWidth={1} borderRadius="md" p={4} mb={4}>
            <Text>고객명: {reservation.customerName}</Text>
            <Text>주소: {reservation.address}</Text>
            <Text>예약일시: {reservation.reservationDateTime}</Text>
            <Text>상태: {reservation.status}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReservationManagement;
