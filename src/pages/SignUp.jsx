import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
  VStack,
} from '@chakra-ui/react';

const SignUp = () => {
  return (
    <Box maxWidth="md" mx="auto" mt={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        청소매니저 회원가입
      </Heading>
      <form>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>연락처</FormLabel>
            <Input type="tel" />
          </FormControl>
          <FormControl>
            <FormLabel>이메일</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>비밀번호</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormLabel>비밀번호 확인</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormLabel>주소</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>생년월일</FormLabel>
            <Input type="date" />
          </FormControl>
          <FormControl>
            <FormLabel>성별</FormLabel>
            <Select placeholder="성별을 선택하세요">
              <option value="male">남성</option>
              <option value="female">여성</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>청소 경력</FormLabel>
            <Select placeholder="경력을 선택하세요">
              <option value="none">경력 없음</option>
              <option value="less1">1년 미만</option>
              <option value="1to3">1년 이상 3년 미만</option>
              <option value="3to5">3년 이상 5년 미만</option>
              <option value="over5">5년 이상</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>선호 분야</FormLabel>
            <Select placeholder="선호 분야를 선택하세요">
              <option value="house">주택 청소</option>
              <option value="office">사무실 청소</option>
              <option value="factory">공장 청소</option>
              <option value="etc">기타</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>기타 청소 경험</FormLabel>
            <Textarea />
          </FormControl>
          <FormControl>
            <FormLabel>자기소개</FormLabel>
            <Textarea />
          </FormControl>
          <FormControl>
            <FormLabel>기타 특기나 강점</FormLabel>
            <Textarea />
          </FormControl>
          <FormControl>
            <FormLabel>희망 근무 시간</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>희망 지역</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>프로필 사진</FormLabel>
            <Input type="file" />
          </FormControl>
          <Checkbox>
            <a href="#">이용약관</a>에 동의합니다
          </Checkbox>
          <Checkbox>
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