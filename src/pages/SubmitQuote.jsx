import React, { useState, useEffect } from "react";
import { Box, Heading, IconButton, Text, Button } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const SubmitQuote = () => {
  const location = useLocation();
  const reservation = location.state?.reservation;
  const navigate = useNavigate();
  const [quote, setQuote] = useState(0);
  const [balance, setBalance] = useState(0);
  const [customerInfo, setCustomerInfo] = useState(null);

  useEffect(() => {
    const fetchCustomerInfo = async () => {
      try {
        const response = await fetch(`/api/customers/${reservation.customerId}`);
        const data = await response.json();
        setCustomerInfo(data);
      } catch (error) {
        console.error("Error fetching customer info:", error);
      }
    };

    const fetchBalance = async () => {
      try {
        const response = await fetch("/api/cleaners/balance");
        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchCustomerInfo();
    fetchBalance();
  }, [reservation.customerId]);

  const calculateQuote = async () => {
    try {
      const response = await fetch("/api/quotes/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: reservation.address,
        }),
      });
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error("Error calculating quote:", error);
    }
  };

  const handleSubmitQuote = async () => {
    try {
      const response = await fetch("/api/quotes/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reservationId: reservation.id,
          quote: quote,
        }),
      });
      if (response.ok) {
        console.log("Quote submitted successfully");
      } else {
        console.error("Error submitting quote");
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
    }
  };

  useEffect(() => {
    const fetchCustomerInfo = async () => {
      try {
        const response = await fetch(`/api/customers/${reservation.customerId}`);
        const data = await response.json();
        setCustomerInfo(data);
      } catch (error) {
        console.error("Error fetching customer info:", error);
      }
    };

    const fetchBalance = async () => {
      try {
        const response = await fetch("/api/cleaners/balance");
        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchCustomerInfo();
    fetchBalance();
  }, [reservation.customerId]);

  const calculateQuote = async () => {
    try {
      const response = await fetch("/api/quotes/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: reservation.address,
        }),
      });
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error("Error calculating quote:", error);
    }
  };

  const handleSubmitQuote = async () => {
    try {
      const response = await fetch("/api/quotes/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reservationId: reservation.id,
          quote: quote,
        }),
      });
      if (response.ok) {
        console.log("Quote submitted successfully");
      } else {
        console.error("Error submitting quote");
      }
    } catch (error) {
      console.error("Error submitting quote:", error);
    }
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate("/home")} mr={2} />
        <Heading size="xl" textAlign="center" flexGrow={1}>
          견적 제출
        </Heading>
      </Box>
      <Box mt={8}>
        <Text>고객 정보:</Text>
        <Text>이름: {reservation.customerName}</Text>
        <Text>주소: {reservation.address}</Text>
        <Text>청소 견적: {quote.toLocaleString()}원</Text>
        <Text>현재 잔액: {balance.toLocaleString()}원</Text>
        {quote === 0 ? (
          <Button colorScheme="blue" onClick={calculateQuote} mt={4}>
            견적 계산하기
          </Button>
        ) : (
          <Button colorScheme="green" onClick={handleSubmitQuote} mt={4}>
            결제하기
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SubmitQuote;
