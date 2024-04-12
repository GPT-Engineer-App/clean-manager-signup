import React from "react";
import { Box, Heading, IconButton, VStack, Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate(-1)} mr={2} />
        <Heading size="xl" textAlign="center" flexGrow={1}>
          설정
        </Heading>
      </Box>
      <VStack spacing={4} align="stretch">
        <Button onClick={() => navigate("/customer/edit-profile")}>프로필 수정</Button>
        <Button onClick={() => navigate("/customer/notices")}>공지사항</Button>
        <Button onClick={() => navigate("/customer/faq")}>자주 묻는 질문</Button>
        <Button onClick={() => navigate("/customer/inquiry")}>1:1 문의</Button>
        <Button onClick={() => navigate("/customer/feedback")}>피드백 보내기</Button>
        <Button onClick={() => navigate("/customer/terms")}>이용약관</Button>
        <Button onClick={() => navigate("/customer/privacy")}>개인정보 처리방침</Button>
        <Button onClick={() => navigate("/customer/notifications")}>알림 설정</Button>
      </VStack>
    </Box>
  );
};

export default Settings;
