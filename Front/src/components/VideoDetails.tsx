import { Card, CardHeader, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { videoProps } from './VideoCard';


const VideoDetails = () => {
    const [videoInformation, setVideoInformation] = useState(null);
    const { videoId } = useParams();

    useEffect(() => {
        fetch(`http://${process.env.REACT_APP_API_URL}/video/${videoId}`)
            .then(response => response.json())
            .then(response => {
                setVideoInformation(response.video);
            });
    }, []);

    return (
        <Card sx={{ margin: '0 3vw' }} >
            {videoInformation && <CardHeader
                title={(videoInformation as videoProps).title}
                subheader={`${(videoInformation as videoProps).owner.firstName} ${(videoInformation as videoProps).owner.lastName}`}
            />}
            {videoInformation && <CardMedia
                component='iframe'
                height='800'
                image={`${(videoInformation as videoProps).url}`}
            />}

        </Card>
    );
}

export default VideoDetails;