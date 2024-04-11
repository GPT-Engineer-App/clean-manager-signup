import React from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const MySchedule = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Heading size="xl" textAlign="center" mb={8}>
        내 일정
      </Heading>
      {}
      {}
      <Button onClick={() => navigate("/home")}>취소</Button>
    </Box>
  );
};

export default MySchedule;
