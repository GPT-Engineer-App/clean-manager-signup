import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const RequestCleaning = () => {
  const [address, setAddress] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [requests, setRequests] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "청소 요청이 접수되었습니다",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/home");
  };

  return (
    <Box maxWidth="md" mx="auto" mt={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        청소 요청하기
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={4}>
          <FormLabel>주소</FormLabel>
          <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </FormControl>
        <FormControl isRequired mb={4}>
          <FormLabel>희망 일시</FormLabel>
          <Input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>요청사항</FormLabel>
          <Textarea value={requests} onChange={(e) => setRequests(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" isFullWidth>
          청소 요청 제출
        </Button>
      </form>
    </Box>
  );
};

export default RequestCleaning;
