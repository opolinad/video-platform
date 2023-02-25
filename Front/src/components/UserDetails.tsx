import { Card, CardHeader } from '@mui/material';
import React from 'react';


const UserDetails = () => {
    return (
        <>
            <Card sx={{ margin: '0 3vw' }} >
                <CardHeader
                    title='User Details'
                    subheader='Here goes the name of the user'
                />

            </Card>

        </>
    );
}

export default UserDetails;