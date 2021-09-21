import {
  Text,
  Input,
  Button,
  Stack,
  Box,
  Select,
  Radio,
  RadioGroup,
  Textarea,
} from "@chakra-ui/react";

function Form() {
  return (
    <Box 
    bgImage="url('/assets/pictures/3.2.jpeg')"
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize="cover"
  >
    <Box
      mx="3rem"
      bg="brand.main"
      px="1.5rem"
      py="3rem"
      minW="30.7rem"
      zIndex="4"
    >
      <Text
        color="brand.black"
        fontSize="2rem"
        fontWeight="700"
        textAlign="center"
      >
        {" "}
        Will You be attending ?{" "}
      </Text>
      <Box
        as="form"
      >
        <Stack spacing={3} mt="1.5rem">
          <Text mb="0.5rem" color="brand.gray">
            Full Name
          </Text>
          <Input
            h="4.8rem"
            fontSize="1.5rem"
            color="brand.black"
            variant="outline"
            placeholder="Enter your full name"
            id="name"
            // value={contactInfo.name}
            // onChange={onChange}
            _focus={{ boxShadow: "none" }}
            borderRadius="5rem"
          />
          <Text mb="0.5rem" color="brand.gray">
            Email
          </Text>
          <Input
            h="4.8rem"
            fontSize="1.5rem"
            color="brand.black"
            variant="outline"
            placeholder="Enter your email"
            id="name"
            // value={contactInfo.name}
            // onChange={onChange}
            _focus={{ boxShadow: "none" }}
            borderRadius="5rem"
          />
          <Text mb="0.5rem" color="brand.gray">
            Meal Preference
          </Text>
          <Select
            variant="outline"
            fontSize="1.5rem"
            color="brand.gray"
            placeholder="Meal Preference"
            h="4.8rem"
            _focus={{ boxShadow: "none" }}
            borderRadius="50rem"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Box mt="2rem">
            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="row">
                <Radio
                  colorScheme="green"
                  value="1"
                  _focus={{ boxShadow: "none" }}
                >
                  <Text fontSize="1.5rem">Yes, I will be there</Text>
                </Radio>
                <Radio
                  colorScheme="green"
                  value="2"
                  _focus={{ boxShadow: "none" }}
                  fontSize="1.5rem"
                >
                  <Text fontSize="1.5rem">Sorry, I cant come</Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Text mb="0.5rem" color="brand.gray">
            Note
          </Text>
          <Textarea
            fontSize="1.5rem"
            color="brand.black"
            variant="outline"
            placeholder="Leave a note"
            _focus={{ boxShadow: "none" }}
            borderRadius=".8rem"
            id="note"
          />
        </Stack>
        <Button
          h="4.2rem"
          w="15.6rem"
          mt="2rem"
          fontSize="1.5rem"
          borderRadius="5rem"
          bg="brand.dark"
          _focus={{ boxShadow: "none" }}
          color="brand.light"
        >
          Confirm
        </Button>
      </Box>
    </Box>
    </Box>
  );
}

export default Form;
