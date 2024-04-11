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

  useEffect(() => {
   
    const fetchBalance = async () => {
     
      const fetchedBalance = 50000;
      setBalance(fetchedBalance);
    };

    fetchBalance();
  }, []);

  const calculateQuote = () => {
    let basePrice = 0;
    switch (reservation.address.split(" ")[0]) {
      case "서울시":
        basePrice = 100000;
        break;
      case "경기도":
        basePrice = 90000;
        break;
      default:
        basePrice = 80000;
    }
    setQuote(basePrice);
  };

  const handleSubmitQuote = () => {
    if (balance >= quote) {
      console.log("Quote submitted successfully");
    } else {
      navigate("/payment", { state: { requiredAmount: quote - balance } });
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
