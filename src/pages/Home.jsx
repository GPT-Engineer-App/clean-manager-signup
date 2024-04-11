import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import BottomTab from "../components/BottomTab";

const Home = () => {
  return (
    <Box>
      <Heading size="xl" textAlign="center" mb={8}>
        청소매니저 홈
      </Heading>
      {}
      <BottomTab />
    </Box>
  );
};

export default Home;
