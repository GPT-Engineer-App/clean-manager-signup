import React, { useState } from "react";
import { Box, VStack, Input, Button, Text, Heading, useToast, Select, Checkbox, Textarea, Radio, RadioGroup, Stack, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    cleaningExperience: "",
    preferredAreas: [],
    otherCleaningExperience: "",
    selfIntroduction: "",
    otherSkills: "",
    desiredWorkingHours: "",
    desiredRegion: "",
    profilePicture: null,
    termsOfService: false,
    privacyPolicy: false,
  });

  const [errors, setErrors] = useState({});
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log(formData);

    toast({
      title: "회원가입이 완료되었습니다",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    navigate("/");
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "이름을 입력해주세요";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "연락처를 입력해주세요";
    }

    if (!formData.email) {
      errors.email = "이메일을 입력해주세요";
    }

    if (!formData.password) {
      errors.password = "비밀번호를 입력해주세요";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "비밀번호가 일치하지 않습니다";
    }

    if (!formData.termsOfService || !formData.privacyPolicy) {
      errors.agreement = "약관에 동의해주세요";
    }

    return errors;
  };

  return (
    <Box p={4}>
      <Heading size="xl" textAlign="center" mb={8}>
        청소매니저 회원가입
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <Heading size="lg" mb={2}>
            회원 정보
          </Heading>
          <FormControl isInvalid={errors.name}>
            <FormLabel>이름</FormLabel>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.phoneNumber}>
            <FormLabel>연락처</FormLabel>
            <Input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormLabel>이메일</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>비밀번호</FormLabel>
            <Input type="password" name="password" value={formData.password} onChange={handleChange} />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.confirmPassword}>
            <FormLabel>비밀번호 확인</FormLabel>
            <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>주소</FormLabel>
            <Input type="text" name="address" value={formData.address} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>생년월일</FormLabel>
            <Input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>성별</FormLabel>
            <Select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">선택</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
            </Select>
          </FormControl>

          <Heading size="lg" mt={8} mb={2}>
            청소 경력 및 선호 분야
          </Heading>
          <FormControl>
            <FormLabel>청소 경력</FormLabel>
            <RadioGroup name="cleaningExperience" value={formData.cleaningExperience} onChange={handleChange}>
              <Stack direction="column">
                <Radio value="none">경력 없음</Radio>
                <Radio value="lessThan1">1년 미만</Radio>
                <Radio value="1to3">1년 이상 3년 미만</Radio>
                <Radio value="3to5">3년 이상 5년 미만</Radio>
                <Radio value="moreThan5">5년 이상</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>선호 분야</FormLabel>
            <Stack direction="column">
              <Checkbox name="preferredAreas" value="residential" isChecked={formData.preferredAreas.includes("residential")} onChange={handleChange}>
                주택 청소
              </Checkbox>
              <Checkbox name="preferredAreas" value="office" isChecked={formData.preferredAreas.includes("office")} onChange={handleChange}>
                사무실 청소
              </Checkbox>
              <Checkbox name="preferredAreas" value="factory" isChecked={formData.preferredAreas.includes("factory")} onChange={handleChange}>
                공장 청소
              </Checkbox>
              <Checkbox name="preferredAreas" value="other" isChecked={formData.preferredAreas.includes("other")} onChange={handleChange}>
                기타
              </Checkbox>
            </Stack>
          </FormControl>
          <FormControl>
            <FormLabel>기타 청소 경험</FormLabel>
            <Textarea name="otherCleaningExperience" value={formData.otherCleaningExperience} onChange={handleChange} />
          </FormControl>

          <Heading size="lg" mt={8} mb={2}>
            추가 정보
          </Heading>
          <FormControl>
            <FormLabel>자기소개</FormLabel>
            <Textarea name="selfIntroduction" value={formData.selfIntroduction} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>기타 특기나 강점</FormLabel>
            <Textarea name="otherSkills" value={formData.otherSkills} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>희망 근무 시간</FormLabel>
            <Input type="text" name="desiredWorkingHours" value={formData.desiredWorkingHours} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>희망 지역</FormLabel>
            <Input type="text" name="desiredRegion" value={formData.desiredRegion} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>프로필 사진</FormLabel>
            <Input type="file" name="profilePicture" onChange={handleFileChange} />
          </FormControl>

          <Heading size="lg" mt={8} mb={2}>
            약관 동의
          </Heading>
          <FormControl isInvalid={errors.agreement}>
            <Stack direction="column">
              <Checkbox name="termsOfService" isChecked={formData.termsOfService} onChange={handleChange}>
                <Text>
                  <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">
                    이용약관
                  </a>{" "}
                  동의
                </Text>
              </Checkbox>
              <Checkbox name="privacyPolicy" isChecked={formData.privacyPolicy} onChange={handleChange}>
                <Text>
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                    개인정보 처리방침
                  </a>{" "}
                  동의
                </Text>
              </Checkbox>
            </Stack>
            <FormErrorMessage>{errors.agreement}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="blue" size="lg" mt={8}>
            회원가입
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SignUp;
