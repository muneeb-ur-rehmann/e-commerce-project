import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';

const formStyle = {
    backgroundColor: 'transparent',
    border: '2px solid rgb(139, 195, 74)',
    padding: '20px',
    borderRadius: '8px',
    color: '#fff',
    textAlign: 'center'
};

const inputStyle = {
    borderColor: 'rgb(139, 195, 74)',
    marginBottom: '15px',
};

const SubmitForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        contactNumber: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add form submission logic here
    };

    return (
        <Container maxWidth="sm" style={{marginTop:"60px", display:"flex", alignItems:"center", flexDirection: "column"}}>
            <Typography variant="h4" style={{fontWeight:"bold"}} gutterBottom>
                Submit Order Form
            </Typography>
            <Box sx={formStyle}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="firstName"
                        label="First Name"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        InputProps={{ sx: inputStyle }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="lastName"
                        label="Last Name"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        InputProps={{ sx: inputStyle }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="email"
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        InputProps={{ sx: inputStyle }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="address"
                        label="Address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                        InputProps={{ sx: inputStyle }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        name="contactNumber"
                        label="Contact Number"
                        placeholder="Enter your contact number"
                        type="tel"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        InputProps={{ sx: inputStyle }}
                    />
                    <Button type="submit" variant="contained" style={{ backgroundColor: 'rgb(139, 195, 74)', marginTop: '15px' }}>
                        Submit Order
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default SubmitForm;
