import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';


export default function AlignItemsList({ cardData, deleteCart, updateQty }) {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {cardData.map((v, i) => {
                return (
                    <div key={i}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar style={{ padding: '10px' }}>
                                <img src={v.image} width={70} height={70} alt="" style={{ objectFit: 'contain', borderRadius: '50%' }} />
                            </ListItemAvatar>
                            <ListItemText
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {v.title.slice(0, 20)}
                                        </Typography>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            {v.description.slice(0, 50)}...
                                            <DeleteOutlineIcon onClick={() => deleteCart(v.id)} style={{ cursor: 'pointer', color: 'red' }} />
                                        </div>
                                        <Typography style={{ fontWeight: 'bold' }}>
                                            {`$${(v.price * v.qty).toFixed()} -/`}
                                        </Typography>
                                        <Typography>
                                            <div style={{ display: 'flex', justifyContent: 'flexstart', alignItems: 'center', gap: '4px' }}>
                                                QTY:
                                                <AddIcon onClick={() => updateQty('+', v.id)} style={{ cursor: 'pointer', color: '#884dc2', fontSize: '1rem' }} />
                                                {v.qty}
                                                <RemoveIcon onClick={() => v.qty > 1 && updateQty('-', v.id)} style={{ cursor: 'pointer', color: '#884dc2', fontSize: '1rem' }} />
                                            </div>
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider style={{ backgroundColor: '#884dc2', paddingBottom: 0 }} variant="inset" component="li" />
                    </div>
                )
            })}
            {cardData.length ?
                <div className='checkOutBtn'>
                    <Link to={'/checkout'}>
                        <Button className='cart-btn checkOutBtn' size="small">CHECKOUT</Button>
                    </Link>
                </div> :
                <div style={{ padding: '20px' }}>
                    <Alert severity="warning">Your Cart is Empty !</Alert>
                </div>
            }


        </List>
    );
}