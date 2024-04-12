import React, { useState } from "react";
import { Box, Heading, Text, Image, VStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import StarRating from "./StarRating";

const CleanerReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      cleanerName: "김철수",
      rating: 4,
      comment: "청소를 깔끔하게 잘 해주셨어요. 감사합니다!",
      photo: null,
    },
    {
      id: 2,
      cleanerName: "이영희",
      rating: 5,
      comment: "정말 꼼꼼하고 친절한 청소매니저였습니다. 다음에도 이용하고 싶어요.",
      photo: null,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredReviews = reviews.filter((review) => review.cleanerName.includes(searchQuery));

  const handlePhotoUpload = (reviewId, event) => {
    const file = event.target.files[0];
    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        return { ...review, photo: URL.createObjectURL(file) };
      }
      return review;
    });
    setReviews(updatedReviews);
  };

  return (
    <Box mb={8}>
      <Heading size="lg" mb={4}>
        청소매니저 리뷰
      </Heading>
      <InputGroup mb={4}>
        <InputLeftElement pointerEvents="none">
          <FaSearch color="gray.300" />
        </InputLeftElement>
        <Input placeholder="청소매니저 이름으로 검색" value={searchQuery} onChange={handleSearch} />
      </InputGroup>
      <VStack spacing={4}>
        {filteredReviews.map((review) => (
          <Box key={review.id} borderWidth={1} borderRadius="md" p={4}>
            <Text fontWeight="bold">{review.cleanerName}</Text>
            <StarRating rating={review.rating} />
            <Text>{review.comment}</Text>
            {review.cleanerPhoto && <Image src={review.cleanerPhoto} alt="Cleaner Photo" mt={4} />}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default CleanerReviews;
