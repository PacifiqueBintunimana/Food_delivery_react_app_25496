import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
//import { useTheme } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard=()=> {

    //const theme = useTheme()

    return (
        <Card sx={{ width: 290 }}>
            <CardMedia image='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' sx={{ height: 345, width: '100%' }} />
            <CardContent>
                <Typography variant='h5' className=' font-bold' >
                    Fast Food Festival
                </Typography>
                <Typography variant='body2'>
                    50% off on all items
                </Typography>
                <div className=' py-2 space-y-2'>
                    <p>{"Kandy"}</p>
                    <p style={{ color: '#4287f5' }} className=' text-sm'>February 14, 2024 12:00 AM</p>
                    <p style={{ color: '#e04141' }} className=' text-sm'>February 14, 2024 12:00 AM</p>
                </div>
            </CardContent>
            {
                true && <CardActions>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>
            }
        </Card>
    )
}

export default EventCard