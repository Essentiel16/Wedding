import React from 'react'
import { Text, HStack, Box, Flex } from "@chakra-ui/react";
import { TimeIcon, CalendarIcon, ArrowRightIcon } from '@chakra-ui/icons';

function event() {
  return (
    <Box bgImage="url('/assets/pictures/2.3.jpeg')" bgRepeat="no-repeat"
    boxShadow="inset 0 0 0 2000px rgba(26, 12, 32, 0.75)"
    bgSize="cover" minH="300px" mt="3rem"  py="1rem" px="1.6rem"
  >
    <Text color="brand.light" fontSize='3.6rem' textAlign='center'>OUR SPECIAL EVENT</Text>
    <Text mt=".9rem" color="brand.light" py="0" px=".5rem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio urna, maximus bibendum pulvinar eu, molestie eu arcu. Vestibulum elementum magna vel erat sagittis egestas. Vestibulum aliquam, ex eu vulputate porta, tellus enim sollicitudin ante</Text>
    <div style={{display: 'block'}}>
      <Box border='1px solid #fff' mt='12px'>
        <Text bg='brand.magenta' height='48px' color="brand.light" textAlign= 'center' py= '12px' fontSize= '20px'>CHURCH CEREMONY</Text>

        <Flex borderBottom='2px solid rgba(208, 88, 73, 0.83)' px="1rem" mt="1rem" pb=".5rem">
        <HStack spacing="24px">
        <TimeIcon w={8} h={8} color="brand.light" />
          <Text color="#fff" fontSize="1.5rem">10:00AM</Text>
          </HStack>
        </Flex>
        <Flex borderBottom='2px solid rgba(208, 88, 73, 0.83)' px="1rem" mt="1rem" pb=".5rem">
        <HStack spacing="24px">
          <CalendarIcon w={8} h={8} color="brand.light"/>
          <Text color="#fff" fontSize="1.5rem">Friday, 26th February, 2022</Text>
          </HStack>
        </Flex>
         <Flex px="1rem" mt="1rem" pb=".5rem">
        <HStack spacing="24px">
          <ArrowRightIcon w={8} h={8} color="brand.light" />
          <Text color="#fff" fontSize="1.5rem">Saint John&apos;s Anglican Church, Igbein, Abeokuta.</Text>
          </HStack>
        </Flex>
      </Box>

      <Box border='1px solid #fff' mt='2rem'>
        <Text bg='brand.magenta' height='48px' color="brand.light" textAlign= 'center' py= '12px' fontSize= '20px'>WEDDING PARTY</Text>

        <Flex borderBottom='2px solid rgba(208, 88, 73, 0.83)' px="1rem" mt="1rem" pb=".5rem">
        <HStack spacing="24px">
        <TimeIcon w={8} h={8} color="brand.light" />
          <Text color="#fff" fontSize="1.5rem">12:00PM</Text>
          </HStack>
        </Flex>
        <Flex borderBottom='2px solid rgba(208, 88, 73, 0.83)' px="1rem" mt="1rem" pb=".5rem">
        <HStack spacing="24px">
          <CalendarIcon w={8} h={8} color="brand.light"/>
          <Text color="#fff" fontSize="1.5rem">Friday, 26th February, 2022</Text>
          </HStack>
        </Flex>
         <Flex px="1rem" mt="1rem" pb=".5rem">
        <HStack spacing="24px">
          <ArrowRightIcon w={8} h={8} color="brand.light" />
          <Text color="#fff" fontSize="1.5rem">Silver Jubilee Multipurpose Hall, Onikolobo, Abeokuta.</Text>
          </HStack>
        </Flex>
      </Box>
    </div>

  </Box>
  )
}

export default event
