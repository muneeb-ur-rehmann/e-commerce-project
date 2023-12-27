import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ReactStars from 'react-stars';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import './App.css'



export default function MediaControlCard({ detail }) {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex' }} style={{ padding: '20px' }}>
            <CardMedia
                component="img"
                sx={{ width: 200, objectFit: 'contain' }}
                image={detail.image}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', borderRadius: '10px' }}>
                <CardContent sx={{ flex: '1 0 auto' }} style={{ color: '#000', padding: '0px 30px', }}>
                    <Typography component="div" variant="h5" style={{ fontWeight: 'bold' }}>
                        {(detail.title).slice(0, 18)}...
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div" style={{ color: '#000' }}>
                        {(detail.description).slice(0, 100)}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" component="div" style={{ fontWeight: 'bold', color: '#000' }}>
                        Rs: {detail.price}
                    </Typography>
                    <Typography>
                        <ReactStars
                            edit={false}
                            value={detail.rating.rate}
                            count={5}
                            size={24}
                            color2={'#ffd700'} />
                    </Typography>
                    <div style={{ marginTop: '8px', marginBottom: '8px' }}>
                        <Chip label={detail.category} />
                    </div>
                    <div className='setBtns'>
                        <Button className='cart-btn' size="small" style={{ marginTop: '15px' }}>ADD TO CART</Button>
                        <Button className='view-detail-btn ' size="small" style={{ marginTop: '15px' }}>BUY NOW</Button>
                    </div>
                </CardContent>
            </Box>

        </Card>
    );
}