import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';
import { db } from '../firebase/firebase'; // Adjust the path according to your project structure
import { collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2'; // Import sweetalert2
import { useNavigate } from 'react-router-dom';

const formStyle = {
    backgroundColor: 'transparent',
    border: '2px solid #884dc2',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
};

const inputStyle = {
    borderColor: '1px solid #884dc2',
    marginBottom: '15px',
};

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    contactNumber: ''
};

const SubmitForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form:", formData); // Debugging log

        try {
            const docRef = await addDoc(collection(db, "details"), formData);
            console.log("Document written with ID: ", docRef.id); // Debugging log
            setFormData(initialFormData); // Reset form inputs
            Swal.fire({
                title: 'Success!',
                text: 'Your order has been placed!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            navigate('/')
        } catch (e) {
            console.error("Error adding document: ", e);
            Swal.fire({
                title: 'Error!',
                text: 'There was an error placing your order. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
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
                    <Button type="submit" variant="contained" style={{ backgroundColor: '#884dc2', marginTop: '15px' }}>
                        Submit Order
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default SubmitForm;
