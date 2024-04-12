import React from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} mr={2} />
        <Heading size="xl" textAlign="center" flexGrow={1}>
          Privacy Policy
        </Heading>
      </Box>
    </Box>
  );
};

export default Privacy;
