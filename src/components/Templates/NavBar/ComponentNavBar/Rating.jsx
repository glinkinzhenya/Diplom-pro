import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating({ trainerRating }) {
  return (
    <Stack spacing={0}>
      <Rating name="half-rating-read" defaultValue={trainerRating} precision={0.5} readOnly />
    </Stack>
  );
}
