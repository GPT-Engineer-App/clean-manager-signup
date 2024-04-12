import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Button, useToast, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch("/api/reservations/customer");
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, []);

  const handleSelectQuote = (reservationId, quote) => {
    navigate("/payment", { state: { reservationId, quote } });
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
      <Box display="flex" alignItems="center" mb={4}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} mr={2} />
        <Heading size="lg">내 예약 내역</Heading>
      </Box>
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
                    <Button size="sm" colorScheme="blue" mt={2} onClick={() => handleSelectQuote(reservation.id, quote)}>
                      선택 및 계약금 결제
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
