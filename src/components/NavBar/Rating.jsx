import { Component } from 'react';
import { Stack, Rating } from '@mui/material';

export default class HalfRating extends Component {
    render() {
        const { trainerImg } = this.props;

        return (
            <Stack spacing={0}>
                <Rating name="half-rating-read" defaultValue={trainerImg} precision={0.5} readOnly />
            </Stack>
        );
    }
}

