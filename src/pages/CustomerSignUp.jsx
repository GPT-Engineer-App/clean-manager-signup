import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, VStack, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CustomerSignUp = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "비밀번호가 일치하지 않습니다",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch("/api/customers/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          password,
          address,
        }),
      });

      if (response.ok) {
        toast({
          title: "회원가입이 완료되었습니다",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/customer-home");
      } else {
        toast({
          title: "회원가입에 실패했습니다",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast({
        title: "회원가입에 실패했습니다",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="md" mx="auto" mt={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        고객 회원가입
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>이름</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>연락처</FormLabel>
            <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>이메일</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>비밀번호</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>비밀번호 확인</FormLabel>
            <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>주소</FormLabel>
            <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            회원가입
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CustomerSignUp;
