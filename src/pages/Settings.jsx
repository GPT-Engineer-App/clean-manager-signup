import React from "react";
import { Box, Heading, IconButton, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={8}>
        <IconButton icon={<FaArrowLeft />} variant="ghost" onClick={() => navigate("/customer-home")} mr={2} />
        <Heading size="xl" textAlign="center" flexGrow={1}>
          설정
        </Heading>
      </Box>
      <VStack spacing={4} align="stretch">
        <Text onClick={() => navigate("/edit-profile")}>프로필 수정</Text>
        <Text onClick={() => navigate("/notices")}>공지사항</Text>
        <Text onClick={() => navigate("/faq")}>자주 묻는 질문</Text>
        <Text onClick={() => navigate("/inquiry")}>1:1 문의</Text>
        <Text onClick={() => navigate("/feedback")}>의견 보내기</Text>
        <Text onClick={() => navigate("/terms")}>서비스 이용약관</Text>
        <Text onClick={() => navigate("/privacy")}>개인정보 처리방침</Text>
        <Text onClick={() => navigate("/notifications")}>알림 설정</Text>
        <Text onClick={() => navigate("/edit-profile")}>프로필 수정</Text>
        <Text onClick={() => navigate("/notices")}>공지사항</Text>
        <Text onClick={() => navigate("/faq")}>자주 묻는 질문</Text>
        <Text onClick={() => navigate("/inquiry")}>1:1 문의</Text>
        <Text onClick={() => navigate("/feedback")}>의견 보내기</Text>
        <Text onClick={() => navigate("/terms")}>서비스 이용약관</Text>
        <Text onClick={() => navigate("/privacy")}>개인정보 처리방침</Text>
        <Text onClick={() => navigate("/notifications")}>알림 설정</Text>
      </VStack>
    </Box>
  );
};

export default Settings;
