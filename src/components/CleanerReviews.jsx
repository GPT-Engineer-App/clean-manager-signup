import React, { useState } from "react";
import { Box, Heading, Text, Image, VStack } from "@chakra-ui/react";
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
      <VStack spacing={4}>
        {reviews.map((review) => (
          <Box key={review.id} borderWidth={1} borderRadius="md" p={4}>
            <Text fontWeight="bold">{review.cleanerName}</Text>
            <StarRating rating={review.rating} />
            <Text>{review.comment}</Text>
            {review.photo && <Image src={review.photo} alt="Review Photo" mt={4} />}
            <input type="file" accept="image/*" onChange={(event) => handlePhotoUpload(review.id, event)} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default CleanerReviews;
