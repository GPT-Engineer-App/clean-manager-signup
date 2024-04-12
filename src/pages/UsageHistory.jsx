import React, { useEffect, useState } from "react";
import { Box, Heading, Text, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const UsageHistory = () => {
  const [usageHistory, setUsageHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsageHistory = async () => {
      try {
        const response = await fetch("/api/usage-history");
        const data = await response.json();
        setUsageHistory(data);
      } catch (error) {
        console.error("Error fetching usage history:", error);
      }
    };

    fetchUsageHistory();
  }, []);

  return (
    <Box p={4}>
      <Box display="flex" alignItems="center" mb={4}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} mr={2} />
        <Heading size="lg">이용내역</Heading>
      </Box>
      {usageHistory.map((item) => (
        <Box key={item.id} borderWidth={1} borderRadius="md" p={4} mb={4}>
          <Text>서비스 유형: {item.serviceType}</Text>
          <Text>주소: {item.address}</Text>
          <Text>청소 날짜: {item.cleaningDate}</Text>
          <Text>금액: {item.amount.toLocaleString()}원</Text>
        </Box>
      ))}
    </Box>
  );
};

export default UsageHistory;
