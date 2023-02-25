import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActions, IconButton, Link, Typography } from '@mui/material';
import { Favorite, Loyalty } from '@mui/icons-material';

export interface videoProps {
    id: number;
    title: string;
    description: number;
    url: string;
    thumbnailUrl: string;
    owner: User;
}

interface User {
    firstName: string;
    lastName: string;
    email: string;
    photoUrl: string;
    password: string;
    roleId: number;
}

export const VideoCard = ({ id, title, description, thumbnailUrl, owner }: Omit<videoProps, 'url'>) => {

    return (
        <Link href={`/video/${id}`} sx={{textDecoration: 'none'}}>

            <Card
                sx={{ width: 300, margin: '20px' }}
                variant='outlined'
            >
                <CardHeader
                    title={title}
                    subheader={`${owner.firstName} ${owner.lastName}`}
                    sx={{ backgroundColor: 'rgba(241,60,69,0.2)' }}
                />

                <CardMedia
                    component='img'
                    width='100%'
                    image={thumbnailUrl}
                    alt={`Thumbnail for video ${title}`}
                />

                <CardActions sx={{
                    display: 'flex',
                    backgroundColor: 'rgba(241,60,69,0.2)',
                    justifyContent: 'space-between'
                }}>

                    <IconButton aria-label="Follow the creator"
                        sx={{
                            fontSize: '1rem',
                            fontWeight: 'Bold',
                        }}
                    >
                        <Loyalty sx={{ marginRight: '5px' }} /> Follow owner
                    </IconButton>

                    <IconButton aria-label="Like video">
                        <Favorite></Favorite>
                    </IconButton>

                </CardActions>

                <CardContent sx={{
                    backgroundColor: 'rgba(241,60,69,0.2)',
                    paddingTop: 0
                }}>
                    <Typography variant='body2' color='text.secondary'>
                        {description}
                    </Typography>
                </CardContent>
            </Card>

        </Link>
    );
}
