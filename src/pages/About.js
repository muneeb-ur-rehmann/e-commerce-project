import React from 'react';
import { Card, CardContent, CardMedia, Typography, Avatar, Box, Grid, Container, Button, AppBar } from '@mui/material';
import { styled } from '@mui/system';
import aarij from '../assets/aarij.jpeg';
import fahad from '../assets/fahad.jpeg';
import hamza from '../assets/hamza.jpeg';
import muneeb from '../assets/muneeb.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

const StyledCard = styled(Card)({
    position: 'relative',
    maxWidth: 345,
    margin: 'auto',
    borderRadius: 10,
    overflow: 'visible',
    border: '2px solid #884dc2', // Add border color here
});

const CoverPhoto = styled(CardMedia)({
    height: 140, // 35% of the card's height
    objectFit: 'cover',
    objectPosition: 'center',
});

const ProfileAvatar = styled(Avatar)({
    width: 80,
    height: 80,
    border: '3px solid white',
    position: 'absolute',
    top: '90px', // Adjust based on cover photo height and desired overlap
    left: 'calc(50% - 40px)', // Center horizontally
    zIndex: 1,
});

const ContentBox = styled(Box)({
    paddingTop: 40,
});

const cardData = [
    {
        image: fahad,
        avatar: fahad,
        name: 'Hamza Khan',
        title: 'Team Leader',
        description: 'Indus University, 6th-Semester, E-Commerce Project Team Leader'
    },
    {
        image: hamza,
        avatar: hamza,
        name: 'Muhammad Aarij',
        title: 'Project Designer',
        description: 'Indus University, 6th-Semester, E-Commerce Project Designer'
    },
    {
        image: muneeb,
        avatar: muneeb,
        name: 'Muneeb-Ur-Rehman',
        title: 'Project Developer',
        description: 'Indus University, 6th-Semester, E-Commerce Project Developer'
    },
    {
        image: aarij,
        avatar: aarij,
        name: 'Fahad Khan',
        title: 'Project Tester',
        description: 'Indus University, 6th-Semester, E-Commerce Project Tester'
    },
];

const CustomCard = () => {
    const navigate = useNavigate()

    const redirectToHome = () => {
        navigate('/')
    }
    return (
        <>
            <Container>
                <Grid container spacing={2} justifyContent="center" style={{ marginTop: "30px" }}>
                    {cardData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={6} lg={6} key={index} display="flex" justifyContent="center">
                            <StyledCard>
                                <CoverPhoto
                                    component="img"
                                    alt={`${card.name} Cover`}
                                    image={card.image}
                                    name={`${card.name} Cover`}
                                />
                                <ProfileAvatar
                                    alt={`${card.name} Avatar`}
                                    src={card.avatar}
                                />
                                <CardContent>
                                    <ContentBox>
                                        <Typography variant="h6" component="div"> {/* Changed variant to h6 for smaller font */}
                                            {card.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {card.description}
                                        </Typography>
                                    </ContentBox>
                                </CardContent>
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
                <div style={{ width: "100%", display: 'flex', justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                    <Button style={{ backgroundColor: "#884dc2", color: "#fff" }} className='set-btn' onClick={redirectToHome}>Go to Home page</Button>
                </div>
            </Container>
            <div style={{ marginTop: "30px" }}>
                <Footer />
            </div>
        </>
    );
};

export default CustomCard;
