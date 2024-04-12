import React from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import OfficeCleaningReservationForm from "../components/OfficeCleaningReservationForm";

const OfficeCleaningReservation = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} aria-label="뒤로 가기" mr={2} />
        <Heading size="xl" textAlign="center" flexGrow={1}>
          사무실 청소 예약
        </Heading>
      </Box>
      <OfficeCleaningReservationForm />
    </Box>
  );
};

export default OfficeCleaningReservation;
