import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Button, useToast } from "@chakra-ui/react";

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const fetchReservations = async () => {
      const data = [
        {
          id: 1,
          address: "서울시 강남구 역삼동",
          reservationDateTime: "2024-04-15 10:00",
          status: "pending",
          quotes: [
            { id: 1, cleanerName: "김철수", price: 100000 },
            { id: 2, cleanerName: "이영희", price: 120000 },
          ],
        },
        {
          id: 2,
          address: "서울시 서초구 반포동",
          reservationDateTime: "2024-04-16 14:00",
          status: "confirmed",
          quotes: [
            { id: 3, cleanerName: "박민수", price: 90000 },
            { id: 4, cleanerName: "최지영", price: 110000 },
          ],
        },
      ];
      setReservations(data);
    };

    fetchReservations();
  }, []);

  const handleSelectQuote = (reservationId, quoteId) => {
    const updatedReservations = reservations.map((reservation) => {
      if (reservation.id === reservationId) {
        return { ...reservation, status: "confirmed", selectedQuote: quoteId };
      }
      return reservation;
    });
    setReservations(updatedReservations);
    toast({
      title: "견적이 선택되었습니다.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleModifyReservation = (reservationId) => {
    toast({
      title: "예약 수정 기능은 아직 구현 중입니다.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleCancelReservation = (reservationId) => {
    const updatedReservations = reservations.filter((reservation) => reservation.id !== reservationId);
    setReservations(updatedReservations);
    toast({
      title: "예약이 취소되었습니다.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

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
          {reservation.quotes && (
            <>
              <Text mt={2}>청소매니저 견적:</Text>
              {reservation.quotes.map((quote) => (
                <Box key={quote.id} borderWidth={1} borderRadius="md" p={2} mb={2}>
                  <Text>청소매니저: {quote.cleanerName}</Text>
                  <Text>견적 금액: {quote.price.toLocaleString()}원</Text>
                  {reservation.status === "pending" && (
                    <Button size="sm" colorScheme="blue" mt={2} onClick={() => handleSelectQuote(reservation.id, quote.id)}>
                      선택
                    </Button>
                  )}
                </Box>
              ))}
            </>
          )}
          <Button size="sm" colorScheme="green" mt={2} onClick={() => handleModifyReservation(reservation.id)}>
            예약 수정
          </Button>
          <Button size="sm" colorScheme="red" mt={2} ml={2} onClick={() => handleCancelReservation(reservation.id)}>
            예약 취소
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default MyReservations;
