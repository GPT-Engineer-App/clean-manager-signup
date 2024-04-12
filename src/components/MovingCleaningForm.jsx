import React, { useState } from "react";
import { Box, FormControl, FormLabel, Input, Select, Textarea, Button, VStack } from "@chakra-ui/react";

const MovingCleaningForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [houseType, setHouseType] = useState("");
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [specialAreas, setSpecialAreas] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [serviceTime, setServiceTime] = useState("");
  const [additionalServices, setAdditionalServices] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deposit, setDeposit] = useState("");
  const [requests, setRequests] = useState("");

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
            <FormLabel>전화번호</FormLabel>
            <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>이메일 주소</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>주소</FormLabel>
            <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>서비스 유형</FormLabel>
            <Select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
              <option value="">선택하세요</option>
              <option value="이사 청소">이사 청소</option>
              <option value="입주 청소">입주 청소</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>주택 유형</FormLabel>
            <Select value={houseType} onChange={(e) => setHouseType(e.target.value)}>
              <option value="">선택하세요</option>
              <option value="아파트">아파트</option>
              <option value="단독주택">단독주택</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>면적 (제곱미터 또는 평수)</FormLabel>
            <Input type="text" value={area} onChange={(e) => setArea(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>방 수</FormLabel>
            <Input type="number" value={rooms} onChange={(e) => setRooms(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>화장실 수</FormLabel>
            <Input type="number" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>특별히 주의가 필요한 공간 또는 항목</FormLabel>
            <Textarea value={specialAreas} onChange={(e) => setSpecialAreas(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>원하는 청소 날짜</FormLabel>
            <Input type="date" value={serviceDate} onChange={(e) => setServiceDate(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>원하는 청소 시간</FormLabel>
            <Input type="time" value={serviceTime} onChange={(e) => setServiceTime(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>추가 서비스</FormLabel>
            <Textarea value={additionalServices} onChange={(e) => setAdditionalServices(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>결제 방식</FormLabel>
            <Select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="">선택하세요</option>
              <option value="현금">현금</option>
              <option value="카드">카드</option>
              <option value="계좌 이체">계좌 이체</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>예약금 안내</FormLabel>
            <Input type="text" value={deposit} onChange={(e) => setDeposit(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>기타 요청 사항</FormLabel>
            <Textarea value={requests} onChange={(e) => setRequests(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            예약 요청
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default MovingCleaningForm;
