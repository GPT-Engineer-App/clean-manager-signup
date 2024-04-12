import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Select, Textarea, Button, VStack } from "@chakra-ui/react";

const CommercialCleaningForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [size, setSize] = useState("");
  const [storeType, setStoreType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [otherInfo, setOtherInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>이름</FormLabel>
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>연락처</FormLabel>
            <Input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>이메일 주소</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>상가명</FormLabel>
            <Input type="text" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>주소</FormLabel>
            <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>상가 크기(예: 제곱미터 또는 평)</FormLabel>
            <Input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>상가 유형(예: 식당, 매장 등)</FormLabel>
            <Input type="text" value={storeType} onChange={(e) => setStoreType(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>청소 서비스 유형</FormLabel>
            <Select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
              <option value="">선택하세요</option>
              <option value="정기 청소">정기 청소</option>
              <option value="일회성 청소">일회성 청소</option>
              <option value="특별 청소">특별 청소</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>특별 요청 사항</FormLabel>
            <Textarea value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>희망 청소 날짜</FormLabel>
            <Input type="date" value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>희망 청소 시간대</FormLabel>
            <Input type="time" value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>기타 정보 또는 요청 사항</FormLabel>
            <Textarea value={otherInfo} onChange={(e) => setOtherInfo(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            예약하기
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CommercialCleaningForm;
