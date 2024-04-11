import React, { useState } from "react";
import { Box, VStack, Input, Button, Text, Heading, useToast } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    if (phoneNumber.length === 11) {
      toast({
        title: "로그인 성공",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "전화번호를 확인해주세요",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSignUp = () => {
    toast({
      title: "회원가입 페이지로 이동합니다",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <Heading size="xl" textAlign="center" mb={8}>
        청소매니저 로그인
      </Heading>
      <VStack spacing={4}>
        <Input type="tel" placeholder="전화번호를 입력하세요" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} maxLength={11} />
        <Button leftIcon={<FaPhone />} colorScheme="blue" onClick={handleLogin} isFullWidth>
          로그인
        </Button>
        <Text>
          아직 회원이 아니신가요?{" "}
          <Button variant="link" onClick={() => navigate("/signup")}>
            회원가입
          </Button>
        </Text>
      </VStack>
    </Box>
  );
};

export default Index;
