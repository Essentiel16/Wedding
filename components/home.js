import React from 'react'
import { Text, Box } from "@chakra-ui/react";
import Countdown from "../components/countdown";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <Box
    h="70rem"
    bgImage="url('/assets/pictures/3.3.jpeg')"
    bgPosition="center"
    bgRepeat="no-repeat"
    boxShadow="inset 0 0 0 2000px rgba(115, 98, 123, 0.75)"
    bgSize="cover"
    pos="relative"
  >
    <Box className={styles.text} >
      <Text
        color="brand.light"
        fontSize="4.8rem"
        fontStyle="italic"
        fontWeight="500"
        textAlign="center"
      >
        Mofeoluwa
      </Text>
      <Text
        color="brand.light"
        fontSize="2.4rem"
        fontStyle="normal"
        fontWeight="200"
        textAlign="center"
      >
        weds
      </Text>
      <Text
        color="brand.light"
        fontSize="4.8rem"
        fontStyle="italic"
        fontWeight="500"
        textAlign="center"
      >
        OluwaSanmi
      </Text>
    </Box>
    <div className={styles.counter}
      pos="absolute"
      w="37rem"
      justifyContent="space-around"
      top="81%"
      left="0"
      // left={[0, 20, 40, 60]}
      right="0"
    >
      <Countdown />
    </div>
  </Box>
  )
}

export default Home
