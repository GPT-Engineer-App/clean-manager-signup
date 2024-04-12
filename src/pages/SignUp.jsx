import React, { useState } from "react";
import { Box, Button, Checkbox, FormControl, FormLabel, Heading, Input, Select, Textarea, VStack, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [preference, setPreference] = useState("");
  const [otherExperience, setOtherExperience] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [strengths, setStrengths] = useState("");
  const [workHours, setWorkHours] = useState("");
  const [workArea, setWorkArea] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

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
    if (!termsAgreed || !privacyAgreed) {
      toast({
        title: "약관에 동의해주세요",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch("/api/cleaners/signup", {
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
          birthdate,
          gender,
          experience,
          preference,
          otherExperience,
          introduction,
          strengths,
          workHours,
          workArea,
          profileImage,
        }),
      });

      if (response.ok) {
        toast({
          title: "회원가입이 완료되었습니다",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/home");
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
        청소매니저 회원가입
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
          <FormControl isRequired>
            <FormLabel>생년월일</FormLabel>
            <Input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>성별</FormLabel>
            <Select placeholder="성별을 선택하세요" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">남성</option>
              <option value="female">여성</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>청소 경력</FormLabel>
            <Select placeholder="경력을 선택하세요" value={experience} onChange={(e) => setExperience(e.target.value)}>
              <option value="none">경력 없음</option>
              <option value="less1">1년 미만</option>
              <option value="1to3">1년 이상 3년 미만</option>
              <option value="3to5">3년 이상 5년 미만</option>
              <option value="over5">5년 이상</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>선호 분야</FormLabel>
            <Select placeholder="선호 분야를 선택하세요" value={preference} onChange={(e) => setPreference(e.target.value)}>
              <option value="house">주택 청소</option>
              <option value="office">사무실 청소</option>
              <option value="factory">공장 청소</option>
              <option value="etc">기타</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>기타 청소 경험</FormLabel>
            <Textarea value={otherExperience} onChange={(e) => setOtherExperience(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>자기소개</FormLabel>
            <Textarea value={introduction} onChange={(e) => setIntroduction(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>기타 특기나 강점</FormLabel>
            <Textarea value={strengths} onChange={(e) => setStrengths(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>희망 근무 시간</FormLabel>
            <Input type="text" value={workHours} onChange={(e) => setWorkHours(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>희망 지역</FormLabel>
            <Input type="text" value={workArea} onChange={(e) => setWorkArea(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>프로필 사진</FormLabel>
            <Input type="file" accept="image/*" onChange={(e) => setProfileImage(e.target.files[0])} />
          </FormControl>
          <Checkbox isChecked={termsAgreed} onChange={(e) => setTermsAgreed(e.target.checked)}>
            <a href="#">이용약관</a>에 동의합니다
          </Checkbox>
          <Checkbox isChecked={privacyAgreed} onChange={(e) => setPrivacyAgreed(e.target.checked)}>
            <a href="#">개인정보 처리방침</a>에 동의합니다
          </Checkbox>
          <Button type="submit" colorScheme="blue">
            회원가입
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SignUp;
