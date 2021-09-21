import React from "react";
import HeadTag from "../components/headTag";
import { Text, Grid, Box } from "@chakra-ui/react";
import Navbar from "../components/navbar/navbar";
import Rave from "../components/rave";
import PhotoCard from "../components/PhotoCard/photoCard";
import Form from "../components/form";
import AboutUs from "../components/About/aboutUs";
import Event from "../components/event";
import "animate.css"
import Home from "../components/home";


function index() {
  return (
    <Box>
      <HeadTag title="Our Wedding" />
      <Navbar />

      <Home />
      <Box mt="2rem" id="about">
        <Text
          fontSize="3.6rem"
          fontWeight="500"
          color="brand.black"
          textAlign="center"
        >
          Our Story
        </Text>
        <Text mt="2rem" px="1.5rem">
          If we had to tell you one thing about us... it would be that
          we&apos;re so thankful. Thankful that God brought us together. In life
          you interact with a lot of different people, but only once in a
          lifetime do you find someone who is your perfect match. We&apos;re so
          excited to be getting married and most of all excited to share our
          lives with one another. We are also grateful for the support of our
          family and friends over the past three years and feel blessed to have
          you all in our lives. We look forward to sharing this special moment
          with you!
        </Text>
        <AboutUs />

        <Box px="1rem" py="1rem" bg="brand.dark" mt="3rem">
          <Text
            fontSize="2.4rem"
            fontStyle="italic"
            fontWeight="400"
            color="brand.light"
            textAlign="center"
          >
            Today and always, beyond tomorrow, I need you beside me,
            <br />
            always as my best friend, lover and forever soul mate.
          </Text>
        </Box>

        <Event />
      </Box>

      <Rave />
      <Box mt="2rem">
        <Text textAlign="center" color="brand.black" fontSize="3.6rem" class="animate__animated animate__shakeX">GALLERY</Text>
        <Text textAlign="center" color="brand.black" fontSize="1.6rem" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio
          urna, maximus bibendum pulvinar eu, molestie eu arcu. Vestibulum
          elementum magna vel erat sagittis egestas. Vestibulum aliquam, ex eu
          vulputate porta, tellus enim sollicitudin ante
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} p="1rem">
          <Box
            w="100%"
            h="400"
            bgImage="url('/assets/pictures/1.jpeg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          />
          <Box
            w="100%"
            h="400"
            bgImage="url('/assets/pictures/2.1.jpeg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          />
          <Box
            w="100%"
            h="400"
            bgImage="url('/assets/pictures/2.2.jpeg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          />
          <Box
            w="100%"
            h="400"
            bgImage="url('/assets/pictures/2.3.jpeg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          />
        </Grid>

        <Grid templateColumns="repeat(4, 1fr)" gap={6} p="1rem">
          <Box
            w="100%"
            h="400"
            bgImage="url('/assets/pictures/3.3.jpeg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          />
          <Box
            w="100%"
            h="400"
            bgImage="url('/assets/pictures/3.3.jpeg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          />
          <Box
            w="100%"
            h="400"
            bgImage="url('/assets/pictures/3.3.jpeg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          />
          <Box
            w="100%"
            h="400"
            bgImage="url('/assets/pictures/2.4.jpeg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          />
        </Grid>
      </Box>

      <Box mt="3rem">
        <Text textAlign="center" color="brand.black" fontSize="3.6rem">
          RSVP
        </Text>
        <Form />
      </Box>

      <Box mt="3rem">
        <Text textAlign="center" color="brand.black" fontSize="2.4rem">
          BRIDESMAIDS & GROOMSMEN
        </Text>
        <PhotoCard />
      </Box>
      <Box bg="brand.black" h="6rem">
        <Text color="brand.light" textAlign="center" fontSize="1.5rem" py="2rem">Ideas are the beginging of all fortune</Text>
      </Box>
    </Box>
  );
}

export default index;
