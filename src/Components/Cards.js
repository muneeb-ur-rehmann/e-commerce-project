import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactStars from 'react-stars';
import CartContext from '../context/cart';
import './App.css'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export default function MediaCard({ product, viewDetails }) {
    const [open, setOpen] = useState(false);
    const { cart, setCart } = useContext(CartContext)


    const addToCart = () => {
        let cartData = JSON.parse(localStorage.getItem('cart')) || [];
        let index = cartData.findIndex(v => v.id === product.id)
        if (index !== -1) {
            cartData.splice(index, 1, { ...cartData[index], qty: cartData[index].qty + 1 })
        } else {
            cartData.push({ ...product, qty: 1 })
        }
        localStorage.setItem('cart', JSON.stringify(cartData))
        setCart(cartData)
        setOpen(true)
    }


        return (
            <Card sx={{ width: 250, marginTop: 4, position: 'relative', paddingBottom: 5 }}>
                <div>
                    <img style={{ width: '100%', height: 240, objectFit: 'contain' }}
                        src={product.image}
                        alt=''
                    />
                </div>
                <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    key={'bottom-right'}
                    open={open} autoHideDuration={3000} onClose={() => { setOpen(false) }}>
                    <Alert onClose={() => { setOpen(false) }} severity="success" sx={{ width: '100%' }}>
                        Product Added in cart
                    </Alert>
                </Snackbar>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                       ${product.price}
                    </Typography>
                    <Typography variant="span" color="text.secondary">
                        {product.title.slice(0, 20)}...
                    </Typography>
                    <ReactStars
                        edit={false}
                        value={product.rating.rate}
                        count={5}
                        size={24}
                        color2={'#ffd700'} />
                </CardContent>
                <CardActions className='cart-btns'>
                    <Button onClick={addToCart} className='cart-btn' size="small">ADD TO CART</Button>
                    <Button onClick={() => viewDetails(product)} className='view-detail-btn ' size="small">VIEW DETAILS</Button>
                </CardActions>
            </Card>
        );
    }