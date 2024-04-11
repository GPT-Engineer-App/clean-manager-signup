import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import MovingCleaningReservationForm from "../components/MovingCleaningReservationForm";

const MovingCleaningReservation = () => {
  return (
    <Box>
      <Heading mb={8}>이사/입주청소 예약</Heading>
      <MovingCleaningReservationForm />
    </Box>
  );
};

export default MovingCleaningReservation;
