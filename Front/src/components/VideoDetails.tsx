import { Card, CardHeader } from '@mui/material';
import React from 'react';


const VideoDetails = () => {
    return (
        <>
            <Card sx={{ margin: '0 3vw' }} >
                <CardHeader
                    title='Video Details'
                    subheader='Here goes the title of the video'
                />

            </Card>

        </>
    );
}

export default VideoDetails;