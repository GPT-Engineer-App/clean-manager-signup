import React from "react";
import { Box, Heading, VStack, IconButton } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";
import Notices from "./Notices";
import FAQ from "./FAQ";
import Inquiry from "./Inquiry";
import Feedback from "./Feedback";
import Terms from "./Terms";
import Privacy from "./Privacy";
import Notifications from "./Notifications";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} aria-label="Go back" mr={2} />
        <Heading size="xl" textAlign="center" flexGrow={1}>
          설정
        </Heading>
      </Box>

      <VStack spacing={8} align="stretch">
        <EditProfile />
        <Notices />
        <FAQ />
        <Inquiry />
        <Feedback />
        <Terms />
        <Privacy />
        <Notifications />
      </VStack>
    </Box>
  );
};

export default Settings;
