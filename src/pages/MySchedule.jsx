import React from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const MySchedule = () => {
  const navigate = useNavigate();

  

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate("/home")} mr={2} />
        <Heading size="xl" textAlign="center" flexGrow={1}>
          내 일정
        </Heading>
      </Box>
      <Box textAlign="center" mt={8}>
        Calendar component will be added here
      </Box>
    </Box>
  );
};

export default MySchedule;
