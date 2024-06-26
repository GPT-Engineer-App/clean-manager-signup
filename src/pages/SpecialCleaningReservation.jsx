import React from "react";
import { Box, Heading, IconButton, useToast } from "@chakra-ui/react";
import SpecialCleaningReservationForm from "../components/SpecialCleaningReservationForm";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const SpecialCleaningReservation = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "특수 청소 예약이 접수되었습니다",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/home");
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate("/customer-home")} mr={2} />
        <Heading size="xl" textAlign="center" flexGrow={1}>
          특수 청소 예약
        </Heading>
      </Box>
      <Box p={4}>
        <SpecialCleaningReservationForm />
      </Box>
    </Box>
  );
};

export default SpecialCleaningReservation;
