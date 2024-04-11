import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const ReservationCard = ({ reservation, onSubmitQuote }) => {
  return (
    <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
      <Text>고객명: {reservation.customerName}</Text>
      <Text>주소: {reservation.address}</Text>
      <Text>예약일시: {reservation.reservationDateTime}</Text>
      <Text>요청사항: {reservation.requests}</Text>
      <Button colorScheme="blue" size="sm" mt={2} onClick={() => onSubmitQuote(reservation.id)}>
        견적 제출
      </Button>
    </Box>
  );
};

export default ReservationCard;
