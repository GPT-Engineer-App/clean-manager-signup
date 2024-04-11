import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import BottomTab from "../components/BottomTab";
import ReservationCard from "../components/ReservationCard";

const Home = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const data = [
        {
          id: 1,
          customerName: "김철수",
          address: "서울시 강남구 역삼동",
          reservationDateTime: "2024-04-15 10:00",
          requests: "창문 청소 추가 요청",
        },
        {
          id: 2,
          customerName: "박영희",
          address: "서울시 서초구 반포동",
          reservationDateTime: "2024-04-16 14:00",
          requests: "침실 정리 요청",
        },
      ];
      setReservations(data);
    };

    fetchReservations();
  }, []);

  const handleSubmitQuote = (reservationId) => {
    const reservation = reservations.find((res) => res.id === reservationId);
    navigate("/submit-quote", { state: { reservation } });
  };

  return (
    <Box>
      <Heading size="xl" textAlign="center" mb={8}>
        청소매니저 홈
      </Heading>
      <Box p={4}>
        <Heading size="lg" mb={4}>
          실시간 고객 예약
        </Heading>
        {reservations.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} onSubmitQuote={handleSubmitQuote} />
        ))}
      </Box>
      <BottomTab />
    </Box>
  );
};

export default Home;
