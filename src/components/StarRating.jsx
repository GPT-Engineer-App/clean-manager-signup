import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  return (
    <Box display="flex">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <Icon as={FaStar} key={i} color={i < rating ? "gold" : "gray.300"} />
        ))}
    </Box>
  );
};

export default StarRating;
