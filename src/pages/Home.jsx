import React, { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import BottomTab from "../components/BottomTab";
import ReservationCard from "../components/ReservationCard";

const Home = () => {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch("/api/reservations");
        const data = await response.json();
        setReservations(data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
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
