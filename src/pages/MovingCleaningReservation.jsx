import React from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MovingCleaningForm from "../components/MovingCleaningForm";

const MovingCleaningReservation = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} mr={2} />
        <Heading size="xl" textAlign="center" flexGrow={1}>
          이사/입주청소 예약
        </Heading>
      </Box>
      <MovingCleaningForm />
    </Box>
  );
};

export default MovingCleaningReservation;
