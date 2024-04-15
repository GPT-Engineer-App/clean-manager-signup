import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, VStack, Input, Button, Text, Heading, useToast, RadioGroup, Radio } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("customer");
  const toast = useToast();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (phoneNumber.length === 11) {
      toast({
        title: "로그인 성공",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      if (userType === "customer") {
        navigate("/customer-home");
      } else {
        navigate("/home");
      }
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
    if (userType === "customer") {
      navigate("/customer-signup");
    } else {
      navigate("/signup");
    }
  };

  return (
    <Box p={4}>
      <Heading size="xl" textAlign="center" mb={8}>
        로그인
      </Heading>
      <VStack spacing={4}>
        <RadioGroup value={userType} onChange={setUserType}>
          <Radio value="customer" mr={4}>
            고객
          </Radio>
          <Radio value="cleaner">청소매니저</Radio>
        </RadioGroup>
        <Input type="tel" placeholder="전화번호를 입력하세요" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} maxLength={11} />
        <Button leftIcon={<FaPhone />} colorScheme="blue" onClick={handleLogin} isFullWidth>
          로그인
        </Button>
        <Text>
          아직 회원이 아니신가요?{" "}
          <Button variant="link" onClick={handleSignUp}>
            회원가입
          </Button>
        </Text>
      </VStack>
    </Box>
  );
};

export default Index;
