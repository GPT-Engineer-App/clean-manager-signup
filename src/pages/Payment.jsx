import React from "react";
import { Box, Heading, Text, Button, useToast } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { reservationId, quote } = location.state;
  const navigate = useNavigate();
  const toast = useToast();

  const handlePayment = () => {
    toast({
      title: "계약금 결제가 완료되었습니다.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/my-reservations");
  };

  return (
    <Box maxWidth="md" mx="auto" mt={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        계약금 결제
      </Heading>
      <Box borderWidth={1} borderRadius="md" p={4}>
        <Text fontSize="xl" mb={4}>
          청소매니저: {quote.cleanerName}
        </Text>
        <Text fontSize="xl" mb={4}>
          견적 금액: {quote.price.toLocaleString()}원
        </Text>
        <Text fontSize="xl" mb={4}>
          계약금(10%): {(quote.price * 0.1).toLocaleString()}원
        </Text>
        <Button colorScheme="blue" size="lg" onClick={handlePayment}>
          결제하기
        </Button>
      </Box>
    </Box>
  );
};

export default Payment;
