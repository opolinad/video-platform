import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { VideoCard, videoProps } from './VideoCard';
import { Add } from '@mui/icons-material';


const CardContainer = () => {
    const [videosInformation, setVideosInformation] = useState([]);

    useEffect(() => {
        fetch(`http://${process.env.REACT_APP_API_URL}/video`)
            .then(response => response.json())
            .then(response => {
                setVideosInformation(response.rows);
            });
    }, []);

    return (
        <>
            <Card sx={{ margin: '0 3vw' }} >
                <CardHeader
                    title='Videos'
                    action={
                        <IconButton aria-label="add video"
                            color='error'
                            sx={{
                                fontSize: '1.3rem',
                                fontWeight: 'Bold',
                            }}
                        >
                            <Add sx={{ marginRight: '5px', fontSize:'1.5rem'}} /> ADD VIDEO
                        </IconButton>
                    }
                />
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {videosInformation?.length && videosInformation.map((video: videoProps) =>
                        <VideoCard
                            key={video.title}
                            id={video.id}
                            title={video.title}
                            description={video.description}
                            thumbnailUrl={video.thumbnailUrl}
                            owner={video.owner}
                        />
                    )}
                </CardContent>
            </Card>

        </>
    );
}

export default CardContainer;