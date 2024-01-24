import React from 'react';
import { Box, Heading, Text, Button, SimpleGrid } from '@chakra-ui/react';
import Slider from 'react-slick';
import WelcomeSection from '../components/WelcomeSection';
import Image1 from '../assets/images/img_01.jpg';
import Image2 from '../assets/images/img_02.jpg';
import Image3 from '../assets/images/img_03.jpg';
import Image4 from '../assets/images/img_04.jpg';
import Image5 from '../assets/images/img_05.jpg';
import Image6 from '../assets/images/img_06.jpg';
import ServicesHighlights from '../components/ServicesHighlights';
import Footer from '../components/Footer'

function HomePage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Box>
            <Slider {...settings}>
                <Box h="60vh" bgImage={`url(${Image3})`} bgSize="cover" bgPosition="center">
                    <Heading color="white" mb={3}>Descubra o Luxo</Heading>
                </Box>
                <Box h="60vh" bgImage={`url(${Image4})`} bgSize="cover" bgPosition="center">
                    <Heading color="white" mb={3}>Relaxe na Natureza</Heading>
                </Box>
                <Box h="60vh" bgImage={`url(${Image5})`} bgSize="cover" bgPosition="center">
                    <Heading color="white" mb={3}>Relaxe na Natureza</Heading>
                </Box>
                <Box h="60vh" bgImage={`url(${Image6})`} bgSize="cover" bgPosition="center">
                    <Heading color="white" mb={3}>Relaxe na Natureza</Heading>
                </Box>
                {/* Adicione mais slides conforme necessário */}
            </Slider>
            <SimpleGrid columns={3} spacing={10} p={10}>
                {/* Cards de características */}
            </SimpleGrid>
            <WelcomeSection />
            <ServicesHighlights />
            <Footer />
        </Box>
    );
}

export default HomePage;
